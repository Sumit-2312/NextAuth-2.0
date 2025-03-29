'use client'

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function RealHome(){
  return <SessionProvider>
    <Home />
  </SessionProvider>
}


export  function Home() {
  const session = useSession();  // because it is a client component
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        {session.status === 'authenticated' ?
          <div className="flex flex-col gap-10">
              <button onClick={()=> signOut()}>Logout</button>
              {JSON.stringify(session)}
          </div>
          : 
          <button onClick={()=>signIn()}>SignIn</button>}
        
        
      </h1>
    </div>
  );
}
