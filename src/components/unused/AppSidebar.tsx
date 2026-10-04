import React from 'react';
import { Mail, FolderOpen, FileText } from 'lucide-react';
import { Home, User, Settings, Info, Play, Instagram, Twitter, Linkedin } from 'lucide-react';

const data = {
  sidebar: {
    name: "Sara Lawrence",
    role: "UX Designer",
    quote: "Every great design begins with an even better story.",
    quoteAuthor: "Lorinda Mamo",
    contact: [
      { icon: Mail, label: "Email", value: "sara.lawrence@gmail.com" },
      { icon: FileText, label: "Phone", value: "+1 (555) 123-4567" }
    ],
    socials: [
      { icon: Instagram, label: "Instagram", value: "@saralawrence", color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500" },
      { icon: Twitter, label: "Twitter", value: "@saradesigns", color: "bg-black" },
      { icon: Linkedin, label: "LinkedIn", value: "Sara Lawrence", color: "bg-[#0A66C2]" }
    ]
  }
};

const t = {
  socials: "Socials"
};

export const AppSidebar = ({ 
  currentApp, 
  setActiveApp 
}: { 
  currentApp: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits', 
  setActiveApp?: (app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') => void 
}) => {
  return (
    <aside className="w-full md:w-[20rem] p-8 lg:p-10 border-r border-black/5 dark:border-white/10 flex flex-col gap-10 shrink-0 bg-white/50 backdrop-blur-md z-10 transition-colors duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden">
      {/* Profile Header */}
      <div>
        <div className="w-full aspect-square rounded-2xl bg-black/5 dark:bg-white/5 mb-8 overflow-hidden">
           <img 
             src="/images/profile-662.webp" 
             srcSet="/images/profile-331.webp 331w, /images/profile-662.webp 662w"
             sizes="(max-width: 768px) 662px, 331px"
             alt="Profile" 
             {...{ fetchpriority: "high" }} 
             width="662"
             height="662"
             className="w-full h-full object-cover object-top" 
           />
        </div>
        <h1 className="text-3xl font-semibold mb-2 text-black dark:text-white">{data.sidebar.name}</h1>
        <p className="text-[1.125rem] text-black dark:text-white font-medium mb-8">{data.sidebar.role}</p>
        
        <div className="relative">
          <p className="text-[1rem] text-black/80 dark:text-white font-medium mb-2 leading-relaxed">
            <span className="text-xl leading-none text-black/40 dark:text-white/40 font-serif mr-1">“</span>
            {data.sidebar.quote}
            <span className="text-xl leading-none text-black/40 dark:text-white/40 font-serif ml-1">”</span>
          </p>
          <p className="text-[0.8125rem] text-black/80 dark:text-white">{data.sidebar.quoteAuthor}</p>
        </div>
        
        {/* App Links */}
        {setActiveApp && (
          <div className="flex flex-col gap-1 mt-8">
            <hr className="border-black/5 dark:border-transparent dark:border-white/10 mb-3" />
            
            {currentApp === 'portfolio' ? (
              <button onClick={() => setActiveApp('personality-traits' as any)} className="text-left px-4 py-3 rounded-xl text-[0.875rem] font-medium transition-colors bg-transparent text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/10 flex items-center gap-2 italic">
                <FolderOpen className="w-4 h-4" /> Personality
              </button>
            ) : currentApp === 'personality-traits' ? (
              <button onClick={() => setActiveApp('portfolio' as any)} className="text-left px-4 py-3 rounded-xl text-[0.875rem] font-medium transition-colors bg-transparent text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/10 flex items-center gap-2 italic">
                <FolderOpen className="w-4 h-4" /> Portfolio
              </button>
            ) : (
              <button onClick={() => setActiveApp('portfolio' as any)} className="text-left px-4 py-3 rounded-xl text-[0.875rem] font-medium transition-colors bg-transparent text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/10 flex items-center gap-2 italic">
                <FolderOpen className="w-4 h-4" /> Portfolio
              </button>
            )}
            
            {currentApp !== 'cover-letter' && (
              <button onClick={() => setActiveApp('cover-letter')} className="text-left px-4 py-3 rounded-xl text-[0.875rem] font-medium transition-colors bg-transparent text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/10 flex items-center gap-2 italic">
                <Mail className="w-4 h-4" /> Cover Letter
              </button>
            )}
            
            {currentApp !== 'resume' && (
              <button onClick={() => setActiveApp('resume')} className="text-left px-4 py-3 rounded-xl text-[0.875rem] font-medium transition-colors bg-transparent text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/10 flex items-center gap-2 italic">
                <FileText className="w-4 h-4" /> Curriculum Vitae
              </button>
            )}
          </div>
        )}
      </div>

      <hr className="border-black/5 dark:border-transparent dark:border-white/10" />

      {/* Contact */}
      <div className="flex flex-col gap-6">
        {data.sidebar.contact.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/80 dark:text-white shrink-0">
              <item.icon className="w-[1.125rem] h-[1.125rem]" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.75rem] text-black/80 dark:text-white mb-0.5">{item.label}</span>
              <span className="text-[0.875rem] font-medium text-black dark:text-white">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-black/5 dark:border-transparent dark:border-white/10" />

      {/* Socials */}
      <div>
        <span className="text-[0.8125rem] text-black/80 dark:text-white mb-6 block">{t.socials}</span>
        <div className="flex flex-col gap-5">
          {data.sidebar.socials.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 ${item.color} `}>
                <item.icon className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[0.75rem] text-black/80 dark:text-white mb-0.5">{item.label}</span>
                <span className="text-[0.875rem] font-medium text-black dark:text-white">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
