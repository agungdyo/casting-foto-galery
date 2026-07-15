"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "1. Battle Dress Uniform (BDU)",
    description:
      "Mengenakan setelan Baju BDU dan Celana BDU berwarna hitam pekat. Dirancang khusus untuk mobilitas tinggi, ketahanan di medan tugas, dan memberikan siluet tegap layaknya pasukan elit.",
  },
  {
    icon: Award,
    title: "2. Alas Kaki Taktis (Tactical Boots)",
    description:
      "Dilengkapi dengan sepatu Boots Delta yang kokoh. Memberikan kesan tangguh, siap tempur, dan memberikan pijakan yang aman untuk berbagai adegan aksi atau manuver fisik.",
  },
  {
    icon: Users,
    title: "3. Sistem Sabuk & Senjata",
    description:
      "Menggunakan Ikat Pinggang Tactical (heavy-duty tactical belt) yang dipadukan dengan Holster Serpa di bagian paha/pinggang, memberikan tampilan penyimpanan senjata api (sidearm) yang realistis dan siap cabut.",
  },
  {
    icon: Clock,
    title: "4. Aksesori Utilitas Tempur",
    description:
      "Dilengkapi dengan Pouch Tactical yang terpasang pada sabuk untuk menyimpan utilitas tambahan atau simulasi amunisi. Dilengkapi juga dengan pelindung lutut (kneepads) untuk keamanan ekstra saat melakoni adegan berlutut atau merayap.",
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
                src="/gallery/kolase-full-black.jpg"
                alt="Our photography studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating card */}
            {/* <motion.div
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
            </motion.div> */}
          </motion.div>

          {/* Content section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Tactical Talent Profile
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Siap Beraksi {" "}
                <span className="text-primary">Pemeran Pasukan Khusus & Aparat Keamanan</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Saya Agung Mei Prasetyo memiliki postur dan perawakan yang sangat ideal untuk memerankan karakter aparat penegak hukum, prajurit militer, atau tactical crew. Dengan fisik yang proporsional dan ekspresi yang tegas, ia siap membawakan peran-peran aksi dan kombat dengan meyakinkan di depan kamera.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             Untuk menunjang totalitas peran dan otentisitas visual, Saya didukung dengan set perlengkapan dan pakaian tactical standar operasi. Berikut adalah detail spesifikasi outfit yang digunakan untuk kebutuhan produksi:
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
