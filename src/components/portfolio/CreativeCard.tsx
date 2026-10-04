import { Sparkles } from "lucide-react";

interface CreativeCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

export function CreativeCard({
  title,
  description,
  category,
  image,
  tags,
}: CreativeCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-2">
          <Sparkles size={16} className="text-[#5B6572]" />
          <span className="text-sm text-[#5B6572]">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-2 text-[#222222]">{title}</h3>
        <p className="text-[#5B6572] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F4F3F0] text-[#5B6572] rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
