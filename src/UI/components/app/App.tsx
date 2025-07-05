import { ProductCard } from '@components/ProductCard';
import { products } from '@constants/products';

function App() {
  return (
    <div className="container flex justify-center flex-col">
      <h1 className="text-2xl text-blue-300 font-bold text-center pb-7">
        Каталог товаров
      </h1>

      <div className="grid grid-cols-4 gap-x-6 gap-y-15 max-xl:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 cursor-pointer max-xl:ml-6 max-xl:mr-6">
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
