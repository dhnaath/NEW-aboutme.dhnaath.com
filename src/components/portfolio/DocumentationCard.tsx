import { useState } from "react";
import { FileText, ExternalLink } from "lucide-react";

interface DocumentationCardProps {
  title: string;
  description: string;
  type: string;
  tags: string[];
  link?: string;
  externalLink?: string;
  bgColor?: string;
  textColor?: string;
  hideFileIcon?: boolean;
  date?: string;
  credentialId?: string;
  compact?: boolean;
}

export function DocumentationCard({
  title,
  description,
  type,
  tags,
  link,
  externalLink,
  bgColor,
  textColor,
  hideFileIcon,
  date,
  credentialId,
  compact = false,
}: DocumentationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const maxLength = compact ? 80 : 150;
  const isLongDescription = description.length > maxLength;
  const displayDescription = isExpanded || !isLongDescription 
    ? description 
    : `${description.slice(0, maxLength)}...`;

  return (
    <div 
      className={`rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full ${compact ? 'p-[0.85rem] md:p-4' : 'p-6'}`}
      style={{ backgroundColor: bgColor || '#FFFFFF' }}
    >
      <div className={`flex items-start justify-between ${compact ? 'mb-[0.425rem] md:mb-2' : 'mb-4'}`} >
        {!hideFileIcon && (
          link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className={`bg-[#F4F3F0] rounded-lg hover:bg-[#E5E4E2] transition-colors cursor-pointer ${compact ? 'p-[0.425rem] md:p-2' : 'p-3'}`}>
              <FileText className={`text-[#5B6572] ${compact ? 'w-[13.6px] h-[13.6px] md:w-4 md:h-4' : 'w-6 h-6'}`} />
            </a>
          ) : (
            <div className={`bg-[#F4F3F0] rounded-lg ${compact ? 'p-[0.425rem] md:p-2' : 'p-3'}`}>
              <FileText className={`text-[#5B6572] ${compact ? 'w-[13.6px] h-[13.6px] md:w-4 md:h-4' : 'w-6 h-6'}`} />
            </div>
          )
        )}
        {(externalLink || link) && (
          <a
            href={externalLink || link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ml-auto flex items-center ${textColor ? 'hover:opacity-80' : 'text-[#5B6572] hover:text-[#222222]'}`}
            style={textColor ? { color: textColor } : {}}
          >
            <ExternalLink className={compact ? 'w-[13.6px] h-[13.6px] md:w-4 md:h-4' : 'w-5 h-5'} />
          </a>
        )}
      </div>
      <h3 
        className={`${compact ? 'text-[0.85rem] leading-[1.275rem] mb-[0.2125rem] md:text-base md:leading-normal md:mb-1' : 'text-xl mb-2'} font-serif ${!textColor ? 'text-[#222222]' : ''}`}
        style={textColor ? { color: textColor } : {}}
      >
        {title}
      </h3>
      <p 
        className={`${compact ? 'text-[0.6375rem] leading-[0.85rem] md:text-xs md:leading-[1rem]' : 'text-sm'} ${date ? (compact ? 'mb-[0.2125rem] md:mb-1' : 'mb-1') : (compact ? 'mb-[0.2125rem] md:mb-1' : 'mb-3')} font-sans ${!textColor ? 'text-[#5B6572]' : ''}`}
        style={textColor ? { color: textColor } : {}}
      >
        {type}
      </p>
      {date && (
        <p 
          className={`${compact ? 'text-[0.6375rem] leading-[0.85rem] md:text-xs md:leading-[1rem]' : 'text-sm'} ${credentialId ? (compact ? 'mb-[0.2125rem] md:mb-1' : 'mb-1') : (compact ? 'mb-[0.2125rem] md:mb-1' : 'mb-3')} font-sans ${!textColor ? 'text-[#5B6572]' : ''}`}
          style={textColor ? { color: textColor } : {}}
        >
          {date}
        </p>
      )}
      {credentialId && (
        <p 
          className={`${compact ? 'text-[0.6375rem] leading-[0.85rem] mb-[0.425rem] md:text-xs md:leading-[1rem] md:mb-2' : 'text-sm mb-3'} font-sans ${!textColor ? 'text-[#5B6572]' : ''}`}
          style={textColor ? { color: textColor } : {}}
        >
          Credential ID: {credentialId}
        </p>
      )}
      <div className={`${compact ? 'mb-[0.425rem] md:mb-2' : 'mb-4'} flex-1`}>
        <p 
          className={`font-cambria leading-relaxed ${compact ? 'text-[0.584375rem] md:text-[0.6875rem]' : ''} ${!textColor ? 'text-[#5B6572]' : ''}`}
          style={textColor ? { color: textColor } : {}}
        >
          {displayDescription}
        </p>
        {isLongDescription && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${compact ? 'text-[0.6375rem] leading-[0.85rem] md:text-xs md:leading-4' : 'text-sm'} font-semibold mt-1 hover:underline focus:outline-none ${!textColor ? 'text-[#222222]' : ''}`}
            style={textColor ? { color: textColor } : {}}
          >
            {isExpanded ? "Tampilkan lebih sedikit" : "Selengkapnya"}
          </button>
        )}
      </div>
      <div className={`flex flex-wrap ${compact ? 'gap-[0.2125rem] md:gap-1 mt-auto' : 'gap-2'}`}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${compact ? 'px-[0.425rem] py-[0.10625rem] text-[0.53125rem] leading-[0.796875rem] md:px-2 md:py-0.5 md:text-[0.625rem] md:leading-normal' : 'px-3 py-1 text-sm'} rounded-full ${!textColor ? 'bg-[#F4F3F0] text-[#5B6572]' : 'bg-white/20'}`}
            style={textColor ? { color: textColor } : {}}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
