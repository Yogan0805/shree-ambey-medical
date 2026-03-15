"use client";

import { useState } from "react";

export default function SignupPage(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handleSignup = async (e)=>{
    e.preventDefault();

    const res = await fetch("/api/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    if(data.success){
      setMessage("Account created successfully");
    } else {
      setMessage("Signup failed");
    }
  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-emerald-50">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-lg"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          />

          <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />

          <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />

          <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg"
          >
          Sign Up
          </button>

        </form>

        {message && (
          <p className="text-center mt-4 text-sm">{message}</p>
        )}

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <a href="/login" className="text-emerald-600 ml-1">
            Login
          </a>
        </p>

      </div>

    </div>

  )
}