import SuccessPopup from "@/components/popup";
import SignIN from "@/components/SiginButton";
import SignOut from "@/components/SignoutButton";
import { getServerSession } from "next-auth"

export default async function(){

    const session = await getServerSession();
    // we get three functions we session 
    // 1- session.status => to check if the session is loading or not, it has loading,authenticated,unauthenticated
    // 2- session.data => to get the session data, it has the properties that are filled in the session object in the auth provider
    // 3- session.update() => to update the session data, it takes an object as a parameter and updates the session data with the new data

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

            <SuccessPopup/>
        </div>
    )
}