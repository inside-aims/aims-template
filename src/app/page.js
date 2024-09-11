import Image from "next/image";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>

    <Navbar/>
    <Hero/>
    <Services/>
    </>
  );
}
