import connectDB from "@/lib/mongodb";
import Prescription from "@/models/Prescription";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const prescription = await Prescription.create({
      name: body.name,
      phone: body.phone,
      image: body.image,
    });

    return Response.json({ success: true, prescription });

  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}