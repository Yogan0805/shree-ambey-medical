import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Trust from "../components/Trust"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton";
import PrescriptionUpload from "@/components/PrescriptionUpload";
import MedicineSearch from "@/components/MedicineSearch";
import StoreMap from "@/components/StoreMap";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <PrescriptionUpload />
      <MedicineSearch />
      <StoreMap />
    </>
  )
}
