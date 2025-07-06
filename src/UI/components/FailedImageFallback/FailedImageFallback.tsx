import { CircleX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FailedImageFallback = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-red-500">
      <CircleX className="w-10 h-10 mb-2" />
      <span className="text-lg">{t('image-error')}</span>
    </div>
  );
};
