import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

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
                    clientId: "khfsljf",    
                    clientSecret: "khfsljf"
                }),
                FacebookProvider({
                    clientId: "khfsljf",
                    clientSecret: "khfsljf"
                })
        ]

})

export {handler as GET , handler as POST}; 
// export GET = handler;
// export POST = handler;






