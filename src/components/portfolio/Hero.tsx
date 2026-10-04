import { motion } from "motion/react";

export function Hero({ lang = 'id' }: { lang?: 'en' | 'id' }) {
  return (
    <section id="home" className="flex flex-col items-center justify-center bg-[#F4F3F0] relative pt-[50pt] pb-[50pt] px-[10pt]">
      <div className="flex flex-col items-center max-w-[calc(56rem+220pt)] w-full text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] font-serif tracking-tight mb-8 uppercase"
        >
          DHIA NAJMI ATHALLAH
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-6 text-[#5B6572] font-cambria text-lg md:text-xl leading-relaxed max-w-[calc(48rem+220pt)]"
        >
          <p className="text-xl md:text-2xl font-cambria text-[#222222] opacity-40">
            <strong>Systems Thinker</strong> &middot; <em>noun</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Lifelong Learning</strong> &middot; <em>adjective</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Lillāhi Ta'ālā</strong> &middot; <em>verb</em>
          </p>
          <p>
            {lang === 'en' ? (
              <>
                I think in systems, patterns, and possibilities.<br />
                I believe learning never ends.<br />
                Everything I do begins with sincere intention for Allah.
              </>
            ) : (
              <>
                Saya berpikir dalam sistem, pola, dan berbagai kemungkinan.<br />
                Saya percaya bahwa belajar tidak pernah berhenti.<br />
                Segala hal yang saya lakukan berawal dari niat yang tulus karena Allah.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
