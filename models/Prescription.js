import mongoose from "mongoose";

const PrescriptionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Prescription ||
  mongoose.model("Prescription", PrescriptionSchema);