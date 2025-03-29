"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false, // Prevents automatic redirection
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
        router.push('/Home')
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <p className="text-lg text-center text-gray-600 mt-2">
          Please login to access the app
        </p>

       
        

        {/* Input Fields */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full  text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

                {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
                )}

          <button
            type="submit"
            className="px-4 text-black  py-2 w-full  bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Social Logins */}
        <div className="mt-6 flex flex-col space-y-4">
          <button
            onClick={() => signIn("google",{callbackUrl:"/Home"})}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/Home" })}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
