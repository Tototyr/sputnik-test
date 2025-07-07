import { ImageOff } from 'lucide-react';

export const FailedImageFallback = () => {
  return (
    <div className="flex flex-col items-center text-gray-500">
      <ImageOff className="w-13 h-13" />
    </div>
  );
};
