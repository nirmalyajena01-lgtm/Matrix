import CredentialsProvider from 'next-auth/providers/credentials';
import type {NextAuthOptions} from 'next-auth';
export const authOptions:NextAuthOptions={
 session:{strategy:'jwt'},
 providers:[CredentialsProvider({name:'MATRIX Authority',credentials:{email:{label:'Email',type:'email'},password:{label:'Password',type:'password'}},async authorize(c){
  const users:any={ 'admin@matrix.demo':{password:'matrixadmin',name:'Campus Admin',role:'ADMIN'}, 'responder@matrix.demo':{password:'matrixresponder',name:'Responder 03',role:'RESPONDER'} };
  const u=c?.email?users[c.email]:null; if(u&&c?.password===u.password)return {id:c.email,name:u.name,email:c.email,role:u.role}; return null;
 }})],
 callbacks:{async jwt({token,user}){if(user)token.role=(user as any).role;return token},async session({session,token}){(session.user as any).role=token.role;return session}}
};
