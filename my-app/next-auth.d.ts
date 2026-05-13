import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth"{
    /**
     * Returned by `useSession`,`getSession` and received as a prop on the `SEssionProvide` React Context
     */

    interface Session{
        user:{
            id:string;
        } & DefaultSession["user"];
    }
}