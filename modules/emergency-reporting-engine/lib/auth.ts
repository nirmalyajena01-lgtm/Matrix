import CredentialsProvider from 'next-auth/providers/credentials';
import type {NextAuthOptions} from 'next-auth';
export const authOptions:NextAuthOptions={
  session:{strategy:'jwt'},
  providers:[CredentialsProvider({
    name:'MATRIX Student',
    credentials:{email:{label:'Email',type:'email'},password:{label:'Password',type:'password'}},
    async authorize(c){
      if(c?.email==='student@matrix.demo' && c?.password==='matrix2026')
        return {id:'STU-001',name:'Demo Student',email:c.email,role:'STUDENT'} as any;
      return null;
    }
  })],
  callbacks:{async jwt({token,user}){if(user)token.role=(user as any).role;return token},async session({session,token}){(session.user as any).role=token.role;return session}}
};
