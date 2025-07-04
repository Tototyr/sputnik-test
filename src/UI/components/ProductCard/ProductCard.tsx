import React from "react";

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: "RUB" | "USD" | "EUR";
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formatPrice = (): string => {
    const amount = price / 100;

    const localeMap = {
      RUB: "ru-RU",
      USD: "en-US",
      EUR: "de-DE",
    };

    return new Intl.NumberFormat(localeMap[currency], {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-card bg-clip-border text-white shadow-md  hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-image">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Изображение товара"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            Нет изображения
          </div>
        )}
      </div>
      <div className="p-6 max-md:pb-2 max-md:px-4">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased break-words max-md:text-lg">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased max-md:text-sm ">
          Страна: {origin}
        </p>
      </div>
      <div className="p-6 pt-0 max-md:px-4">{formatPrice()}</div>
    </div>
  );
};
