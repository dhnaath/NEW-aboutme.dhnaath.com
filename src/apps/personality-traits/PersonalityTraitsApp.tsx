import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import React from 'react';
import { ExternalLink } from 'lucide-react';

import { ExperienceCard } from '../../components/shared/ExperienceCard';
import { mbtiData } from './data/mbtiData';

export const priorityItems = [

  {
    title: "Libra",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            ♎
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                ZODIAK
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Libra
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Elemen Udara
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "Kuda",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🐴
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                SHIO
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Kuda
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Elemen Logam
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "TP",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "https://www.16personalities.com/intp-personality",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🧠
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                IN
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                TP
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Logician
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "FJ",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "https://www.16personalities.com/infj-personality",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🕯️
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                IN
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                FJ
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Advocate
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "TJ",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "https://www.16personalities.com/intj-personality",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            ♟️
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                IN
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                TJ
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Architect
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "6",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🔢
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                NUMEROLOGI
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                6
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Life Path
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "Quality Time",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "https://satupersen.net/psikotes-online-gratis/tes-love-language/result/6ab498b1d1f92d00017307ac",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            ❤️
          </div>
          
          <div style={{ textAlign: "left", width: "100%", minWidth: 0 }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                LOVE LANGUAGE
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Quality Time
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Waktu Berkualitas
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "D (Dominance)",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "https://satupersen.net/psikotes-online-gratis/tes-disc/result/6a80df91418920000177b682",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🎯
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                DISC
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                D (Dominance)
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Sang Penentu
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "Openness to Experience - Tinggi",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "https://satupersen.net/psikotes-online-gratis/tes-ocean/result/6ab49ac4d1f92d000173080d",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🌊
          </div>
          
          <div style={{ textAlign: "left", width: "100%", minWidth: 0 }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                OCEAN
              </p> 
              
              <p style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", lineHeight: "calc(1.5 * clamp(1rem, 2vw, 1.5rem))", whiteSpace: "nowrap", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Openness to Experience
              </p>
              
              <p style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)", lineHeight: "calc(1.2 * clamp(0.75rem, 1.5vw, 0.9rem))", whiteSpace: "nowrap", fontWeight: 800, textTransform: "uppercase", margin: 0 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Keterbukaan Pengalaman (Tinggi)
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "Tipe 3",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🏆
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                ENNEAGRAM
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Tipe 3
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                The Achiever
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "Minggu Pon",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            📜
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                WETON
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Minggu Pon
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Bumi Kapetak
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "12",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🧮
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                NEPTU
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                12
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                Minggu (5) + Pon (7)
              </p>
          </div>
      </div>
    ),
  },
  {
    title: "Blood Type A+",
    description: "",
    ctaLabel: "Pelajari Lebih Lanjut",
    ctaHref: "#",
    image: "",
    customNode: (
      <div style={{ padding: "clamp(0.5rem, 1.5vw, 1.5rem)", flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem, 1.5vw, 1.5rem)", width: "100%", height: "100%" }} className="rounded-3xl bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-sm border border-black/10 dark:border-white/10 group-hover:shadow-md transition-shadow">
          <div style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, flexShrink: 0 }} aria-hidden="true">
            🩸
          </div>
          
          <div style={{ textAlign: "left", width: "100%" }}>
              <p style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", fontWeight: 900, textTransform: "uppercase", padding: "0.25rem 0.5rem", margin: "0 0 0.5rem 0", display: "inline-block" }} className="bg-[#3D3D3D] text-[#F2F0EF] dark:bg-[#F2F0EF] dark:text-[#3D3D3D] rounded-md">
                BLOOD TYPE
              </p> 
              
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 900, textTransform: "uppercase", margin: "0 0 0.2rem 0" }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                A+
              </p>
              
              <p style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)", fontWeight: 800, textTransform: "uppercase", margin: 0, lineHeight: 1.2 }} className="text-[#3D3D3D] dark:text-[#F2F0EF]">
                ABO System
              </p>
          </div>
      </div>
    ),
  }
];

export default function PersonalityTraitsApp({ 
  activeApp, 
  setActiveApp, 
  docTarget,
  showcaseTarget,
  onDocClick,
  onShowcaseClick 
}: { 
  activeApp?: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits', 
  setActiveApp?: (app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') => void, 
  docTarget?: 'resume' | 'cover-letter',
  showcaseTarget?: 'portfolio' | 'personality-traits',
  onDocClick?: () => void,
  onShowcaseClick?: () => void,
  lastStaticDoc?: 'resume' | 'cover-letter' 
}) {
  return (
    <div className="w-full min-h-screen bg-transparent overflow-x-hidden relative flex flex-col items-center font-sans">
      <div className="mobile-scale-main w-full z-10 flex flex-col items-center">
        {/* MBTI Section - Duplicated from Working Experience */}
        <section id="mbti" className="pt-[15pt] pb-0 bg-transparent w-full mb-8">
          <div className="w-full px-[10pt]">
            <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Myers-Briggs Type Indicator</h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Introverted (I) and Intuitive (N) as Core Cognitive Domain</p>
            </div>
            
            <div className="w-[81%] max-w-[56.7rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[priorityItems[2], priorityItems[3], priorityItems[4]].map((item, index) => (
                item.ctaHref !== "#" ? (
                  <a key={index} href={item.ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full h-full group no-underline relative">
                    {item.customNode}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" /></div>
                  </a>
                ) : (
                  <div key={index} className="block w-full h-full group">
                    {item.customNode}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <section id="psychometric-profile" className="pt-[15pt] pb-0 bg-transparent w-full mb-8">
          <div className="w-full px-[10pt]">
            <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Psychometric Profile</h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">DISC, OCEAN, and Enneagram</p>
            </div>
            
            <div className="w-[81%] max-w-[56.7rem] mx-auto flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6">
              {[priorityItems[7], priorityItems[8], priorityItems[9]].map((item, index) => (
                item.ctaHref !== "#" ? (
                  <a key={index} href={item.ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem] h-full group no-underline relative">
                    {item.customNode}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" /></div>
                  </a>
                ) : (
                  <div key={index} className="block w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem] h-full group">
                    {item.customNode}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <section id="astrology-numerology" className="pt-[15pt] pb-0 bg-transparent w-full mb-8">
          <div className="w-full px-[10pt]">
            <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Astrology and Numerology</h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Zodiac, Chinese Zodiac, and Life Path</p>
            </div>
            
            <div className="w-[81%] max-w-[56.7rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[priorityItems[0], priorityItems[1], priorityItems[5]].map((item, index) => (
                item.ctaHref !== "#" ? (
                  <a key={index} href={item.ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full h-full group no-underline relative">
                    {item.customNode}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" /></div>
                  </a>
                ) : (
                  <div key={index} className="block w-full h-full group">
                    {item.customNode}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <section id="interpersonal-traits" className="pt-[15pt] pb-0 bg-transparent w-full mb-8">
          <div className="w-full px-[10pt]">
            <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Interpersonal Traits</h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Love Language and Blood Type</p>
            </div>
            
            <div className="w-[81%] max-w-[56.7rem] mx-auto flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6">
              {[priorityItems[6], priorityItems[12]].map((item, index) => (
                item.ctaHref !== "#" ? (
                  <a key={index} href={item.ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem] h-full group no-underline relative">
                    {item.customNode}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" /></div>
                  </a>
                ) : (
                  <div key={index} className="block w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem] h-full group">
                    {item.customNode}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <section id="javanese-primbon" className="pt-[15pt] pb-0 bg-transparent w-full mb-8">
          <div className="w-full px-[10pt]">
            <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
              <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Javanese Primbon</h2>
              <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Weton and Neptu</p>
            </div>
            
            <div className="w-[81%] max-w-[56.7rem] mx-auto flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6">
              {[priorityItems[10], priorityItems[11]].map((item, index) => (
                item.ctaHref !== "#" ? (
                  <a key={index} href={item.ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem] h-full group no-underline relative">
                    {item.customNode}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" /></div>
                  </a>
                ) : (
                  <div key={index} className="block w-full sm:w-[calc(50%-0.75rem)] lg:max-w-[25.92rem] h-full group">
                    {item.customNode}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <div className="w-[81%] max-w-[56.7rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityItems.filter((_, idx) => ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(idx)).map((item, index) => (
            item.ctaHref !== "#" ? (
              <a key={index} href={item.ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full h-full group no-underline relative">
                {item.customNode}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"><ExternalLink className="w-5 h-5 text-[#3D3D3D] dark:text-[#F2F0EF]" /></div>
                  </a>
            ) : (
              <div key={index} className="block w-full h-full group">
                {item.customNode}
              </div>
            )
          ))}
        </div>
      </div>
      
      <FloatingDocuments 
        activeApp={activeApp} 
        setActiveApp={setActiveApp} 
        docTarget={docTarget}
        showcaseTarget={showcaseTarget}
        onDocClick={onDocClick}
        onShowcaseClick={onShowcaseClick}
      />
    </div>
  );
}
