import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler  = NextAuth({

        providers: [
                CredentialsProvider({
                    // The name to display on the sign in form (e.g. "Sign in with...")
                    name: "Email",
                    // `credentials` is used to generate a form on the sign in page.
                    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
                    // e.g. domain, username, password, 2FA token, etc.
                    // You can pass any HTML attribute to the <input> tag through the object.
                    credentials: {
                    username: { label: "Username", type: "text", placeholder: "jsmith" },
                    password: { label: "Password", type: "password" },
                    AdminPassword: {label:"Admin Password", type:"password"}
                    },
                    async authorize(credentials, req) {
                    // credentials.username, credentials.password and credentials.AdminPassword are the input fields in the form
                    // req is the HTTP request object that contains `body` and `query` parameters
                    // req.body contains the parsed body of the request, containing the form data
                    // req.query contains the parsed query string parameters of the request
                    // Add logic here to look up the user from the credentials supplied
                    const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        return user
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null
                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                    }
                }),
                GoogleProvider({
                    clientId: process.env.GOOGLE_CLIENT_ID as string,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
                }),
                GithubProvider({
                    clientId: process.env.GITHUB_CLIENT_ID as string,
                    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
                }),
               
                
        ],
        secret: process.env.NEXTAUTH_SECRET,
        pages:{  // if custom login page is created then whenever singIn() function is called it redirects to the login page 
            signIn: '/login'
        }
})

export {handler as GET , handler as POST}; 
// export GET = handler;
// export POST = handler;






