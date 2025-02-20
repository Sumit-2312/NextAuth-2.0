import SignIN from "@/components/SiginButton";
import SignOut from "@/components/SignoutButton";
import { getServerSession } from "next-auth"

export default async function(){

    const session = await getServerSession();

    if(!session?.user){
        return (
            <div className="flex flex-col gap-10">
                <h1>
                    You are not signed in
                </h1>
               <SignIN/>
            </div>
        )
    }


    return (
        <div className="flex flex-col gap-10">
            <SignOut/>
            <h1>
                User details coming from the session in the the server component
            </h1>
            <p>
                {JSON.stringify(session)}
            </p>
        </div>
    )
}