"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { getGallery } from "@/lib/gallery";
import { getShowreel } from "@/lib/videos";
import { VideoEmbed } from "@/components/VideoEmbed";
import { siteConfig } from "@/lib/site";

// Renders JSON-LD structured data for SEO (WebSite + WebPage + Person/Brand entity).
function StructuredData() {
  const url = siteConfig.url.replace(/\/+$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: siteConfig.name,
        url,
        jobTitle: "3D Artist",
        sameAs: [siteConfig.socials.instagram].filter(Boolean),
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Renders the single-page raw layout: big typography, 6 images, and one video embed (contact lives in Footer only).
export default function HomePage() {
  const reduce = useReducedMotion();
  const images = getGallery().slice(0, 6);
  const showreel = getShowreel();

  return (
    <div className="pb-12">
      <StructuredData />

      <SectionReveal className="pt-2">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-[#2f48ff] leading-[0.78] tracking-[-0.06em] text-[clamp(72px,10vw,180px)]"
          >
            KAHOZONE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0 : 0.07,
              duration: reduce ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-3xl text-center text-sm text-[#2f48ff]/80"
          >
            A quiet archive of frames — minimal presentation, maximum intent.
            Lighting, materials, composition.
          </motion.p>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-10" delay={0.06}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: reduce ? 0 : 0.08 },
            },
          }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
        >
          {images.map((img) => (
            <motion.div
              key={img.src}
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="min-w-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="h-auto w-full"
                priority={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </SectionReveal>

      <SectionReveal className="mt-14" delay={0.08}>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <VideoEmbed
            provider={showreel.provider}
            id={showreel.id}
            title={showreel.title}
          />
        </motion.div>
      </SectionReveal>
    </div>
  );
}
