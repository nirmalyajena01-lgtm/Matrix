import {PrismaClient} from '@prisma/client'; const p=new PrismaClient();
async function main(){await p.incident.upsert({where:{id:'INC-1042'},update:{},create:{id:'INC-1042',category:'MEDICAL',description:'Student collapsed near Block C',severity:'CRITICAL',status:'RESPONDING',anonymous:true,latitude:20.3524,longitude:85.8185,building:'Block C'}});}
main().finally(()=>p.$disconnect());
