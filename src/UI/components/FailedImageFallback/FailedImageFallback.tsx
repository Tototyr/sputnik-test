import { CircleX } from 'lucide-react';

export const FailedImageFallback = () => (
  <div className="flex flex-col items-center text-red-500">
    <CircleX className="w-10 h-10 mb-2" />
    <span className="text-lg">Изображение не загружено</span>
  </div>
);
