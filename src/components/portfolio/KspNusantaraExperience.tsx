import { Calendar, MapPin } from "lucide-react";

interface Position {
  title: string;
  period: string;
  periodEn?: string;
  location: string;
  achievements: string[];
  achievementsEn?: string[];
  employmentType?: string;
  employmentTypeEn?: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

interface KspNusantaraExperienceProps {
  company: string;
  companyLogo?: string;
  companyLogoDark?: string;
  positions: Position[];
  description?: string;
  tagColor?: string;
}

export function KspNusantaraExperience({ company, companyLogo, companyLogoDark, positions, description = "", tagColor, lang = 'id' }: KspNusantaraExperienceProps & { lang?: 'en' | 'id' }) {
  const color = tagColor || '#F57C00';
  
  // Collect all unique images from all positions
  const allImages = Array.from(new Set(positions.flatMap(pos => [pos.image, pos.image2, pos.image3, pos.image4]).filter(Boolean) as string[]));

  return (
    <div className="bg-[#F2F0EF] dark:bg-[#3D3D3D] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header with Logo and Company */}
      <div className="px-6 py-2.5 sm:py-3 flex justify-between items-center gap-4 dark:bg-[#3D3D3D] transition-colors">
        <div className="flex items-center gap-4 sm:gap-5">
          {companyLogo && (
            <div className="w-24 h-[72px] sm:w-[120px] sm:h-[90px] shrink-0 flex items-center justify-center">
              <img 
                src={companyLogo}
                alt={`${company} logo`} 
                loading="lazy"
                className={`max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-95 dark:hover:opacity-100 transition-all duration-300 ${companyLogoDark ? 'dark:hidden' : ''}`} 
              />
              {companyLogoDark && (
                <img 
                  src={companyLogoDark}
                  alt={`${company} logo`} 
                  loading="lazy"
                  className="max-w-full max-h-full object-contain hidden dark:block dark:brightness-0 dark:invert dark:opacity-95 dark:hover:opacity-100 transition-all duration-300" 
                />
              )}
            </div>
          )}      
          <div>
            <h3 className="text-xl text-[#222222] dark:text-[#F2F0EF] font-serif whitespace-pre-line">{company}</h3>
          </div>
        </div>
      </div>

      {/* Images */}
      <div>
        {allImages.length === 1 ? (
          <div className="aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
            <img 
              src={allImages[0]} 
              alt={company} 
              className="w-full h-full object-cover pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable={false}             
            />
          </div>
        ) : allImages.length === 2 ? (
          <div className="grid grid-cols-2 gap-1 aspect-[4/3] sm:aspect-[16/9]">
            {allImages.map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img 
                  src={src} 
                  alt={company} 
                  className="w-full h-full object-cover pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable={false}                 
                />
              </div>
            ))}
          </div>
        ) : allImages.length === 3 ? (
          <div className="grid grid-cols-3 gap-1 aspect-[4/3] sm:aspect-[16/9]">
            {allImages.map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img 
                  src={src} 
                  alt={company} 
                  className="w-full h-full object-cover pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable={false}                 
                />
              </div>
            ))}
          </div>
        ) : allImages.length === 4 ? (
          <div className="grid grid-cols-2 gap-1 aspect-square sm:aspect-[4/3]">
            {allImages.map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img 
                  src={src} 
                  alt={company} 
                  className="w-full h-full object-cover pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable={false}                 
                />
              </div>
            ))}
          </div>
        ) : allImages.length > 0 ? (
          <div className="grid grid-cols-6 gap-1 aspect-square sm:aspect-[4/3]">
            {allImages.slice(0, 2).map((src, i) => (
              <div key={i} className="col-span-3 overflow-hidden">
                <img 
                  src={src} 
                  alt={company} 
                  className="w-full h-full object-cover pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable={false}                 
                />
              </div>
            ))}
            {allImages.slice(2).map((src, i) => (
              <div key={i + 2} className="col-span-2 overflow-hidden">
                <img 
                  src={src} 
                  alt={company} 
                  className="w-full h-full object-cover pointer-events-none select-none" onContextMenu={(e) => e.preventDefault()} draggable={false}                 
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="px-6 py-6 pt-5 dark:bg-[#3D3D3D]">
          <div className="flex flex-col pb-0">
            {positions.map((pos, index) => (
              <div key={index} className="relative pb-4 last:pb-0">
                {/* Timeline connector */}
                {index !== positions.length - 1 && (
                  <div className="absolute left-[0.4375rem] top-[0.875rem] -bottom-[0.875rem] w-[0.125rem] bg-[#3D3D3D] dark:bg-[#F2F0EF] z-0"></div>
                )}
                
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="w-4 h-4 rounded-full border-2 border-[#3D3D3D] dark:border-[#F2F0EF] bg-[#F2F0EF] dark:bg-[#3D3D3D] mt-1.5 shrink-0 relative z-10"></div>
                  
                  <div className="flex-1 overflow-hidden">
                    <h4 className="text-base mb-1 text-[#222222] dark:text-[#F2F0EF] font-semibold">{pos.title}</h4>
                    
                    <div className="flex flex-col gap-1 text-[#5B6572] dark:text-[#F2F0EF]/80 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{pos.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{lang === 'en' && pos.periodEn ? pos.periodEn : pos.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
