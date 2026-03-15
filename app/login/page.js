"use client";

import { useState } from "react";

export default function LoginPage(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async(e)=>{
    e.preventDefault();

    const res = await fetch("/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if(data.success){
      alert("Login successful");
      window.location.href="/admin";
    }else{
      alert(data.message);
    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-emerald-50">

      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-emerald-600 text-white p-3 rounded">
          Login
        </button>

      </form>

    </div>

  )
}