import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

// Define an array of services rendered by AIMS
const services = [
  {
    src: "https://i.pinimg.com/736x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
    text: "Web Development",
  },
  {
    src: "https://i.pinimg.com/564x/6c/79/9b/6c799b857cd4c9bec799f713d02ea150.jpg",
    text: "Mobile App Development",
  },
  {
    src: "https://i.pinimg.com/564x/57/53/57/575357872defd693f837df458c6edad6.jpg",
    text: "I.T Support",
  },
  {
    src: "https://i.pinimg.com/564x/b2/ad/3a/b2ad3a7b34902e87b12ea3a45ac29850.jpg",
    text: "Graphic Design",
  },
  {
    src: "https://i.pinimg.com/564x/de/44/94/de44947988095f042c3c9d7066f8bd69.jpg",
    text: "Photography & Videography",
  },
  {
    src: "https://i.pinimg.com/736x/4a/27/46/4a274673abf7512da1a0a7316c4191ff.jpg",
    text: "Technology Consulting",
  },
];

const BlureFadeDemo = () => {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {services.map((service, idx) => (
          <BlurFade key={service.src} delay={0.45 + idx * 0.05} inView>
            <div className="mb-4  ">
              <img
                className="rounded-lg object-contain"
                src={service.src}
                alt={`AIMS service ${idx + 1}`}
              />
              <p className="text-center text-lg font-semibold mt-2">
                {service.text}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default BlureFadeDemo;
