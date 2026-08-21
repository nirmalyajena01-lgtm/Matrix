import CredentialsProvider from 'next-auth/providers/credentials';
import type {NextAuthOptions} from 'next-auth';
export const authOptions:NextAuthOptions={
 session:{strategy:'jwt'},
 providers:[CredentialsProvider({name:'MATRIX Admin',credentials:{email:{label:'Email',type:'email'},password:{label:'Password',type:'password'}},async authorize(c){if(c?.email==='admin@matrix.demo'&&c?.password==='matrixadmin')return {id:'ADM-001',name:'Campus Admin',email:c.email,role:'ADMIN'} as any;return null;}})],
 callbacks:{async jwt({token,user}){if(user)token.role=(user as any).role;return token},async session({session,token}){(session.user as any).role=token.role;return session}}
};
