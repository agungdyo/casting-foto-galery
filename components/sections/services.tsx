"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  Sparkles,
  Briefcase,
  BookOpen,
  Calendar,
  Camera,
  LucideIcon,
} from "lucide-react";

const services = [
  {
    id: "portrait",
    title: "Portrait Photography",
    description:
      "Capturing authentic personalities and emotions through expert lighting and direction. Perfect for individuals, families, and corporate headshots.",
    icon: User,
    features: ["Individual Portraits", "Family Sessions", "Corporate Headshots", "Creative Direction"],
  },
  {
    id: "fashion",
    title: "Fashion Photography",
    description:
      "High-end fashion imagery for brands, magazines, and campaigns worldwide. We bring creative vision to every shot.",
    icon: Sparkles,
    features: ["Editorial Shoots", "Lookbooks", "Runway Coverage", "Brand Campaigns"],
  },
  {
    id: "commercial",
    title: "Commercial Photography",
    description:
      "Professional product and brand photography that drives engagement and sales. Make your products shine.",
    icon: Briefcase,
    features: ["Product Photography", "Brand Campaigns", "Advertising", "E-commerce"],
  },
  {
    id: "editorial",
    title: "Editorial Photography",
    description:
      "Story-driven visual narratives for magazines, publications, and online platforms. Every image tells a story.",
    icon: BookOpen,
    features: ["Magazine Features", "Article Illustrations", "Online Publications", "Content Creation"],
  },
  {
    id: "event",
    title: "Event Photography",
    description:
      "Comprehensive coverage of corporate events, galas, and special occasions. Never miss a moment.",
    icon: Calendar,
    features: ["Corporate Events", "Galas & Awards", "Conferences", "Private Celebrations"],
  },
  {
    id: "product",
    title: "Product Photography",
    description:
      "Stunning product imagery for e-commerce, catalogs, and advertising campaigns. Showcase your products beautifully.",
    icon: Camera,
    features: ["E-commerce Listings", "Catalog Shoots", "Advertising Campaigns", "360° Views"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From concept to final delivery, we provide comprehensive photography
            services tailored to your unique needs and vision.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const ref = useRef(null);
  const isCardInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6 lg:p-8">
          <div className="space-y-6">
            {/* Icon */}
            <div className="p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <service.icon className="w-8 h-8" />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
