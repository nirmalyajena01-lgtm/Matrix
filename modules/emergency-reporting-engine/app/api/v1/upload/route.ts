
import {NextRequest,NextResponse} from 'next/server';
import {mkdir,writeFile} from 'fs/promises'; import path from 'path';
export async function POST(req:NextRequest){
 const form=await req.formData(); const file=form.get('file');
 if(!(file instanceof File))return NextResponse.json({error:'file required'},{status:400});
 if(file.size>20*1024*1024)return NextResponse.json({error:'max 20MB'},{status:413});
 const allowed=['image/jpeg','image/png','image/webp','video/mp4','video/webm'];
 if(!allowed.includes(file.type))return NextResponse.json({error:'unsupported file type'},{status:415});
 const ext=file.name.split('.').pop()||'bin'; const name=`${crypto.randomUUID()}.${ext}`;
 const dir=path.join(process.cwd(),'public','uploads'); await mkdir(dir,{recursive:true}); await writeFile(path.join(dir,name),Buffer.from(await file.arrayBuffer()));
 return NextResponse.json({url:`/uploads/${name}`,name});
}
