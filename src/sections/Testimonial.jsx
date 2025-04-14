import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/Glowcard";

function Testimonial() {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What People Say About Me" sub="💬 Testimonials" />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <GlowCard card={testimonial}>
                <div className="flex items-center gap-3">
                  <div>
                    <img src={testimonial.imgPath} alt={testimonial.name} />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
