"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "State-of-the-art cameras, lighting, and post-processing tools for exceptional results.",
  },
  {
    icon: Award,
    title: "Award-Winning Work",
    description:
      "Recognized by industry peers for excellence in visual storytelling and creative direction.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We listen to your vision and collaborate closely to bring your ideas to life.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Efficient workflows ensure your project is delivered on time without compromising quality.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image section */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/about-studio/800/1000"
                alt="Our photography studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 p-6 bg-card rounded-2xl shadow-xl border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                We Tell Stories Through{" "}
                <span className="text-primary">Stunning Images</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Casting Photo Gallery is a premier photography studio founded in New
              York. With over 15 years of experience, we have established
              ourselves as industry leaders in portrait, fashion, commercial, and
              editorial photography.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our team of passionate photographers combines technical expertise
              with creative vision to capture moments that resonate. We believe
              every image should tell a story and evoke emotion.
            </motion.p>

            {/* Features grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="p-2 h-fit rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
