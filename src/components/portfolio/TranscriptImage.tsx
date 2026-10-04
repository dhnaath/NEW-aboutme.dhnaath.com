import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Reuse the existing worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface TranscriptImageProps {
  src: string;
  alt: string;
}

export function TranscriptImage({ src, alt }: TranscriptImageProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [pdfError, setPdfError] = useState<boolean>(false);

  const isPdf = src.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    if (!isPdf) return;

    let isMounted = true;
    const abortController = new AbortController();

    // Safely pre-fetch the PDF to avoid unhandled pdf.js exceptions when file is 404
    fetch(src, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        if (isMounted) setPdfData(blob);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.log('Suppressed fetch error for PDF:', src);
          if (isMounted) setPdfError(true);
        }
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [src, isPdf]);

  if (isPdf) {
    if (pdfError) {
      return (
        <div className="w-full flex justify-center relative -mt-[15pt]">
          <div className="text-red-500 py-10 text-center font-serif text-lg flex flex-col gap-2">
            <span>Failed to load PDF.</span>
            <span className="text-sm text-red-400">Please ensure the PDF is successfully uploaded to WordPress and CORS is enabled.</span>
          </div>
        </div>
      );
    }

    if (!pdfData) {
      return (
        <div className="w-full flex justify-center relative -mt-[15pt]">
          <div className="text-[#5B6572] py-10 font-serif italic text-lg text-center">
            Loading Document...
          </div>
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col items-center relative -mt-[15pt] overflow-hidden px-4 md:px-0">
        <Document
          file={pdfData}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={(error) => console.log('PDF load suppressed:', error.message)}
          onSourceError={(error) => console.log('PDF source error suppressed:', error.message)}
          loading={<div className="text-[#5B6572] py-10 font-serif italic text-lg">Loading Pages...</div>}
          className="max-w-full drop-shadow-lg"
        >
          {Array.from(new Array(numPages || 0), (el, index) => (
            <div key={`page_${index + 1}`} className="mb-4 max-w-full overflow-hidden bg-white border-2 border-[#5B6572]/20 rounded-[2rem] shadow-sm">
              <Page 
                pageNumber={index + 1} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 40, 800) : 800}
                className="max-w-full flex justify-center p-4 md:p-8"
              />
            </div>
          ))}
        </Document>
      </div>
    );
  }

  return (
    <div className="w-[85%] md:w-full mx-auto flex justify-center relative items-start -mt-[15pt]">
      <img
        src={src}
        alt={alt}
        
        className="w-full max-h-[43.75rem] object-contain mix-blend-multiply pointer-events-none select-none"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
