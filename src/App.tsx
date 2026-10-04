import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Sun, Moon } from 'lucide-react';

import PortfolioApp from './apps/portfolio/PortfolioApp';
const ResumeApp = lazy(() => import('./apps/resume/ResumeApp'));
const CoverLetterApp = lazy(() => import('./apps/cover-letter/CoverLetterApp'));
const PersonalityTraitsApp = lazy(() => import('./apps/personality-traits/PersonalityTraitsApp'));

export default function App() {
  const [activeApp, setActiveApp] = useState<'resume' | 'portfolio' | 'cover-letter' | 'personality-traits'>('cover-letter');
  const [docTarget, setDocTarget] = useState<'resume' | 'cover-letter'>('resume');
  const [showcaseTarget, setShowcaseTarget] = useState<'portfolio' | 'personality-traits'>('portfolio');
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const [theme, setTheme] = useState<'transparent' | 'flat-white' | 'flat-black' | 'glass'>('flat-white');

  const handleSetActiveApp = (app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') => {
    if (app === 'resume') {
      setDocTarget('cover-letter');
    } else if (app === 'cover-letter') {
      setDocTarget('resume');
    } else if (app === 'portfolio') {
      setShowcaseTarget('personality-traits');
    } else if (app === 'personality-traits') {
      setShowcaseTarget('portfolio');
    }
    setActiveApp(app);
  };

  const handleDocClick = () => {
    handleSetActiveApp(docTarget);
  };

  const handleShowcaseClick = () => {
    handleSetActiveApp(showcaseTarget);
  };

  useEffect(() => {
    if (theme === 'flat-black') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const getFloatingButtonClass = (currentTheme: string) => {
    const base = `w-[50.4px] h-[56px] md:w-[72px] md:h-[80px] rounded-l-[30px] md:rounded-l-[45px] rounded-r-none border-none flex items-center justify-center text-[0.875rem] md:text-[1.125rem] font-normal transition-all duration-300 opacity-100 cursor-pointer pointer-events-auto`;
    return `${base} bg-[#F2F0EF] dark:bg-[#3D3D3D] text-[#3D3D3D] dark:text-[#F2F0EF]`;
  };

  return (
    <div className={`flex w-full min-h-screen bg-[#EDE8D0] dark:bg-[#BAB095]`}>
      <div className="flex-1 relative min-w-0 flex flex-col">
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-[0.875rem] md:gap-5 pointer-events-none origin-right scale-[0.675] md:scale-100 items-end pb-[280px] md:pb-[400px]">
          <button 
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className={getFloatingButtonClass(theme)}
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'EN' : 'ID'}
          </button>
          
          <button 
            onClick={() => setTheme(theme === 'flat-black' ? 'flat-white' : 'flat-black')}
            className={getFloatingButtonClass(theme)}
            aria-label="Toggle theme"
          >
            {theme === 'flat-black' ? <Moon className="w-5 h-5 md:w-6 md:h-6" /> : <Sun className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
        
        <Suspense fallback={<div className={`flex-1 flex items-center justify-center h-screen bg-[#EDE8D0] dark:bg-[#BAB095]`}><div className="w-8 h-8 border-4 border-black/20 dark:border-white/20 border-t-black dark:border-t-white rounded-full animate-spin"></div></div>}>
          {activeApp === 'resume' && (
            <ResumeApp 
              activeApp={activeApp} 
              setActiveApp={handleSetActiveApp} 
              docTarget={docTarget}
              showcaseTarget={showcaseTarget}
              onDocClick={handleDocClick}
              onShowcaseClick={handleShowcaseClick}
              lang={lang} 
              setLang={setLang} 
              theme={theme} 
              setTheme={setTheme} 
            />
          )}
          {activeApp === 'portfolio' && (
            <PortfolioApp 
              activeApp={activeApp} 
              setActiveApp={handleSetActiveApp} 
              docTarget={docTarget}
              showcaseTarget={showcaseTarget}
              onDocClick={handleDocClick}
              onShowcaseClick={handleShowcaseClick}
              lang={lang} 
              setLang={setLang} 
            />
          )}
          {activeApp === 'cover-letter' && (
            <CoverLetterApp 
              activeApp={activeApp} 
              setActiveApp={handleSetActiveApp} 
              docTarget={docTarget}
              showcaseTarget={showcaseTarget}
              onDocClick={handleDocClick}
              onShowcaseClick={handleShowcaseClick}
              lang={lang} 
              setLang={setLang} 
              theme={theme} 
              setTheme={setTheme} 
            />
          )}
          {activeApp === 'personality-traits' && (
            <PersonalityTraitsApp 
              activeApp={activeApp} 
              setActiveApp={handleSetActiveApp} 
              docTarget={docTarget}
              showcaseTarget={showcaseTarget}
              onDocClick={handleDocClick}
              onShowcaseClick={handleShowcaseClick}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
}

