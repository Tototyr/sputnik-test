import { ProductCardList } from '@components/ProductCardList';
import { products } from '@constants/products';

function App() {
  return (
    <main className="container flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl text-black font-bold text-center pb-7">
        Каталог товаров
      </h1>

      <ProductCardList data={products} />
    </main>
  );
}

export default App;
