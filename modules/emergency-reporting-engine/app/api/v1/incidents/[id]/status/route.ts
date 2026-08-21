import {NextRequest,NextResponse} from 'next/server'; import {prisma} from '@/lib/prisma';
export async function PATCH(req:NextRequest,{params}:{params:{id:string}}){
 const body=await req.json(); const allowed=['REPORTED','VERIFIED','ASSIGNED','RESPONDING','RESOLVED'];
 if(!allowed.includes(body.status))return NextResponse.json({error:'Invalid status'},{status:400});
 const incident=await prisma.incident.update({where:{id:params.id},data:{status:body.status}});
 return NextResponse.json({data:incident});
}
