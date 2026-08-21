import{NextRequest,NextResponse}from'next/server';import{prisma}from'@/lib/prisma';
export async function GET(){return NextResponse.json({data:await prisma.alert.findMany({orderBy:{createdAt:'desc'}})})}
export async function POST(req:NextRequest){const b=await req.json();const a=await prisma.alert.create({data:{id:`ALT-${Date.now()}`,title:b.title,message:b.message,zone:b.zone,audience:b.audience}});return NextResponse.json({data:a},{status:201})}
