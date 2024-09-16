import Particles from "@/components/magicui/particles";
import BlureFadeDemo from "./ui/BlureFadeDemo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import Footer from "./Footer";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { DockDemo } from "./DockDemo";
const ParticlesDemo = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-20 md:px-10 px-5 overflow-hidden 
    rounded-lg md:border bg-background md:shadow-xl">
      <span
        className="pointer-events-none whitespace-pre-wrap
       bg-gradient-to-b from-black to-gray-300/80 bg-clip-text 
       md:text-left text-center md:text-6xl text-4xl font-semibold
       leading-none text-white"
      >
        Services
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="mt-10">
        <BlureFadeDemo />
        <div className="mt-32 flex ">
          <CardHoverEffectDemo />
        </div>
      </div>
      <div>
        <AnimatedTooltipPreview />
        <div>
          <div className="fixed bottom-10 z-[9999] w-full flex justify-center pe-12">
          <DockDemo />
          </div>

        </div>
      </div>
     
      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default ParticlesDemo;
