import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <body className="relative">
        <Navbar />
        <Hero />
        <Services />
      </body>
    </>
  );
}
