import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  // callbacks: {
  //   jwt({ token, account }) {
  //     if (account) {
  //       token.accessToken = account.access_token; // Save access token in JWT
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     if (token.accessToken) {
  //       session.user.accessToken = token.accessToken as any; // Add access token to session
  //     }
  //     return session;
  //   },
  // },
};
