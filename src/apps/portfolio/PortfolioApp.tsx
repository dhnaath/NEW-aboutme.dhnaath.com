import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import React, { lazy, Suspense,  useState, useEffect  } from 'react';
import { Hero } from '../../components/portfolio/Hero';
import { motion, AnimatePresence } from "motion/react";

function FlipbookCard({ category, title, content, darkContent, darkImage, darkImages, imageClassName, link, customIcon, topLeftIcon, topLeftLink, disableFlip, disableSlide, lightMode, slidingBgColor, slidingTextColor }: { category: string, title: React.ReactNode, content: React.ReactNode, darkContent?: React.ReactNode, darkImage?: string, darkImages?: string[], imageClassName?: string, link?: string, customIcon?: React.ReactNode, topLeftIcon?: React.ReactNode, topLeftLink?: string, disableFlip?: boolean, disableSlide?: boolean, lightMode?: boolean, slidingBgColor?: string, slidingTextColor?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'spill' | 'text' | 'revert'>('idle');
  const [currentDirection, setCurrentDirection] = useState<'left' | 'right' | 'up' | 'down'>('left');
  const [revertDirection, setRevertDirection] = useState<'left' | 'right' | 'up' | 'down'>('right');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const darkImagesLength = darkImages?.length || 0;

  useEffect(() => {
    if (disableSlide) return;
    
    let isMounted = true;
    
    const initialDelay = Math.random() * 2000;
    const directions: ('left' | 'right' | 'up' | 'down')[] = ['left', 'right', 'up', 'down'];
    
    const run = async () => {
      await new Promise(r => setTimeout(r, initialDelay));
      while(isMounted) {
        setPhase('idle');
        setCurrentImageIndex(0);
        // Randomize direction before each animation cycle
        setCurrentDirection(directions[Math.floor(Math.random() * directions.length)]);
        setRevertDirection(directions[Math.floor(Math.random() * directions.length)]);

        // Wait in idle for 5.5s
        await new Promise(r => setTimeout(r, 5500));
        if (!isMounted) break;
        
        setPhase('spill');
        // Slide animation duration
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        setPhase('text');
        
        if (darkImagesLength > 0) {
          // Hold first image for 6 seconds
          await new Promise(r => setTimeout(r, 6000));
          if (!isMounted) break;

          for (let i = 1; i < darkImagesLength; i++) {
            setCurrentImageIndex(i);
            // Hold subsequent images for 6 seconds as well
            await new Promise(r => setTimeout(r, 6000));
            if (!isMounted) break;
          }
        } else {
          // Hold short paragraph for 6 seconds
          await new Promise(r => setTimeout(r, 6000));
        }

        if (!isMounted) break;
        
        setPhase('revert');
        // Revert animation duration
        await new Promise(r => setTimeout(r, 1000));
      }
    };
    run();
    return () => { isMounted = false; };
  }, [darkImagesLength]);

  const getInitialPosition = () => {
    switch(currentDirection) {
      case 'left': return { x: '-100%', y: '0%' };
      case 'right': return { x: '100%', y: '0%' };
      case 'up': return { x: '0%', y: '100%' };
      case 'down': return { x: '0%', y: '-100%' };
    }
  };

  const getRevertPosition = () => {
    switch(revertDirection) {
      case 'left': return { x: '-100%', y: '0%' };
      case 'right': return { x: '100%', y: '0%' };
      case 'up': return { x: '0%', y: '100%' };
      case 'down': return { x: '0%', y: '-100%' };
    }
  };

  return (
    <motion.div 
      className={`relative w-full h-[18.125rem] [perspective:1500px] ${!disableFlip ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (!disableFlip) setIsFlipped(!isFlipped);
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div 
        className={`w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Face (Cover) */}
        <div 
          className="absolute w-full h-full bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-[2rem] transition-shadow duration-300 p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden] overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
        >
          {/* Sliding Background Element */}
          <motion.div 
            className={`absolute inset-0 z-10 ${slidingBgColor ? '' : 'bg-[#F2F0EF] dark:bg-[#3D3D3D]'}`}
            style={{ backgroundColor: slidingBgColor }}
            initial={false}
            animate={{ 
              x: phase === 'spill' || phase === 'text' ? '0%' : (phase === 'revert' ? getRevertPosition().x : getInitialPosition().x),
              y: phase === 'spill' || phase === 'text' ? '0%' : (phase === 'revert' ? getRevertPosition().y : getInitialPosition().y),
            }}
            transition={{ 
              duration: phase === 'idle' ? 0 : 1.2, ease: [0.76, 0, 0.24, 1]
            }}
          />

          {/* Hidden Short Paragraph / Image */}
          <motion.div 
            className={`absolute z-20 ${slidingTextColor ? '' : 'text-[#3D3D3D] dark:text-[#F2F0EF]'} text-center flex flex-col justify-center items-center ${(darkImage || darkImages) ? 'inset-0 rounded-[2rem] overflow-hidden' : 'p-8'}`}
            style={{ pointerEvents: phase === 'text' ? 'auto' : 'none', color: slidingTextColor }}
            initial={false}
            animate={{ 
              opacity: phase === 'text' ? 1 : 0,
              y: phase === 'text' ? 0 : 20,
              scale: phase === 'text' ? 1 : 0.95
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {darkImages && darkImages.length > 0 ? (
              darkImages.map((img, idx) => (
                <motion.img 
                  key={idx}
                  src={img} 
                  alt={`${title} - ${idx}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} 
                  initial={false}
                  animate={{
                     x: currentImageIndex === idx ? '0%' : (idx < currentImageIndex ? '-100%' : '100%'),
                     opacity: currentImageIndex === idx ? 1 : (idx < currentImageIndex ? 0.5 : 0)
                  }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                />
              ))
            ) : darkImage ? (
              <div className={`absolute inset-0 flex items-center justify-center ${imageClassName?.includes('scale') ? 'bg-white' : ''}`}>
                <img src={darkImage} alt={title as string} className={`w-full h-full object-cover ${imageClassName || ''} pointer-events-none select-none`} draggable={false} onContextMenu={(e) => e.preventDefault()} />
              </div>
            ) : darkContent ? (
              <div className="w-full">
                {darkContent}
              </div>
            ) : (
              <p className="font-serif text-[1.0625rem] italic leading-relaxed">
                "Terkadang apa yang terlihat di luar, menyembunyikan sesuatu yang lebih dalam."
              </p>
            )}
          </motion.div>

          <motion.div 
            className="relative z-20 text-[0.6875rem] font-semibold text-[#5B6572]/70 uppercase tracking-widest mb-4 font-sans origin-center"
            animate={
              phase === 'spill' || phase === 'text' ? {
                scale: 0.95,
                opacity: 0,
                filter: "blur(12px)",
                x: currentDirection === 'left' ? '50%' : currentDirection === 'right' ? '-50%' : '0%',
                y: currentDirection === 'up' ? '-50%' : currentDirection === 'down' ? '50%' : '0%',
              } : {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                x: '0%',
                y: '0%',
              }
            }
            transition={
              phase === 'spill' ? {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
              } : {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          >
            {category}
          </motion.div>
          <motion.div 
            className="relative z-20 text-[1.375rem] font-bold text-[#3D3D3D] dark:text-[#F2F0EF] leading-tight mb-8 mt-[15pt] font-serif origin-center"
            animate={
              phase === 'spill' || phase === 'text' ? {
                scale: 0.95,
                opacity: 0,
                filter: "blur(12px)",
                x: currentDirection === 'left' ? '50%' : currentDirection === 'right' ? '-50%' : '0%',
                y: currentDirection === 'up' ? '-50%' : currentDirection === 'down' ? '50%' : '0%',
              } : {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                x: '0%',
                y: '0%',
              }
            }
            transition={
              phase === 'spill' ? {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
              } : {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          >
            {title}
          </motion.div>
        </div>

        {/* Back Face (Inside Page) */}
        <div className={`absolute w-full h-full bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-[2rem] shadow-lg p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          {topLeftIcon && (
            topLeftLink ? (
              <a
                href={topLeftLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-0 left-0 p-8 text-[#3D3D3D] dark:text-[#F2F0EF]  md:hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition-all duration-300 z-30 flex items-center justify-center cursor-pointer outline-none`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {topLeftIcon}
              </a>
            ) : (
              <div className="absolute top-8 left-8 text-[#5B6572] z-30 pointer-events-none">
                {topLeftIcon}
              </div>
            )
          )}
          <div className={`text-[0.6875rem] font-semibold text-[#5B6572]/70 uppercase tracking-wider mb-6 pb-4 border-b ${lightMode ? 'border-[#E5E5E5]' : 'border-[#222222]'} w-full font-sans italic`}>{title}</div>
          <div className={`text-[0.9375rem] md:text-[1.0625rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] leading-snug font-serif`}>
            {content}
          </div>
          <a
            href={link || "#"}
            target={link ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              if (!link) {
                e.preventDefault();
              }
            }}
            className={`absolute bottom-0 right-0 p-8 text-[#3D3D3D] dark:text-[#F2F0EF]  md:hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition-all duration-300 z-30 flex items-center justify-center cursor-pointer outline-none`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {customIcon || (link ? <ExternalLink size={24} className="rotate-90" /> : null)}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

import { ExperienceCard } from '../../components/shared/ExperienceCard';
import { PosIndoExperience } from '../../components/portfolio/PosIndoExperience';
import { KspNusantaraExperience } from '../../components/portfolio/KspNusantaraExperience';
import { DocumentationCard } from '../../components/portfolio/DocumentationCard';
import { CreativeCard } from '../../components/portfolio/CreativeCard';
import { TranscriptTable } from '../../components/portfolio/TranscriptTable';
import { HighSchoolTable } from '../../components/portfolio/HighSchoolTable';
import { MiddleSchoolTable } from '../../components/portfolio/MiddleSchoolTable';
import { ElementarySchoolTable } from '../../components/portfolio/ElementarySchoolTable';
import { CVFlipbook } from '../../components/portfolio/CVFlipbook';
import { FlipbookReveal } from '../../components/portfolio/FlipbookReveal';

import { Star, ChevronLeft, ChevronRight, ExternalLink, FileText, Mail } from "lucide-react";

export default function PortfolioApp({ 
  activeApp, 
  setActiveApp, 
  docTarget,
  showcaseTarget,
  onDocClick,
  onShowcaseClick,
  lang = 'en' 
}: { 
  activeApp?: "resume" | "portfolio" | "cover-letter" | "personality-traits", 
  setActiveApp?: (app: "resume" | "portfolio" | "cover-letter" | "personality-traits") => void, 
  docTarget?: 'resume' | 'cover-letter',
  showcaseTarget?: 'portfolio' | 'personality-traits',
  onDocClick?: () => void,
  onShowcaseClick?: () => void,
  lastStaticDoc?: 'resume' | 'cover-letter', 
  lang?: 'en' | 'id', 
  setLang?: any 
}) {
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [docPage, setDocPage] = useState(0);
  const [transcriptPage, setTranscriptPage] = useState(3);
  const [designPage, setDesignPage] = useState(0);

  const designGroups = [
    [
      { title: "Desain 1", image: "https://dhnaath.com/wp-content/uploads/2026/09/454416991_1194139031788901_3721232300998524358_n.webp", rotation: "-rotate-3", delay: "0.2s" },
      { title: "Desain 2", image: "https://dhnaath.com/wp-content/uploads/2026/09/454363865_3318337168463084_4793837023871862832_n.webp", rotation: "rotate-2", delay: "0.4s" },
      { title: "Desain 3", image: "https://dhnaath.com/wp-content/uploads/2026/09/454491791_1206186407068031_8930531019005467898_n.webp", rotation: "rotate-1", delay: "0.6s" },
    ],
    [
      { title: "Financial Model", image: "https://dhnaath.com/wp-content/uploads/2026/09/Desain-tanpa-judul.webp", rotation: "-rotate-3", delay: "0.2s" },
      { title: "Dhia Najmi Athallah", image: "https://dhnaath.com/wp-content/uploads/2026/09/Dhia-Najmi-Athallah.webp", rotation: "rotate-2", delay: "0.4s" },
    ],
    [
      { title: "Pitch Deck", image: "https://dhnaath.com/wp-content/uploads/2026/08/085161629923-WA-4-1-1_11zon.webp", rotation: "-rotate-3", delay: "0.2s" },
    ],
    [
      { title: "Brand Identity", image: "https://dhnaath.com/wp-content/uploads/2026/09/Desain-Tanpa-Judul-2.webp", rotation: "rotate-3", delay: "0.2s" },
    ],
    [
      { title: "Market Research", image: "https://dhnaath.com/wp-content/uploads/2026/08/Survei-Kepuasan-Pelanggan-Berhadiah-1_11zon.webp", rotation: "rotate-2", delay: "0.4s" },
    ],
    [
      { title: "Creative 1", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0054.webp", rotation: "-rotate-2", delay: "0.2s" },
      { title: "Creative 2", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0060.webp", rotation: "rotate-1", delay: "0.4s" },
    ],
    [
      { title: "Creative 3", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0025.webp", rotation: "-rotate-2", delay: "0.2s" },
      { title: "Creative 4", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0041.webp", rotation: "rotate-1", delay: "0.4s" },
    ],
    [
      { title: "Creative 5", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0145.webp", rotation: "-rotate-3", delay: "0.2s" },
      { title: "Creative 6", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0166.webp", rotation: "rotate-2", delay: "0.4s" },
      { title: "Creative 7", image: "https://dhnaath.com/wp-content/uploads/2026/09/frame_0157.webp", rotation: "rotate-1", delay: "0.6s" },
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDesignPage((prev) => (prev + 1) % designGroups.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [designGroups.length]);

  const transcriptLevels = [
    { title: "SD/MI/Sederajat", npsn: "NPSN: 30103040", institution: "SD Negeri 01 Lanjak", period: "Tahun Pelajaran 2013/2014", akreditasi: "A", link: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/903B0F09-30F5-E011-9EB4-8B25DB501A9D" },
    { title: "SMP/MTs/Sederajat", npsn: "NPSN: 30102940", institution: "SMP Negeri 1 Batang Lupar", period: "Tahun Pelajaran 2016/2017", akreditasi: "B", link: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/F09BB109-30F5-E011-90C6-F9C4ACF3E380" },
    { title: "SMA/MA/SMK/MAK/Sederajat", npsn: "NPSN: 30105204", institution: "SMA Negeri 8 Pontianak", period: "Tahun Pelajaran 2019/2020", akreditasi: "A", link: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/04531D4B-7A11-4B2D-B063-6664362CE129" },
    { title: "Universitas Logistik dan Bisnis Internasional (ULBI)", npsn: "PDDikti: 041104", institution: "Sarjana Terapan Logistik (S.Tr.Log.)", period: "Oktober 2021 – November 2025", akreditasi: "B", akreditasiBottom: "Baik Sekali", link: "https://pddikti.kemdiktisaintek.go.id/detail-prodi/ODloXNDeYp9ggYjIE1_rHnAoLqKGWJDhO3uFfP-zRjprQ4PjJGEX5QcL9E1w28bgTBt3vQ==" }
  ];



  // PT Pos Indonesia - Multiple Positions (Mosaic Layout)
  const posIndoData = {
    company: "PosIND\nPT. Pos Indonesia (Persero)",
    companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/7-1.webp",
    description: "BUMN; Danantara; Administrasi; Operasional; Marketing",
    tagColor: "#E64A19",
    positions: [
      {
        title: "Assistant Branch Manager",
        period: "3 Maret s.d. 9 April 2025",
        periodEn: "March 3 - April 9, 2025",
        location: "Kantor PosIND KCP Lanjak 78766",
        employmentType: "Magang (Internship)",
        employmentTypeEn: "Internship",
        achievements: [
          "Mempersiapkan uang tunai untuk setoran bank, mengisi slip setoran, serta melakukan rekonsiliasi kas harian guna memastikan kesesuaian fisik uang dengan catatan sistem.",
          "Menutup sistem loket kasir secara harian dengan menyusun laporan backsheet, serta menyelidiki dan menyelesaikan apabila terjadi selisih dana.",
          "Memproses dan mencatat pembayaran berbagai tagihan pelanggan melalui sistem PosPay Loket serta menerbitkan bukti transaksi/tanda terima yang sah.",
          "Memeriksa keaslian dan kelengkapan dokumen identitas pelanggan (KTP/KK) untuk keperluan reaktivasi akun atau rekening tidak aktif.",
          "Memverifikasi dokumen penyaluran Bantuan Sosial Tunai (BST) Kemensos, mencairkan dana sesuai prosedur, serta menjaga jejak audit dokumen bersama Branch Manager."
        ],
        achievementsEn: [
          "Prepared cash for bank deposits, filled out deposit slips, and conducted daily cash reconciliation to ensure physical cash matched system records.",
          "Closed the cashier counter system daily by preparing backsheet reports, and investigated and resolved any fund discrepancies.",
          "Processed and recorded various customer bill payments through the PosPay Loket system and issued valid transaction receipts.",
          "Verified the authenticity and completeness of customer identity documents (ID card/Family Card) for account reactivation or dormant accounts.",
          "Verified documents for the distribution of Ministry of Social Affairs Cash Social Assistance (BST), disbursed funds according to procedures, and maintained the document audit trail with the Branch Manager."
        ],
        image: "https://dhnaath.com/wp-content/uploads/2026/09/1741149010112.webp",
        image2: "https://dhnaath.com/wp-content/uploads/2026/09/1744248285339.webp",
        image3: "https://dhnaath.com/wp-content/uploads/2026/09/1741061244804.webp",
        image4: "https://dhnaath.com/wp-content/uploads/2026/09/IMG_20250328_130218_11zon.webp",
      },
      {
        title: "Assistant Supervisor",
        period: "10 April s.d. 1 Juni 2025",
        periodEn: "April 10 - June 1, 2025",
        location: "Kantor PosIND KPRK Sintang 78600",
        employmentType: "Magang (Internship)",
        employmentTypeEn: "Internship",
        achievements: [
          "Mencetak serta memverifikasi data penerima manfaat program bantuan sosial Kemensos, sekaligus melakukan penandaan koordinat lokasi rumah untuk akurasi data lapangan.",
          "Mengorganisir dan mengarsipkan dokumentasi foto lapangan secara sistematis berdasarkan wilayah guna menjaga keakuratan catatan dan kesiapan laporan.",
          "Melakukan penjemputan (pickup) paket pelanggan, mengelola proses penyortiran di area gudang, serta mencetak dan menempelkan label pengiriman sesuai standar.",
          "Melakukan pemeliharaan rutin pada perangkat inventaris tim, serta melakukan instalasi dan penanganan masalah (troubleshooting) dasar pada perangkat keras dan lunak.",
          "Berkoordinasi aktif dengan tim internal maupun divisi lain untuk mendukung kelancaran kegiatan distribusi, penjualan, serta sosialisasi terdokumentasi di lapangan."
        ],
        achievementsEn: [
          "Printed and verified beneficiary data for the Ministry of Social Affairs social assistance program, while also tagging home location coordinates for field data accuracy.",
          "Organized and archived field photo documentation systematically by region to maintain record accuracy and report readiness.",
          "Picked up customer packages, managed the sorting process in the warehouse area, and printed and attached shipping labels according to standards.",
          "Performed routine maintenance on team inventory devices, and conducted basic installation and troubleshooting of hardware and software.",
          "Coordinated actively with the internal team and other divisions to support smooth distribution, sales, and documented socialization activities in the field."
        ],
        image: "https://dhnaath.com/wp-content/uploads/2026/09/1744606643657.webp",
        image2: "https://dhnaath.com/wp-content/uploads/2026/09/1745206623859.webp",
        image3: "https://dhnaath.com/wp-content/uploads/2026/09/1746614254530.webp",
        image4: "https://dhnaath.com/wp-content/uploads/2026/09/1744450132598.webp",
      },
    ],
  };

  // KSP Nusantara - Multiple Positions (Mosaic Layout)
  const kspNusantaraData = {
    company: "KopnusPos\nKSP Nusantara",
    companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/5-1.webp",
    companyLogoDark: "/images/kopnus-logo-dark.webp",
    description: "Keuangan; Koperasi; Marketing; Sales; Pembiayaan Pensiun",
    tagColor: "#F57C00",
    positions: [
      {
        title: "Agen Oren by KOPNUS",
        period: "November 2025 s.d. Sekarang",
        periodEn: "November 2025 - Present",
        location: "KSP Nusantara - KopnusPos",
        employmentType: "Mandiri, Berbasis Komisi (Freelancer)",
        employmentTypeEn: "Independent, Commission-Based (Freelancer)",
        achievements: [
          "Melaksanakan tugas pemasaran dan akuisisi klien yang setara dengan peran Account Officer Lending.",
          "Mengikuti dan menyesuaikan diri terhadap arah peraturan serta kebijakan yang diperbarui oleh pemerintah maupun perusahaan."
        ],
        achievementsEn: [
          "Performed marketing and client acquisition tasks equivalent to the role of an Account Officer Lending.",
          "Followed and adapted to updated regulations and policies direction from the government and the company."
        ],
        image: "https://dhnaath.com/wp-content/uploads/2026/09/1763565179282.webp",
        image2: "https://dhnaath.com/wp-content/uploads/2026/09/1763565039525.webp",
      },
      {
        title: "Account Officer Lending",
        period: "September s.d. November 2025",
        periodEn: "September - November 2025",
        location: "Kantor PosIND KCP Putussibau 78711",
        employmentType: "Magang (Internship)",
        employmentTypeEn: "Internship",
        achievements: [
          "Memasarkan produk pinjaman pensiun (PNS, TNI, Polri) secara aktif melalui pendekatan langsung (door-to-door), menggunakan brosur cetak, serta memakai pesan siaran via WhatsApp.",
          "Mengelola seluruh siklus proses kredit mulai dari analisis kebutuhan klien, verifikasi dokumen, koordinasi asuransi, hingga pencairan dana, serta berkoordinasi dengan staf PosIND dan kantor cabang.",
          "Membangun hubungan baik dengan komunitas pensiunan, mitra juru bayar lain, dan pegawai pemerintah aktif, sekaligus memberikan edukasi terkait regulasi terbaru serta penggunaan aplikasi penunjang (Taspen/Asabri).",
          "Menyusun laporan kunjungan harian (pipeline) dan hasil prospek secara rutin sebagai bahan evaluasi kerja, serta menangani keluhan dan masukan klien dengan solutif.",
          "Mendesain ulang materi promosi dan brosur cetak/digital guna meningkatkan daya tarik visual, memperluas jangkauan pasar, dan menarik minat calon nasabah secara efektif."
        ],
        achievementsEn: [
          "Actively marketed pension loan products (Civil Servants, Military, Police) through a direct approach (door-to-door), using printed brochures, and utilizing broadcast messages via WhatsApp.",
          "Managed the entire credit process cycle starting from client needs analysis, document verification, insurance coordination, up to fund disbursement, and coordinated with PosIND staff and the branch office.",
          "Built good relationships with the pensioner community, other paying partners, and active government employees, while providing education regarding the latest regulations and the use of supporting applications (Taspen/Asabri).",
          "Prepared daily visit reports (pipeline) and prospect results regularly as material for work evaluation, and handled client complaints and feedback correctively.",
          "Redesigned promotional materials and printed/digital brochures to increase visual appeal, expand market reach, and attract prospective customers effectively."
        ],
        image: "https://dhnaath.com/wp-content/uploads/2026/09/IMG-20251113-WA0009.jpg.webp",
        image2: "https://dhnaath.com/wp-content/uploads/2026/09/2025-10-13-13.45.57_.webp",
      },
    ],
  };

  const experiences = [
    // 1. Huachuang Singapore (Earliest)
    {
      title: "Import - Export",
      company: "TISCE - Ever Trust Tools\nHuachuang Singapore Pte. Ltd.",
      location: "Singapore (Remote)",
      period: "November 2024 s.d. Februari 2025",
      periodEn: "November 2024 - February 2025",
      employmentType: "Mandiri, Berbasis Komisi, Tanpa Gaji Pokok (Freelancer)",
      employmentTypeEn: "Independent, Commission-Based, No Basic Salary (Freelancer)",
      description: "Sourcing Platform; Global Partnership; RFQ; B2B; Freelance",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/4-1.webp",
      companyLogoDark: "/images/tisce-logo-dark.webp",
      tagColor: "#1976D2",
      achievements: [
        "Mencari dan menjaring calon pembeli lokal yang membutuhkan pasokan barang atau mesin industri dari China.",
        "Mengumpulkan dan memverifikasi spesifikasi kebutuhan barang serta detail kontak pembeli guna menyusun dokumen Request for Quotation (RFQ) yang akurat sebelum diajukan ke platform.",
        "Memantau respons dari pemasok dan menindaklanjuti penawaran kepada calon pembeli sesuai standar yang berlaku untuk mendukung kelancaran proses pengadaan."
      ],
      achievementsEn: [
        "Search for and network with local prospective buyers who need the supply of industrial goods or machinery from China.",
        "Collect and verify goods specification needs and buyer contact details to compile accurate Request for Quotation (RFQ) documents before submitting them to the platform.",
        "Monitor responses from suppliers and follow up on offers to prospective buyers according to applicable standards to support the smooth procurement process."
      ],
      image: "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-031752.webp",
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-031752.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-031954.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-032435.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-032517.webp"
      ],
    },
    // 2. Auto2000 (April - Oct 2023)
    {
      title: "Assistant Partman",
      company: "(TSO-Auto2000)\nToyota Sales Operation\nPT. Astra International Tbk",
      companyUrl: "https://drive.google.com/file/d/1WnY9lj2eNExOMzY-hYszUR9plnWXxuiJ/view?usp=sharing",
      location: "Auto2000 Pasteur – Jl. Djunjunan No. 192, Kota Bandung, Jawa Barat",
      period: "7 Oktober 2024 s.d. 5 Januari 2025",
      periodEn: "October 7, 2024 - January 5, 2025",
      employmentType: "Magang (Internship)",
      employmentTypeEn: "Internship",
      description: "Pergudangan; Persediaan; Suku Cadang; Otomotif; Dealer",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image.webp",
      tagColor: "#D32F2F",
      achievements: [
        "Mengoptimalkan penataan rak penyimpanan suku cadang berdasarkan kode standar agar alur kerja gudang jadi lebih rapi dan efisien.",
        "Mengelola keakuratan data stok di gudang lewat stock opname berkala dan langsung memperbarui datanya di sistem Warehouse Management System (WMS).",
        "Mengelola proses inbound dan outbound suku cadang, mulai dari pencocokan Goods Received Note (GRN) dengan Purchase Order (PO), hingga proses picking, packing, labeling, dan distribusi ke area bengkel.",
        "Melakukan rekonsiliasi data Special Service Tools (SST) dan suku cadang pada sistem, serta memantau pergerakan utilisasi alat oleh teknisi untuk meminimalisir risiko kehilangan sesuai standar operasional.",
        "Berkoordinasi aktif dengan kasir, teknisi, dan Service Advisor (SA) di bawah arahan Partman utama untuk menjaga standar operasional dan layanan serta kepatuhan aturan kebersihan dan keselamatan dealer."
      ],
      achievementsEn: [
        "Optimized the arrangement of spare parts storage racks based on standard codes so that the warehouse workflow became neater and more efficient.",
        "Managed the accuracy of stock data in the warehouse through regular stock opname and directly updated the data in the Warehouse Management System (WMS).",
        "Managed the inbound and outbound processes of spare parts, starting from matching the Goods Received Note (GRN) with the Purchase Order (PO), to the picking, packing, labeling, and distribution processes to the workshop area.",
        "Reconciled Special Service Tools (SST) and spare parts data in the system, and monitored the movement of tool utilization by technicians to minimize the risk of loss according to operational standards.",
        "Coordinated actively with cashiers, technicians, and Service Advisors (SA) under the direction of the main Partman to maintain operational and service standards as well as compliance with dealer cleanliness and safety rules."
      ],
      image: "https://dhnaath.com/wp-content/uploads/2026/09/1728603552444.webp",
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/1728603552444.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1728603594941.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1728603683013.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1728603726158.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1733974386362.webp",
      ],
    },
    // 3. GOVOKASi (Feb - Aug 2024)
    {
      title: "Project Assistant",
      company: "GOVOKASi Indonesia",
      location: "Remote",
      period: "September 2024",
      periodEn: "September 2024",
      employmentType: "Magang Daring Tidak Berbayar (Internship)",
      employmentTypeEn: "Unpaid Remote Internship",
      description: "Mentorship; Pelatihan; Pengembangan; Rancang Program",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/6-1.webp",
      tagColor: "#1976D2",
      achievements: [
        "Melakukan riset pasar dan audiens untuk mendukung posisi perusahaan, penyampaian pesan dan tujuan, dan pemilihan program kegiatan.",
        "Mengembangkan strategi pemasaran untuk rencana kegiatan program berdasarkan temuan riset dan hasil diskusi tim.",
        "Mendukung koordinasi tim yang beranggotakan mahasiswa dari kampus lain pada fase awal program, termasuk pembagian tugas dan penjadwalan presentasi di hadapan para mentor dan tim lain."
      ],
      achievementsEn: [
        "Conducted market and audience research to support the company's position, message delivery and goals, and the selection of activity programs.",
        "Developed marketing strategies for program activity plans based on research findings and team discussion results.",
        "Supported the coordination of a team of students from other campuses in the early phases of the program, including dividing tasks and scheduling presentations before mentors and other teams."
      ],

      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/𝐏𝐫𝐨𝐣𝐞𝐜𝐭-𝐁𝐚𝐬𝐞𝐝-𝐈𝐍𝐓𝐄𝐑𝐍𝐒𝐇𝐈𝐏-by-𝐆𝐎𝐕𝐎𝐊𝐀𝐒𝐢-𝐁𝐚𝐭𝐜𝐡-𝟓𝟒𝐀𝐜𝐜𝐞𝐥𝐞𝐫_070.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/𝐏𝐫𝐨𝐣𝐞𝐜𝐭-𝐁𝐚𝐬𝐞𝐝-𝐈𝐍𝐓𝐄𝐑𝐍𝐒𝐇𝐈𝐏-by-𝐆𝐎𝐕𝐎𝐊𝐀𝐒𝐢-𝐁𝐚𝐭𝐜𝐡-𝟓𝟒𝐀𝐜𝐜𝐞𝐥𝐞𝐫.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/𝐏𝐫𝐨𝐣𝐞𝐜𝐭-𝐁𝐚𝐬𝐞𝐝-𝐈𝐍𝐓𝐄𝐑𝐍𝐒𝐇𝐈𝐏-by-𝐆𝐎𝐕𝐎𝐊𝐀𝐒𝐢-𝐁𝐚𝐭𝐜𝐡-𝟓𝟒𝐀𝐜𝐜𝐞𝐥𝐞𝐫-1.webp"
      ],
    },
    // 4. Prudential (Feb - Dec 2024)
    {
      title: "Life Insurance Agent",
      company: "Prudential Life Assurance (PLA)\nPrudential Sharia Life Assurance (PSLA)",
      location: "KPM BD 21 – Malabar, Kota Bandung, Jawa Barat",
      period: "Februari s.d. Desember 2024",
      periodEn: "February - December 2024",
      employmentType: "Mandiri, Berbasis Komisi, Tanpa Gaji Pokok (Freelancer)",
      employmentTypeEn: "Independent, Commission-Based, No Basic Salary (Freelancer)",
      description: "Keuangan; Asuransi Jiwa; Asuransi Kesehatan; Takaful Keluarga",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/2-1.webp",
      tagColor: "#D32F2F",
      achievements: [
        "Menganalisis profil risiko, tujuan keuangan, dan kemampuan premi calon nasabah untuk merancang proposal ilustrasi asuransi (konvensional/syariah) yang sesuai kebutuhan.",
        "Membimbing calon nasabah dalam penyiapan dokumen SPAJ, menjelaskan hak-kewajiban secara transparan, serta mengawal proses pengajuan proposal.",
        "Berkoordinasi aktif dengan tim internal serta rutin mengikuti pelatihan, seminar, dan ujian sertifikasi produk baru guna menjaga pemahaman materi tetap aktual.",
        "Menjaga kepatuhan terhadap kode etik keagenan berdasarkan lisensi AAJI-AASI, serta memastikan seluruh proses layanan sejalan dengan regulasi OJK.",
        "Memantau perkembangan tren produk asuransi serta dinamika pasar ekonomi untuk memberikan edukasi literasi keuangan yang tepat kepada masyarakat."
      ],
      achievementsEn: [
        "Analyzed prospective clients' risk profiles, financial goals, and premium capabilities to design tailored insurance illustration proposals (conventional/sharia).",
        "Guided prospective clients in preparing SPAJ documents, explaining rights and obligations transparently, and overseeing the proposal submission process.",
        "Coordinated actively with the internal team and regularly attended training, seminars, and new product certification exams to keep knowledge up-to-date.",
        "Maintained compliance with the agency code of ethics based on AAJI-AASI licenses, ensuring all service processes aligned with OJK regulations.",
        "Monitored trends in insurance products and economic market dynamics to provide appropriate financial literacy education to the public."
      ],
      image: "https://dhnaath.com/wp-content/uploads/2026/09/1733972999601.webp",
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/1733972999601.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1733972393522.webp",
      ],
    },
    // 5. GAO Tek (Jun - Nov 2024)
    {
      title: "Human Resources",
      company: "GAO Tek Inc.\nGlobal Advanced Operations",
      location: "Remote",
      period: "Agustus 2024",
      periodEn: "August 2024",
      employmentType: "Magang Daring Tidak Berbayar (Internship)",
      employmentTypeEn: "Unpaid Remote Internship",
      description: "Pelatihan; Promosi; Penjualan; Unpaid Internship; Remote",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/3-1.webp",
      companyLogoDark: "/images/gao-logo-dark.webp",
      tagColor: "#1976D2",
      achievements: [
        "Melakukan screening awal terhadap resume pelamar, menyaring kandidat potensial (shortlisting), serta mengelola proses tindak lanjut hasil seleksi.",
        "Mengoptimalkan publikasi lowongan kerja (job posting) dan materi promosi rekrutmen secara berkala di berbagai platform profesional seperti LinkedIn dan Glints.",
        "Mengatur jadwal pertemuan, mengirimkan undangan atau pengingat, serta menyiapkan agenda diskusi dengan kandidat.",
        "Menangani seluruh jalur komunikasi internal maupun eksternal melalui MS Teams, Outlook, Skype, dan LinkedIn untuk memastikan penyampaian informasi berjalan jelas dan tepat waktu.",
        "Bekerja sama dengan rekan tim dan Squad Leader (SL) dan Assistant Squad Leader (ASL) dalam memastikan akurasi dan pelaksanaan tugas."
      ],
      achievementsEn: [
        "Conducted initial screening of applicant resumes, filtered potential candidates (shortlisting), and managed the follow-up process of selection results.",
        "Optimized the publication of job vacancies (job posting) and recruitment promotion materials periodically on various professional platforms such as LinkedIn and Glints.",
        "Arranged meeting schedules, sent invitations or reminders, and prepared discussion agendas with candidates.",
        "Handled all internal and external communication channels through MS Teams, Outlook, Skype, and LinkedIn to ensure the delivery of information ran clearly and on time.",
        "Collaborated with team members and Squad Leaders (SL) and Assistant Squad Leaders (ASL) to ensure accuracy and task execution."
      ],
      image: "https://dhnaath.com/wp-content/uploads/2026/09/1728602581675-1.webp",
      images: [
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-013901.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/Screenshot-2026-07-02-013545.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1728602581675-1.webp",
        "https://dhnaath.com/wp-content/uploads/2026/09/1728602597549.webp",
      ],
    },
    // 6. Grab Teknologi Indonesia
    {
      title: "Driver & Courier",
      company: (
        <>
          Grab Teknologi Indonesia (Grab)<br />
          Shopee Internasional Indonesia (Shopee)<br />
          Teknologi Perdana Indonesia (Maxim)
        </>
      ),
      location: "Pontianak",
      period: "Feb 2026 s.d. Sekarang",
      periodEn: "Feb 2026 - Present",
      employmentType: "Mandiri, Tanpa Jam Operasional dan Wilayah Tetap (Freelancer)",
      employmentTypeEn: "Independent, No Fixed Operating Hours and Area (Freelancer)",
      description: "Transportasi; Jasa Layanan; Kurir-Ojek; Pesan-Antar; Aplikasi",
      tagColor: "#00B14F",
      achievements: [
        "Melayani transportasi penumpang serta distribusi makanan dan paket barang dengan memastikan keamanan, kebersihan, dan ketepatan waktu hingga ke lokasi tujuan.",
        "Berkoordinasi secara aktif dengan pelanggan, mitra restoran, dan pihak keamanan/parkir demi kelancaran proses ambil-antar pesanan.",
        "Mengatur rute perjalanan secara mandiri dan mengelola waktu secara efisien untuk memaksimalkan performa akun serta mencapai target harian.",
        "Mematuhi standar operasional dengan menggunakan atribut resmi serta merawat kondisi kendaraan secara rutin guna meminimalisir kendala teknis di jalan."
      ],
      achievementsEn: [
        "Served passenger transportation and the distribution of food and goods packages by ensuring safety, cleanliness, and punctuality to the destination.",
        "Coordinated actively with customers, restaurant partners, and security/parking parties for the smooth pick-up and delivery process of orders.",
        "Arranged travel routes independently and managed time efficiently to maximize account performance and achieve daily targets.",
        "Complied with operational standards by using official attributes and maintaining vehicle conditions regularly to minimize technical obstacles on the road."
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      images: [
        "https://play-lh.googleusercontent.com/OmBwUGuTJxaV0gW04sQjvGaxlgxHr83z88dQCD0gJy7_dX9gM2APUE6CmyWFT27kb1-ASDQq5iZlNnkfwsjgdQ=w480-h960-rw",
        "https://play-lh.googleusercontent.com/gvn6nri4v_KAjbR2KW_iWmbGUmrJYiP-QRVAmpCUmFHvza2gqw2MI6qS9U7o3J_XZM8UKlm4aKjaOEddJKDO3w=w480-h960-rw",
        "https://play-lh.googleusercontent.com/2INhmztKw86TAsrMDdYj_BLMNsvIBv968VPsNpFSIEjB2E2vRu0r-Z-E9PDjBNukKBgmmp2xxfs6tYBIInkNBQ=w480-h960-rw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcltsUg0w1NE5zLSafuXLYr-3hGOdoiwJSPc5z7mC-pg&s=10"
      ],
    },
    // 7. Mandiri Utama Finance
    {
      title: "Mitra MUF Dana",
      company: "MUF\nPT. Mandiri Utama Finance",
      location: "Pontianak, Kalimantan Barat",
      period: "Mar 2026 s.d. Sekarang",
      periodEn: "Mar 2026 - Present",
      employmentType: "Mandiri, Berbasis Komisi, Tanpa Gaji, Tanpa Absensi (Freelancer)",
      employmentTypeEn: "Independent, Commission-Based, No Salary, No Attendance (Freelancer)",
      description: "BUMN; Keuangan; Leasing; Pembiayaan Kendaraan; Sales",
      companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image-1.webp",
      tagColor: "#003366",
      achievements: [
        "Memasarkan produk pinjaman dana tunai dengan jaminan BPKB kendaraan, baik untuk roda dua (motor) maupun roda empat (mobil).",
        "Menyesuaikan produk pembiayaan yang akan diajukan agar sejalan dengan kebutuhan serta kemampuan finansial calon klien.",
        "Mendampingi klien dalam proses pengajuan, mulai dari melengkapi berkas dokumen hingga dana berhasil dicairkan.",
        "Berkoordinasi secara aktif dengan tim MUF untuk memastikan proses administrasi dan pengajuan berjalan sesuai standar operasional yang berlaku."
      ],
      achievementsEn: [
        "Marketed cash loan products with vehicle BPKB collateral, both for two-wheelers (motorcycles) and four-wheelers (cars).",
        "Adjusted the financing products to be proposed to align with the needs and financial capabilities of prospective clients.",
        "Assisted clients in the application process, starting from completing document files until the funds were successfully disbursed.",
        "Coordinated actively with the MUF team to ensure the administrative and application processes ran according to applicable operational standards."
      ],
      image: "https://dhnaath.com/wp-content/uploads/2026/08/unnamed.png",
    }
  ];

    const documentation = [
    {
      title: "Dasar Procurement & Purchasing di Perusahaan",
      description: "Recorded Workshop Praktikal Berprojek",
      type: "Ioda Academy",
      date: "Mei 2025",
      tags: ["Training", "Certification", "Professional"],
      externalLink: "https://drive.google.com/file/d/1hEQUPywU-ce3x1P-zyiUre65oYf4bZhV/view?usp=drive_link",
      hideFileIcon: true,
      bgColor: "#59247b",
      textColor: "#FFFFFF",
    },
    {
      title: "Six Sigma (64/80) - White Belt",
      description:
        "A Council for Six Sigma Certification (CSSC) Certified Six Sigma White Belt is an individual that has been provided, and has demonstrated an understanding of the most basic level of the Six Sigma Methodology. The White Belt Certification designation also reflects knowledge by the individual of the basic definition, history, and structure of the discipline. This understanding provides a solid awareness of who is involved in the actual Six Sigma implementation, and their roles within an organization.",
      type: "The Council for Six Sigma Certification (CSSC)",
      date: "September 2024",
      tags: ["Statistical Analysis", "Quality Assurance", "Root Cause Analysis"],
      link: "https://drive.google.com/file/d/1agmr5AjaqT8rjYe1pZ_ldwN4--8KXFS5/view?usp=drive_link",
      externalLink: "https://drive.google.com/file/d/1B_SkKayCigdyRwtSluJiheSUpkyn0E3b/view?usp=sharing",
      bgColor: "#d1d1d1",
    },
    {
      title: "Lean Six Sigma (68/80) - White Belt",
      description:
        "A Council for Six Sigma Certification (CSSC) Certified Lean Six Sigma White Belt is an individual that has been provided, and has demonstrated an understanding of the most basic level of the Six Sigma Methodology. The White Belt Certification designation also reflects knowledge by the individual of the basic definition, history, and structure of the discipline. This understanding provides a solid awareness of who is involved in the actual Six Sigma implementation, and their roles within an organization.",
      type: "The Council for Six Sigma Certification (CSSC)",
      date: "September 2024",
      tags: ["Waste Elimination", "Value Stream Mapping", "Efficiency Optimization"],
      link: "https://drive.google.com/file/d/1L7iJxXMprCnnOpsJ5ojFq9Zc6VqW_d8-/view?usp=drive_link",
      externalLink: "https://drive.google.com/file/d/1Sx60x5R7G0eTpk6tOOIi1OYLlozMuZpi/view?usp=drive_link",
      bgColor: "#d1d1d1",
    },
    {
      title: "Sertifikasi Keagenan Asuransi Jiwa Syariah",
      description: "Lisensi Wajib Tenaga Pemasar Asuransi Syariah",
      type: "Asosiasi Asuransi Syariah Indonesia (AASI)",
      date: "Februari 2024 - Februari 2026",
      credentialId: "3321012070258823",
      tags: ["Asuransi Jiwa Syariah", "Ta'awun", "Tabarru'", "Takaful"],
      hideFileIcon: true,
      bgColor: "#1a5f7a",
      textColor: "#FFFFFF",
    },
    {
      title: "Sertifikasi Keagenan Asuransi Jiwa",
      description: "Lisensi Wajib Tenaga Pemasar Asuransi",
      type: "Asosiasi Asuransi Jiwa Indonesia (AAJI)",
      date: "Februari 2024 - Februari 2026",
      credentialId: "15270228",
      tags: ["Asuransi Jiwa", "Asuransi Kesehatan", "Produk Asuransi Yang Dikaitkan Investasi (PAYDI)"],
      hideFileIcon: true,
      bgColor: "#b71c1c",
      textColor: "#FFFFFF",
    },
    {
      title: "SAP01 - SAP Overview",
      description:
        "SAP01 is the prerequisite course for all other SAP courses. SAP01 is designed to provide the participant with baseline knowledge of SAP solutions, applications, components, and terminology. Because this is an overview course the details of the SAP applications and components are left to subsequent courses.",
      type: "Edugate Indonesia",
      date: "Januari 2024",
      tags: ["Enterprise Resource Planning", "Business Process Management", "Digital Business System"],
      link: "https://drive.google.com/file/d/1mJbFisDzebcPYk3EE5Ypv_Bvk5RbNgo_/view?usp=drive_link",
      externalLink: "https://drive.google.com/file/d/1Ypt10VSW6fdkUm3HKLJBodaQpTSl1OcJ/view?usp=sharing",
      bgColor: "#00B7F0",
      textColor: "#FFFFFF",
    },
    {
      title: "CEFR - B1 Intermediate (302)",
      description: "The global mobile English test and certificate. Built by academic experts, aligned to an international standard (CEFR) and delivered using the latest AI technology.",
      type: "British Council",
      date: "Jun 2023",
      tags: ["Language", "Proficiency", "English"],
      hideFileIcon: true,
      bgColor: "#23085A",
      textColor: "#FFFFFF",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDocPage((prev) => (prev >= Math.max(0, documentation.length - 4) ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [documentation.length]);

  const creativeProjects = [
    {
      title: "Open Source UI Library",
      description:
        "A modern, accessible React component library with comprehensive documentation and customizable themes.",
      category: "Open Source",
      image: "https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzI2MTk2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "TypeScript", "UI/UX"],
    },
    {
      title: "Personal Blog Platform",
      description:
        "A minimalist blogging platform built with modern web technologies, featuring markdown support and dark mode.",
      category: "Side Project",
      image: "https://images.unsplash.com/photo-1546380841-bf3afc314a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzI2ODkwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "Blog", "Markdown"],
    },
  ];


  return (
    <div className="min-h-screen bg-transparent font-sans">
      <div className="mobile-scale-main w-full flex flex-col items-center">
      {/* Work Experience Section - Reverse Chronological Order (Latest to Earliest) */}
      <section id="experience" className="pt-[15pt] pb-0 bg-transparent w-full">
        <div className="w-full px-[2.5pt] md:px-[10pt]">
          <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
            <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Working Experiences</h2>
            <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Professional Journey, Career Path, and Strategic Contributions</p>
          </div>
          
          <div className="relative w-full overflow-hidden flex pt-0 pb-0">
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 767px) {
                .experience-scale-mobile {
                  zoom: 0.7258;
                }
              }
              @supports not (zoom: 0.7258) {
                @media (max-width: 767px) {
                  .experience-scale-mobile {
                    transform: scale(0.7258);
                    transform-origin: top left;
                  }
                }
              }
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 86s linear infinite;
              }
            `}} />
            <div 
              className={`flex gap-[10pt] px-4 animate-marquee min-w-max group cursor-pointer`}
              style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
              onClick={() => setIsCarouselPaused(!isCarouselPaused)}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-[10pt] min-w-max items-start">
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[6]} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[5]} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <KspNusantaraExperience {...kspNusantaraData} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <PosIndoExperience {...posIndoData} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[1]} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[0]} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[2]} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[4]} lang={lang} />
                  </div>
                  <div className="w-[138vw] md:w-[550px] experience-scale-mobile">
                    <ExperienceCard {...experiences[3]} lang={lang} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Proyek Section */}
      <section id="proyek" className="pt-[50pt] pb-[0pt] bg-transparent w-full">
        <div className="w-full px-[2.5pt] md:px-[10pt]">
          <div id="documentation" className="relative max-w-7xl mx-auto px-4 md:px-8">
            <div className="hidden md:flex w-full gap-8 mb-6 mt-0">
              <div className="flex flex-col items-center gap-1 w-1/2">
                <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Profile Qualifications</h2>
                <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Certifications, Licenses, Memberships, Competencies,<span className="md:hidden"><br /></span><span className="hidden md:inline"> </span>Skills, and Achievements.</p>
              </div>
              <div className="flex flex-col items-center gap-1 w-1/2">
                <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Creative Craft</h2>
                <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Design, Illustration, Branding, Typography,<span className="md:hidden"><br /></span><span className="hidden md:inline"> </span>Photography, and Experiments</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch w-full gap-8">
              {/* Menu Section (50%) */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <div className="flex flex-col w-full h-full">
                  <div className="flex md:hidden flex-col items-center gap-1 mb-[10pt] w-full mt-[10pt]">
                    <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Profile Qualifications</h2>
                    <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Certifications, Licenses, Memberships, Competencies,<span className="md:hidden"><br /></span><span className="hidden md:inline"> </span>Skills, and Achievements.</p>
                  </div>
                  
                  <div className="flex justify-center items-center gap-[35pt] mb-6 md:hidden">
                    <button
                      onClick={() => setDocPage((prev) => (prev === 0 ? Math.max(0, documentation.length - 4) : prev - 1))}
                      className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => setDocPage((prev) => (prev >= Math.max(0, documentation.length - 4) ? 0 : prev + 1))}
                      className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                      aria-label="Next page"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 w-full h-full mt-0">
                    <button
                      onClick={() => setDocPage((prev) => (prev === 0 ? Math.max(0, documentation.length - 4) : prev - 1))}
                      className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={36} />
                    </button>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[90%] md:w-full">
                      {documentation.slice(docPage, docPage + 4).map((doc, index) => (
                        <DocumentationCard key={index} {...(doc as any)} compact />
                      ))}
                    </div>

                    <button
                      onClick={() => setDocPage((prev) => (prev >= Math.max(0, documentation.length - 4) ? 0 : prev + 1))}
                      className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
                      aria-label="Next page"
                    >
                      <ChevronRight size={36} />
                    </button>
                  </div>
                  
                </div>
              </div>
              {/* Personal Designs Section (50%) */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes float-random {
                    0% { transform: translateY(0px) rotate(-2deg); }
                    50% { transform: translateY(-8px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(-2deg); }
                  }
                  .animate-float-random {
                    animation: float-random 6s ease-in-out infinite;
                  }
                `}} />
                
                <div className="flex md:hidden flex-col items-center gap-1 mb-6 w-full mt-[10pt]">
                  <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Creative Craft</h2>
                  <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Design, Illustration, Branding, Typography,<span className="md:hidden"><br /></span><span className="hidden md:inline"> </span>Photography, and Experiments</p>
                </div>
                
                <div className="flex justify-center items-center gap-[35pt] mb-6 md:hidden">
                  <button
                    onClick={() => setDesignPage((prev) => (prev - 1 < 0 ? designGroups.length - 1 : prev - 1))}
                    className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setDesignPage((prev) => (prev + 1) % designGroups.length)}
                    className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                    aria-label="Next page"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 w-full h-full mt-0">
                  <button
                    onClick={() => setDesignPage((prev) => (prev - 1 < 0 ? designGroups.length - 1 : prev - 1))}
                    className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
                    aria-label="Previous design"
                  >
                    <ChevronLeft size={36} />
                  </button>
                  <div className={`flex flex-col justify-center gap-[5pt] w-[85%] md:w-full mx-auto aspect-[1000/1414] md:aspect-auto md:h-full`}>
                    {designGroups[designPage].map((design, index) => (
                      <div 
                        key={`${design.title}-${index}`}
                        className={`w-full flex-1 min-h-0 relative animate-float-random`}
                        style={{ animationDelay: design.delay }}
                      >
                        <img src={design.image} alt={design.title} className="absolute inset-0 w-full h-full object-contain filter drop-shadow-xl pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setDesignPage((prev) => (prev + 1) % designGroups.length)}
                    className="p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  hidden md:flex shrink-0 transition-all scale-[0.93] hover:scale-100"
                    aria-label="Next design"
                  >
                    <ChevronRight size={36} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Academic Logbook Section */}
      <section id="akademik" className="pt-0 pb-0 bg-transparent w-full">
        <div className="w-full px-[2.5pt] md:px-[10pt]">
          <div className="flex flex-col items-center justify-center gap-1 mt-[40pt] mb-[25pt]">
            <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">Academic Logbook</h2>
            <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">Thesis, Publications, Research Planning, Projects, Events, <br className="block md:hidden" />Competitions, Seminars, and Transcripts</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto w-full relative">
            <div className="w-full max-w-7xl">
              <div id="transcript" className="flex items-center justify-center gap-4 w-full h-full group mt-0">
                {/* Desktop Buttons */}
                <button
                  onClick={() => setTranscriptPage((prev) => (prev === 0 ? transcriptLevels.length - 1 : prev - 1))}
                  className="hidden md:flex shrink-0 p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  transition-all scale-[0.93] hover:scale-100 z-10"
                  aria-label="Previous transcript"
                >
                  <ChevronLeft size={36} />
                </button>
                <div className="flex flex-col-reverse md:flex-row items-center w-full gap-8">
                  {/* Text Section (30%) */}
                  <div className="w-full md:w-[30%] flex flex-col items-center justify-start text-center">
                    {/* Container to vertically align content relative to the image */}
                    <div className="w-full flex-1 flex flex-col items-center justify-center gap-[15pt] md:gap-[50pt]">
                      {/* Level / Degree and Period */}
                      <div className="w-full flex flex-col items-center shrink-0 -mt-[10pt] md:mt-0">
                        {/* Level / Degree */}
                        <div className="w-full flex justify-center items-start shrink-0">
                          <p className="text-lg md:text-xl text-[#000000] dark:text-[#FFFFFF] font-serif italic transition-opacity duration-300 m-0 leading-tight text-center">
                            {transcriptPage !== 3 ? transcriptLevels[transcriptPage].title : 'D-IV/S-1/KKNI Level 6/Sederajat'}
                          </p>
                        </div>
                        
                        {/* Period */}
                        {transcriptLevels[transcriptPage].period && (
                          <div className="flex flex-col items-center mt-[5pt]">
                            <p className="text-sm md:text-base text-[#000000] dark:text-[#FFFFFF] font-sans transition-opacity duration-300 m-0 leading-tight text-center">
                              {transcriptLevels[transcriptPage].period}
                            </p>
                          </div>
                        )}

                        {/* Mobile Buttons */}
                        <div className="flex md:hidden items-center justify-center gap-[35pt] w-full mt-[15pt]">
                          <button
                            onClick={() => setTranscriptPage((prev) => (prev === 0 ? transcriptLevels.length - 1 : prev - 1))}
                            className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                            aria-label="Previous transcript"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={() => setTranscriptPage((prev) => (prev >= transcriptLevels.length - 1 ? 0 : prev + 1))}
                            className="p-2 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  flex shrink-0 transition-all hover:scale-105"
                            aria-label="Next transcript"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </div>
                      </div>

                      {/* Group: Program, Details Grid, and Button */}
                      <div className={`w-full flex flex-col items-center ${(transcriptPage === 0 || transcriptPage === 1) ? 'gap-[16pt]' : 'gap-[25pt]'}`}>
                        {/* Program / Major / Juara Umum */}
                        <div className="w-full flex flex-col justify-center items-center shrink-0">
                          {(transcriptPage === 0 || transcriptPage === 1) ? (
                            <div className="text-[13.5pt] md:text-[15pt] text-[#000000] dark:text-[#FFFFFF] font-serif text-center leading-tight">
                              Juara Umum dan<br />
                              Peraih Nilai Tertinggi<br />
                              Ujian Akhir <span className="opacity-50">(</span>{transcriptPage === 0 ? '26.40' : '295.50'}<span className="opacity-50">/{transcriptPage === 0 ? '30' : '400'})</span><br />
                              Lulusan {transcriptPage === 0 ? '2014' : '2017'}
                            </div>
                          ) : (
                            <h3 className="text-xl md:text-2xl text-[#000000] dark:text-[#FFFFFF] font-serif m-0 leading-tight text-center">
                              {transcriptPage === 3 ? transcriptLevels[transcriptPage].institution : (
                                <>
                                  Matematika dan<br />
                                  Ilmu Pengetahuan Alam<br />
                                  (MIPA)
                                </>
                              )}
                            </h3>
                          )}
                        </div>

                        {(transcriptPage === 0 || transcriptPage === 1) && (
                          <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 text-[13.5pt] md:text-[15pt] text-[#000000] dark:text-[#FFFFFF] font-serif leading-tight text-left shrink-0">
                            {transcriptPage === 0 ? (
                              <>
                                <span className="text-right">Bahasa Indonesia</span><span>:</span><span>8.40</span>
                                <span className="text-right">Matematika</span><span>:</span><span>8.75</span>
                                <span className="text-right">Ilmu Pengetahuan Alam</span><span>:</span><span>9.25</span>
                              </>
                            ) : (
                              <>
                                <span className="text-right">Bahasa Indonesia</span><span>:</span><span>88.00</span>
                                <span className="text-right">Bahasa Inggris</span><span>:</span><span>70.00</span>
                                <span className="text-right">Matematika</span><span>:</span><span>72.50</span>
                                <span className="text-right">Ilmu Pengetahuan Alam</span><span>:</span><span>65.00</span>
                              </>
                            )}
                          </div>
                        )}
                        
                        {transcriptLevels[transcriptPage].period && (
                          <>
                          {transcriptPage !== 3 && (
                            <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-[7pt] text-lg md:text-xl text-[#000000] dark:text-[#FFFFFF] font-serif transition-opacity duration-300 m-0 leading-tight mt-0 text-left shrink-0">
                              <span className="text-right">NPSN</span><span>:</span><span>{transcriptLevels[transcriptPage].npsn.replace('NPSN: ', '')}</span>
                              <span className="text-right">Akreditasi</span><span>:</span><span>{transcriptLevels[transcriptPage].akreditasi}</span>
                            </div>
                          )}
                          {transcriptPage === 3 && (
                            <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-[7pt] text-lg md:text-xl text-[#000000] dark:text-[#FFFFFF] font-serif transition-opacity duration-300 m-0 leading-tight mt-0 text-left shrink-0">
                              <span className="text-right">Program Studi</span><span>:</span><span>Logistik Bisnis</span>
                              <span className="text-right">Akreditasi</span><span>:</span><span>{transcriptLevels[transcriptPage].akreditasiBottom || transcriptLevels[transcriptPage].akreditasi}</span>
                              <span className="text-right">SKS</span><span>:</span><span>149</span>
                              <span className="text-right">IPK</span><span>:</span><span>3.26<span className="opacity-50">/4.00</span></span>
                              <span className="text-right">Predikat</span><span>:</span><span>Sangat Memuaskan</span>
                            </div>
                          )}
                          <a 
                            href={transcriptLevels[transcriptPage].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-[#3D3D3D] dark:text-[#F2F0EF] transition-colors cursor-pointer  outline-none focus:outline-none shrink-0"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                          >
                            <img 
                              key={transcriptPage === 3 ? 'pdikti' : 'kemdikbud'}
                              src={transcriptPage === 3 
                                ? "https://dhnaath.com/wp-content/uploads/2026/09/pddikti-baru-26-7.webp" 
                                : "https://dhnaath.com/wp-content/uploads/2026/09/Desain-tanpa-judul-1.webp"}
                              alt="Document"
                              className={`object-cover object-center pointer-events-none select-none ${
                                transcriptPage === 3 
                                  ? "w-[12.125rem] h-[3.625rem] md:w-[14.5625rem] md:h-[4.3125rem]" 
                                  : "w-[10.625rem] h-[3.1875rem] md:w-[12.75rem] md:h-[3.8125rem]"
                              }`}
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                            <ExternalLink size={20} />
                          </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                {/* Image Section (70%) */}
                <div className="w-full md:w-[70%] flex flex-col items-center">
                  <div className="w-full flex flex-col items-center gap-[25pt]">
                    <h2 className="text-2xl md:text-3xl text-[#000000] dark:text-[#FFFFFF] font-serif m-0 leading-tight text-center">
                      {transcriptPage === 3 ? transcriptLevels[transcriptPage].title : transcriptLevels[transcriptPage].institution}
                    </h2>
                    <div key={transcriptPage} className="w-full h-full flex justify-center items-start">
                      {transcriptPage === 0 && <ElementarySchoolTable />}
                      {transcriptPage === 1 && <MiddleSchoolTable />}
                      {transcriptPage === 2 && <HighSchoolTable />}
                      {transcriptPage === 3 && <TranscriptTable />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Buttons */}
              <button
                onClick={() => setTranscriptPage((prev) => (prev >= transcriptLevels.length - 1 ? 0 : prev + 1))}
                className="hidden md:flex shrink-0 p-3 rounded-full bg-[#F2F0EF] dark:bg-[#3D3D3D] shadow-md text-[#3D3D3D] dark:text-[#F2F0EF]  transition-all scale-[0.93] hover:scale-100 z-10"
                aria-label="Next transcript"
              >
                <ChevronRight size={36} />
              </button>
            </div>
            </div>
          </div>

          
          
          <div className="relative w-full overflow-hidden flex pt-[50pt] pb-[15pt] mt-0 mb-0">
            <style dangerouslySetInnerHTML={{__html: `
              @media (max-width: 767px) {
                .carousel-scale-mobile {
                  zoom: 0.7258;
                }
              }
              @supports not (zoom: 0.7258) {
                @media (max-width: 767px) {
                  .carousel-scale-mobile {
                    transform: scale(0.7258);
                    transform-origin: top left;
                  }
                }
              }
              @keyframes marquee-reverse {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0%); }
              }
              .animate-marquee-reverse {
                animation: marquee-reverse 78s linear infinite;
              }
            `}} />
            <div 
              className={`flex gap-[30pt] px-4 animate-marquee-reverse min-w-max group cursor-pointer carousel-scale-mobile`}
              style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
              onClick={() => setIsCarouselPaused(!isCarouselPaused)}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-[30pt] min-w-max items-start">
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Kegiatan"
                      title={<>CHARACTER BUILDING<br />KE-20</>}
                      content="Kegiatan Character Building ke-20 untuk pembentukan karakter."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/CB-1_page-0001-1_11zon.webp"
                      
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Kegiatan"
                      title="LKMM TERABUMI 2021"
                      content="Latihan Keterampilan Manajemen Mahasiswa (LKMM) Tingkat Dasar."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/LKMM.webp"
                      
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Kunjungan Industri"
                      title="PT DSV Solutions Indonesia"
                      content="Mahasiswa tahun kedua Program Studi D3 dan D4 Logistik Bisnis melaksanakan kunjungan industri pada 9 Juni 2023 ke PT. DSV Solutions Indonesia (Pondok Ungu Site), Kota Bekasi, Jawa Barat."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/KI-1_11zon.webp"
                      
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="TUGAS KELOMPOK"
                      title="Wawancara"
                      content="Kegiatan Wawancara"
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/IMG_1537-1_11zon.webp"
                      
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Proyek Logistik I"
                      title="Business Process"
                      content="Tugas besar berupa observasi 𝗣𝗿𝗼𝘀𝗲𝘀 𝗕𝗶𝘀𝗻𝗶𝘀 milik perusahaan untuk memenuhi syarat kelulusan mata kuliah 𝗣𝗿𝗼𝘆𝗲𝗸 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸 𝟭 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟮 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸."
                      darkImages={[
                        "https://dhnaath.com/wp-content/uploads/2026/09/1708894833625-1.webp",
                        "https://dhnaath.com/wp-content/uploads/2026/09/1711427302442.webp"
                      ]}
                      
                      link="https://drive.google.com/drive/folders/1_VnnesMIhYmNrWu-i6gTr94dlg4ioTuL?usp=sharing"
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Proyek Logistik II"
                      title="Design Thinking"
                      content="Tugas besar berbentuk 𝗗𝗲𝘀𝗶𝗴𝗻 𝗧𝗵𝗶𝗻𝗸𝗶𝗻𝗴 untuk memenuhi syarat kelulusan mata kuliah 𝗣𝗿𝗼𝘆𝗲𝗸 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸 𝟮 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟯 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸."
                      darkContent="Tugas Design Thinking Logistik"
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/Poster-Proyek-II-1_11zon.webp"
                      
                      link="https://drive.google.com/drive/folders/1UWIkR6LBHFneedvGCq1SOkNNh7ROdiPm?usp=sharing"
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Proyek Logistik III"
                      title="House of Quality"
                      content="Tugas besar berbentuk 𝗛𝗼𝘂𝘀𝗲 𝗼𝗳 𝗤𝘂𝗮𝗹𝗶𝘁𝘆 (𝗛𝗢𝗤) untuk memenuhi syarat kelulusan mata kuliah 𝗣𝗿𝗼𝘆𝗲𝗸 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸 𝟯 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟱 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸."
                      darkContent="HOQ Inovasi Whoosh Pengiriman Barang Same Day Jakarta-Bandung"
                      darkImages={[
                        "https://dhnaath.com/wp-content/uploads/2026/09/1708894126465-1.webp",
                        "https://dhnaath.com/wp-content/uploads/2026/09/1714586513717.webp"
                      ]}
                      
                      link="https://drive.google.com/drive/folders/1ml-A4wYLbJKZ4pEbDgFU4pSxZ9J327vN?usp=sharing"
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Seminar"
                      title="International Joint Effort Seminar Programme on Logistics and Supply Chain"
                      content="Seminar dan Kompetisi Internasional dengan tema Inovasi pada Logistik dan Supply Chain Management hasil kolaborasi dengan Politeknik Nilai Malaysia"
                      darkImages={[
                        "https://dhnaath.com/wp-content/uploads/2026/08/seminar-baru-1-1-1.webp",
                        "https://dhnaath.com/wp-content/uploads/2026/09/1709873546407.webp"
                      ]}
                      
                      link="https://www.youtube.com/watch?v=tq6LsPKmaVY&t=19372s"
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Seminar"
                      title="Presenter"
                      content="Penghargaan untuk Presenter pada acara Seminar Internasional."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/APPRECIATION-CERT_page-0001-1_11zon.webp"
                      
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Seminar"
                      title="Favourite Judges"
                      content="Penghargaan untuk Favourite Judges pada acara Seminar Internasional."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/FAVJUDG-1_11zon.webp"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Kerja Praktik I"
                      title="Rencana Penelitian"
                      content="Sebagai syarat untuk memenuhi kelulusan pada mata kuliah 𝗞𝗲𝗿𝗷𝗮 𝗣𝗿𝗮𝗸𝘁𝗶𝗸 𝟭 dan 𝗟𝗮𝗽𝗼𝗿𝗮𝗻 𝗔𝗸𝗵𝗶𝗿 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟳 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸."
                      lightMode={true}
                      
                      
                      darkContent={
                        <div 
                          className="font-serif font-bold not-italic text-[1rem] md:text-[1.125rem]"
                          style={{ lineHeight: "calc(1.25em + 1pt)" }}
                        >
                          <span className="block">Optimalisasi Persediaan</span>
                          <span className="block">Toyota Motor Oil (TMO) Engine Oil</span>
                          <span className="block">pada Gudang Suku Cadang</span>
                          <span className="block">Toyota Auto2000 Cabang Pasteur</span>
                          <span className="block">Menggunakan Metode</span>
                          <span className="block">EOQ Deterministik dan</span>
                          <span className="block">Least Unit Cost</span>
                        </div>
                      }
                      topLeftIcon={<FileText size={24} />}
                      topLeftLink="https://drive.google.com/file/d/1ZpdHl4ABP2CNCyaZlSs19R5ngxjG09Ke/view?usp=sharing"
                      
                      link="https://drive.google.com/file/d/1zifrsxdsi9nh4n8u2JSnRG8Et6pxJRht/view?usp=sharing"
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Kerja Praktik II"
                      title="Skripsi"
                      content="Sebagai syarat untuk memenuhi kelulusan pada mata kuliah 𝗞𝗲𝗿������𝗮 𝗣𝗿𝗮𝗸𝘁𝗶𝗸 𝟮 dan 𝗦𝗸𝗿𝗶𝗽𝘀𝗶 dalam kurikulum 𝗦𝗲𝗺𝗲𝘀𝘁𝗲𝗿 𝟴 pada studi 𝗦𝗮𝗿𝗷𝗮𝗻𝗮 𝗧𝗲𝗿𝗮𝗽𝗮𝗻 𝗟𝗼𝗴𝗶𝘀𝘁𝗶𝗸."
                      lightMode={true}
                      
                      
                      darkContent={
                        <div 
                          className="font-serif font-bold not-italic text-[1rem] md:text-[1.125rem]"
                          style={{ lineHeight: "calc(1.25em + 1pt)" }}
                        >
                          <span className="block">Analisis Kualitas Pelayanan</span>
                          <span className="block">PT. Pos Indonesia (Persero)</span>
                          <span className="block">Cabang KPRK Sintang 78600</span>
                          <span className="block">untuk Meningkatkan</span>
                          <span className="block">Kepuasan Pelanggan dengan</span>
                          <span className="block">Integrasi ServQual dan IPA</span>
                        </div>
                      }
                      topLeftIcon={<FileText size={24} />}
                      topLeftLink="https://drive.google.com/file/d/1ACG-GMGG3btYs0Vz0ZdQHzoa4eNDucmU/view?usp=sharing"
                      
                      link="https://drive.google.com/file/d/1p-r0nD3-OhsOTnOi7oZSdusYS-oyTTn6/view?usp=sharing"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden flex pt-[15pt] pb-[50pt]">
            <style dangerouslySetInnerHTML={{__html: `
              .animate-marquee-78 {
                animation: marquee 78s linear infinite;
              }
            `}} />
            <div 
              className={`flex gap-[30pt] px-4 animate-marquee-78 min-w-max group cursor-pointer carousel-scale-mobile`}
              style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
              onClick={() => setIsCarouselPaused(!isCarouselPaused)}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-[30pt] min-w-max items-start">
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="Perwakilan"
                      title="Dokter Kecil UKS"
                      content="SDN 01 LANJAK"
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/ChatGPT-Image-21-Jul-2026-14.52.51-1_11zon.webp"
                      
                      disableFlip={true}
                    />
                  </div>
                  <div className="w-[25.375rem] shrink-0">
                    <div className="w-full h-[18.125rem] rounded-[2rem] overflow-hidden shadow-sm bg-white relative">
                      <img 
                        src="https://dhnaath.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-07-21-at-14.15.33.webp" 
                        alt="Penghargaan" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} 
                      />
                    </div>
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="OLIMPIADE SAINS NASIONAL"
                      title="OSN SD/MI 2013"
                      content="Peserta Olimpiade Sains Nasional SD/MI Tahun 2013."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/ChatGPT-Image-23-Jul-2026-11.25.26-1_11zon.webp"
                      disableFlip={true}
                      lightMode={true}
                      imageClassName="scale-[0.93] object-contain"
                    />
                  </div>
                  <div className="w-[25.375rem] shrink-0">
                    <div className="w-full h-[18.125rem] rounded-[2rem] overflow-hidden shadow-sm bg-white relative">
                      <img 
                        src="https://dhnaath.com/wp-content/uploads/2026/09/Desain-tanpa-judul-4.webp" 
                        alt="Sertifikat" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} 
                      />
                    </div>
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="OLIMPIADE SAINS NASIONAL"
                      title="OSN SD/MI 2013"
                      content="Peserta Olimpiade Sains Nasional SD/MI Tahun 2013."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-2-1_11zon.webp"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Bumi Perkemahan Siluk Muara Tawang"
                      content="Kegiatan Bumi Perkemahan Siluk Muara Tawang."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/sertif-pramuka-suhaid-1-1_11zon.webp"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="PRAMUKA"
                      title="Jamnas X-2016"
                      content="Peserta Jambore Nasional X Tahun 2016."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/Desain-tanpa-judul-3-1_11zon.webp"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem] shrink-0">
                    <div className="w-full h-[18.125rem] rounded-[2rem] overflow-hidden shadow-sm bg-white relative">
                      <img 
                        src="https://dhnaath.com/wp-content/uploads/2026/09/Pramuka-penggalang-Dari-berbagai-kwartir-ranting-se-Kab.kapuas-Hulu-Melakukan-Latihan-Pemantap.webp" 
                        alt="Pramuka Penggalang" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} 
                      />
                    </div>
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="OLIMPIADE SAINS NASIONAL"
                      title="OSN SMP/MTs"
                      content="Peserta Olimpiade Sains Nasional SMP/MTs."
                      darkContent={<div className="font-serif font-bold text-3xl leading-tight text-[#3D3D3D] dark:text-[#F2F0EF] not-italic"><span className="block mb-2">Ilmu</span><span className="block mb-2">Pengetahuan</span><span className="block">Alam</span></div>}
                      disableFlip={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="KOMPETISI DEBAT"
                      title={<>English Festival and<br />National Schools Debating<br />Championship 2019</>}
                      content="Peserta English Festival and National Schools Debating Championship 2019. Penyelenggara: FKIP UNTAN dan MGMP Bahasa Inggris Kota Pontianak."
                      darkContent={<div className="font-serif font-bold text-3xl leading-tight text-[#3D3D3D] dark:text-[#F2F0EF] not-italic"><span className="block mb-2">FKIP UNTAN</span><span className="block mb-2">dan MGMP</span><span className="block mb-2">Bahasa Inggris</span><span className="block">Kota Pontianak</span></div>}
                      disableFlip={true}
                    />
                  </div>
                  <div className="w-[25.375rem]">
                    <FlipbookCard 
                      category="LOMBA FOTOGRAFI"
                      title={<>Festival Sungai Kapuas<br />BPNB Kalbar</>}
                      content="Peserta Lomba Fotografi Festival Sungai Kapuas."
                      darkImage="https://dhnaath.com/wp-content/uploads/2026/08/ChatGPT-Image-23-Jul-2026-11.29.33-1_11zon.webp"
                      disableFlip={true}
                      lightMode={true}
                    />
                  </div>
                  <div className="w-[25.375rem] shrink-0">
                    <div className="w-full h-[18.125rem] rounded-[2rem] overflow-hidden shadow-sm bg-white relative">
                      <img 
                        src="https://dhnaath.com/wp-content/uploads/2026/08/IMG_1614-1_11zon.webp" 
                        alt="Kegiatan Baru" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" draggable={false} onContextMenu={(e) => e.preventDefault()} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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


