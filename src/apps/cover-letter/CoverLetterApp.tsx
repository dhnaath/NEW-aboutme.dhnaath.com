import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import { ArrowUpRight, MapPin, Mail, Link2, Phone, Instagram, Twitter, Linkedin, Eraser, Droplet, Square, Moon, Sun, ChevronLeft, ChevronRight, ChevronDown, Sparkles, Menu, X, Home, User, Settings, Info, Play, FolderOpen, FileText, Globe, ZoomIn } from 'lucide-react';
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const data = {
  sidebar: {
    name: "Dhia Najmi Athallah",
    role: "S.Tr.Log., CSSWB",
    quote: "Ready to contribute and grow with the team.",
    quoteAuthor: "Dhia N. A.",
    contact: [
      { icon: Link2, label: "Website", value: "dhnaath.com" },
      { icon: MapPin, label: "Address", value: "Indonesia" }
    ],
    socials: [
      { icon: Instagram, label: "Instagram", value: "@dhnaath", color: "bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600" },
      { icon: Linkedin, label: "Linkedin", value: "dhnaath", color: "bg-[#0A66C2]" }
    ]
  }
};

function SignatureCard() {
  return (
    <div className="!mt-8 lg:!mt-12 font-times not-italic text-left select-text">
      <h4 className="text-[13pt] sm:text-[14pt] lg:text-[16pt] font-bold text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 leading-snug uppercase tracking-wide">
        DHIA NAJMI ATHALLAH
      </h4>
      <p className="text-[11pt] sm:text-[12pt] lg:text-[14pt] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 font-normal mt-1">
        S.Tr.Log., CSSWB
      </p>
      <div className="w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] border-b border-[#3D3D3D]/20 dark:border-white/20 my-2.5 sm:my-3 lg:my-3.5" />
      <div className="space-y-2 sm:space-y-2.5 text-[11pt] sm:text-[12pt] lg:text-[14pt] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80">
        <a
          href="https://wa.me/6285161629923"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-75 transition-opacity w-fit text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80"
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3D3D3D]/80 dark:bg-[#F2F0EF]/80 text-[#FAF8F5] dark:text-[#2A2A2A] flex items-center justify-center shrink-0 shadow-sm">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
          </span>
          <span className="font-normal">+62 851-6162-9923</span>
        </a>

        <a
          href="mailto:contact@dhnaath.com"
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-75 transition-opacity w-fit text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80"
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3D3D3D]/80 dark:bg-[#F2F0EF]/80 text-[#FAF8F5] dark:text-[#2A2A2A] flex items-center justify-center shrink-0 shadow-sm">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </span>
          <span className="font-normal">contact@dhnaath.com</span>
        </a>

        <a
          href="https://dhnaath.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-75 transition-opacity w-fit text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80"
        >
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3D3D3D]/80 dark:bg-[#F2F0EF]/80 text-[#FAF8F5] dark:text-[#2A2A2A] flex items-center justify-center shrink-0 shadow-sm">
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </span>
          <span className="font-normal">www.dhnaath.com</span>
        </a>
      </div>
    </div>
  );
}


export default function CoverLetterApp({ 
  activeApp, 
  setActiveApp, 
  docTarget,
  showcaseTarget,
  onDocClick,
  onShowcaseClick,
  lang = 'en', 
  theme = 'flat-white' 
}: { 
  activeApp?: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits', 
  setActiveApp?: (app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') => void, 
  docTarget?: 'resume' | 'cover-letter',
  showcaseTarget?: 'portfolio' | 'personality-traits',
  onDocClick?: () => void,
  onShowcaseClick?: () => void,
  lastStaticDoc?: 'resume' | 'cover-letter',
  lang?: 'en' | 'id', 
  setLang?: (lang: 'en' | 'id') => void, 
  theme?: string, 
  setTheme?: any 
}) {
  const formattedDate = useMemo(() => {
    const now = new Date();
    if (lang === 'id') {
      return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(now);
    }
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(now);
  }, [lang]);

  return (
    <>
      <div className="flex w-full min-h-screen bg-transparent dark:bg-transparent font-times">
        
        {/* Main Content Area */}
        <div className="flex-1 lg:h-screen lg:overflow-y-auto [&::-webkit-scrollbar]:hidden relative">
          <FloatingDocuments 
            activeApp="cover-letter" 
            setActiveApp={setActiveApp as any} 
            docTarget={docTarget}
            showcaseTarget={showcaseTarget}
            onDocClick={onDocClick}
            onShowcaseClick={onShowcaseClick}
          />

          <div className="w-full flex flex-col items-center z-10 px-2 sm:px-10 lg:px-20 pt-4 pb-8 sm:py-10 lg:py-20 min-h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="paper-scale-mobile w-full max-w-[56.25rem] min-h-[88.375rem] lg:h-[88.375rem] p-6 sm:p-8 lg:p-[3rem] rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-300 transform-gpu bg-[#F2F0EF] dark:bg-[#3D3D3D]"
            >
              {lang === 'en' ? (
                <div className="text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 font-times leading-relaxed space-y-4 sm:space-y-5 lg:space-y-6 text-[11pt] sm:text-[12pt] lg:text-[14pt] text-justify">
                  <p>{formattedDate}</p>
                  <p className="!mt-8 lg:!mt-12"><strong>To whoever is reading this</strong>,</p>
                  <p>Thank you for taking the time to get to know me better.</p>
                  <p>
                    I am <strong>Dhia Najmi Athallah</strong>, a graduate in <strong>Applied Bachelor of Logistics</strong>. My educational journey has been defined not only by academic study, but also by diverse practical experiences and projects that deepened my practical understanding of the field. Explorations beyond my core discipline have continually enriched my perspective and experience, ensuring that my path is not confined to a single track.
                  </p>
                  <p>
                    My academic foundation and diverse interdisciplinary experiences shape how I analyze and solve problems. I am accustomed to understanding situations from multiple perspectives before making informed decisions. A proactive attitude, strong adaptability, and an openness to possibilities are central to how I approach challenges while continuously evolving.
                  </p>
                  <p>
                    I view every opportunity (whether employment, collaboration, projects, or partnerships) as a meaningful space to deliver valuable contributions and create shared value. The knowledge, experience, and perspectives I bring are open to being developed through various forms of cooperation that bring mutual benefit. This process also represents an essential part of my journey to keep learning and growing.
                  </p>
                  <p>
                    You can get to know me further through my{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveApp?.('portfolio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Portfolio
                    </button>
                    ,{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveApp?.('resume');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Curriculum Vitae
                    </button>
                    , and{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveApp?.('personality-traits');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Personality
                    </button>{' '}
                    available on this website. Should you require my academic research profile, my{' '}
                    <a
                      href="https://scholar.dhnaath.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Google Scholar
                    </a>{' '}
                    profile is also available. Together, they provide a broader picture of my journey, interests, experience, and character. Opportunities to connect, exchange perspectives, or build collaborations are always welcomed toward possibilities that create mutual value.
                  </p>
                  <p>Thank you for your time and consideration.</p>
                  <p className="mt-8 lg:mt-12"><span className="font-bold">Sincerely</span>,</p>
                  <SignatureCard />
                </div>
              ) : (
                <div className="text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 font-times leading-relaxed space-y-4 sm:space-y-5 lg:space-y-6 text-[11pt] sm:text-[12pt] lg:text-[14pt] text-justify">
                  <p>{formattedDate}</p>
                  <p className="!mt-8 lg:!mt-12"><strong>Kepada siapa pun yang membaca tulisan ini</strong>,</p>
                  <p>Terima kasih telah meluangkan waktu untuk mengenal saya lebih jauh.</p>
                  <p>
                    Saya <strong>Dhia Najmi Athallah</strong>, lulusan <strong>Sarjana Terapan Logistik</strong>. Perjalanan pendidikan saya tidak hanya diisi dengan pembelajaran akademis, tetapi juga berbagai pengalaman praktik dan proyek yang memperdalam pemahaman saya terhadap bidang tersebut. Berbagai eksplorasi di luar bidang utama turut memperkaya pengalaman dan perspektif saya, sehingga perjalanan yang saya jalani tidak terbatas pada satu jalur saja.
                  </p>
                  <p>
                    Latar belakang akademis dan pengalaman lintas bidang membentuk cara saya dalam melihat dan menyelesaikan persoalan. Saya terbiasa memahami suatu situasi melalui berbagai sudut pandang sebelum mengambil keputusan. Sikap proaktif, kemampuan beradaptasi, serta keterbukaan terhadap berbagai kemungkinan menjadi bagian dari cara saya menghadapi tantangan sekaligus terus berkembang.
                  </p>
                  <p>
                    Setiap kesempatan, baik pekerjaan, kolaborasi, proyek, maupun kemitraan, saya pandang sebagai ruang untuk memberikan kontribusi yang bermakna dan menciptakan nilai bersama. Pengetahuan, pengalaman, dan perspektif yang saya miliki terbuka untuk dikembangkan melalui berbagai bentuk kerja sama yang memberikan manfaat bagi kedua pihak. Proses tersebut juga menjadi bagian dari perjalanan saya untuk terus belajar dan bertumbuh.
                  </p>
                  <p>
                    Anda dapat mengenal saya lebih jauh melalui{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveApp?.('portfolio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Portofolio
                    </button>
                    ,{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveApp?.('resume');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Curriculum Vitae
                    </button>
                    , dan{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveApp?.('personality-traits');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Personality
                    </button>{' '}
                    yang tersedia pada situs ini. Apabila Anda memerlukan profil akademis atau publikasi ilmiah, profil{' '}
                    <a
                      href="https://scholar.dhnaath.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#3D3D3D] dark:text-[#F2F0EF] hover:opacity-70 transition-opacity cursor-pointer inline p-0 bg-transparent border-none text-inherit font-inherit"
                    >
                      Google Scholar
                    </a>{' '}
                    saya juga dapat ditinjau. Seluruh media ini memberikan gambaran yang lebih luas mengenai perjalanan, minat, pengalaman, serta diri saya. Kesempatan untuk bertemu, berdiskusi, atau membangun kerja sama selalu terbuka bagi berbagai kemungkinan yang dapat memberikan nilai bersama.
                  </p>
                  <p>Terima kasih atas waktu dan perhatian Anda.</p>
                  <p className="mt-8 lg:mt-12"><span className="font-bold">Hormat saya</span>,</p>
                  <SignatureCard />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
