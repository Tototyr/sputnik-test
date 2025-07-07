import { products } from '@/constants/products';
import { ProductCardList } from '../components/ProductCardList';
import { t } from 'i18next';

function App() {
  return (
    <main className="container mx-auto px-4">
      <header className="text-center py-8">
        <h1 className="text-2xl text-blue-300 font-bold">Каталог товаров</h1>
      </header>

      <section aria-labelledby="catalog-heading">
        <h2 id="catalog-heading" className="sr-only">
          {t('catalog')}
        </h2>
        <ProductCardList data={products} />
      </section>
    </main>
  );
}

export default App;
