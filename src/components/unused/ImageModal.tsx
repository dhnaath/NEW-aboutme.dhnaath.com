import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full max-h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-4 md:right-4 text-[#FFFFFF] hover:text-[#F4F3F0] p-2 z-50 bg-black/50 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
