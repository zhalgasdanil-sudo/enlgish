import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandmarkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  height?: string;
}

export function LandmarkCard({ title, description, imageUrl, year, height }: LandmarkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-blue-400">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex gap-4 text-slate-400">
          {year && (
            <div>
              <span className="text-blue-400">Built:</span> {year}
            </div>
          )}
          {height && (
            <div>
              <span className="text-blue-400">Height:</span> {height}
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
