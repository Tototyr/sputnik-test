import { ProductCard } from '@components/ProductCard';
import { products } from '@constants/products';

function App() {
  return (
    <div className="container flex justify-center flex-col">
      <h1 className="text-2xl text-black font-bold text-center">
        Каталог товаров
      </h1>

      <div className=" grid grid-cols-4 gap-x-7 gap-y-7 p-7 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:p-12 max-sm:gap-y-5 max-sm:gap-x-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            origin={product.origin}
            price={product.price}
            currency={product.currency}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
