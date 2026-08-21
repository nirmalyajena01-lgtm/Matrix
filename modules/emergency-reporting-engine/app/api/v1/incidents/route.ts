import {NextRequest,NextResponse} from 'next/server';
import {z} from 'zod';
import {prisma} from '@/lib/prisma';
import {classify} from '@/lib/priority';
const schema=z.object({
 category:z.enum(['MEDICAL','FIRE','HARASSMENT','UNSAFE_LOCATION','INFRASTRUCTURE_FAILURE','ACCIDENT','OTHER']),
 description:z.string().min(3),
 anonymous:z.boolean().default(false),
 reporterName:z.string().optional(),
 latitude:z.number().optional(),
 longitude:z.number().optional(),
 building:z.string().optional(),
 landmark:z.string().optional(),
 evidenceUrl:z.string().optional()
});
export async function GET(){return NextResponse.json({data:await prisma.incident.findMany({orderBy:{createdAt:'desc'}})});}
export async function POST(req:NextRequest){
 try{
  const body=schema.parse(await req.json()); const severity=classify(body.category,body.description);
  const incidentId=`INC-${Math.floor(1000+Math.random()*8999)}`;
  const incident=await prisma.incident.create({data:{id:incidentId,...body,severity,reporterName:body.anonymous?null:body.reporterName}});
  const target=process.env.COMMAND_CENTER_URL;
  if(target){fetch(`${target}/api/v1/incidents`,{method:'POST',headers:{'content-type':'application/json','x-matrix-source':'reporting-engine'},body:JSON.stringify(incident)}).catch(()=>{});}
  return NextResponse.json({data:incident,priority:{severity,reason:`${body.category} + description analysis`},incidentId},{status:201});
 }catch(e){return NextResponse.json({error:'Invalid incident payload'},{status:400});}
}
