import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req){

  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  if(!user){
    return NextResponse.json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return NextResponse.json({ message: "Invalid password" });
  }

  return NextResponse.json({
    success: true,
    user
  });

}