
'use client';

import { signIn } from "next-auth/react"

export default function SignIN(){
    return(
        <button onClick={()=>signIn()}>
            Sign In
        </button>
    )
}