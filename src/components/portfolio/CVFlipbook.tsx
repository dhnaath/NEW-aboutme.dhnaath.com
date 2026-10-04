import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FlipBook = HTMLFlipBook as any;

export function CVFlipbook({ pdfUrl = "https://dhnaath.com/wp-content/uploads/2026/08/CV-DHIA-NAJMI-ATHALLAH.pdf", title = "Interactive Document" }: { pdfUrl?: string, title?: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [pdfError, setPdfError] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!pdfUrl) return;

    let isMounted = true;
    const abortController = new AbortController();

    // Safely pre-fetch the PDF to avoid unhandled pdf.js exceptions
    fetch(pdfUrl, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then((blob) => {
        if (isMounted) setPdfData(blob);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.log('Suppressed fetch error for main CV PDF:', pdfUrl);
          if (isMounted) setPdfError(true);
        }
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Calculate width based on screen size to make it responsive
  const getPageWidth = () => {
    if (windowWidth < 640) return 750; // Mobile
    if (windowWidth < 1024) return 1125; // Tablet
    return 1350; // Desktop
  };
  const getPageHeight = () => {
    if (windowWidth < 640) return 1060; // Mobile
    if (windowWidth < 1024) return 1590; // Tablet
    return 1908; // Desktop
  };

  const pageWidth = getPageWidth();
  const pageHeight = getPageHeight();

  return (
    <div className="w-full bg-[#FFFFFF]/50 p-4 sm:p-8 rounded-2xl shadow-sm border border-[#5B6572]/20 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-2xl font-semibold text-[#222222] mb-8 z-10 font-serif">{title}</h2>
      
      <div className="w-full flex justify-center pb-8 z-10">
        {pdfError ? (
          <div className="text-red-500 py-20 text-center">
            Failed to load main CV PDF.<br/>The file might be unavailable (404) or restricted by CORS.
          </div>
        ) : !pdfData ? (
          <div className="text-[#5B6572] py-20 text-center italic">Loading PDF Document...</div>
        ) : (
          <Document
            file={pdfData}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.log('PDF load suppressed:', error.message)}
            onSourceError={(error) => console.log('PDF source error suppressed:', error.message)}
            loading={<div className="text-[#5B6572] py-20 text-center italic">Processing PDF Pages...</div>}
            error={<div className="text-red-500 py-20 text-center">Failed to process PDF Document.</div>}
          >
            {numPages && (
              <FlipBook
                width={pageWidth}
                height={pageHeight}
                size="stretch"
                minWidth={300}
                maxWidth={1350}
                minHeight={424}
                maxHeight={1908}
                maxShadowOpacity={0.4}
                showCover={true}
                mobileScrollSupport={true}
                className="cv-flipbook drop-shadow-2xl"
                style={{ margin: "0 auto" }}
              >
                {/* Render pages dynamically based on numPages */}
                {Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} className="page bg-[#FFFFFF] shadow-sm overflow-hidden flex items-center justify-center">
                    <Page 
                      pageNumber={index + 1} 
                      width={pageWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="flex justify-center items-center h-full w-full"
                    />
                  </div>
                ))}
                
                {/* Back Cover */}
                <div className="page bg-[#FFFFFF] border border-[#5B6572]/40 shadow-sm flex flex-col items-center justify-center p-8">
                  <h3 className="text-2xl font-bold text-[#5B6572]/70 mb-2">End of Document</h3>
                  <p className="text-[#5B6572]/70 text-sm mb-8 text-center">Please continue scrolling to view detailed projects below.</p>
                  <a 
                    href={pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-[#222222] text-[#FFFFFF] px-6 py-3 rounded-lg hover:bg-[#222222] transition-colors shadow-md"
                  >
                    Download Original PDF
                  </a>
                </div>
              </FlipBook>
            )}
          </Document>
        )}
      </div>
      
      <p className="text-sm text-[#5B6572] mt-4 text-center">
        Tip: Click on the corners or drag to turn the pages, just like a real book.
      </p>
    </div>
  );
}
