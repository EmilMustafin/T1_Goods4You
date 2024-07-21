import { ChangeEvent, useState } from 'react';
import { useGetSearchProductsQuery } from '@/shared/api';
import { useDebounce } from '@/shared/lib/react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/ui/input';
import { Spinner } from '@/shared/ui/spinner/spinner';
import styles from './catalog.module.css';
import { ProductCard } from '../product-cards/ui/product-cards';

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const { data, isLoading, isFetching } = useGetSearchProductsQuery({
    query: debouncedSearchTerm,
    limit: limit,
    skip: skip,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSkip(0);
    setLimit(12);
  };

  const handleButtonClick = () => {
    setLimit(limit + 12);
    setSkip(skip + 12);
  };

  const totalProducts = data?.total ?? 0;

  return (
    <section id='catalog' className={styles.catalog}>
      <h1 className={styles.catalog_title}>Catalog</h1>
      <div className={styles.catalog_search}>
        <Input
          type='search'
          className={styles.input}
          placeholder='Search for...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        {isLoading || isFetching ? (
          <Spinner />
        ) : (
          <div className={styles.productGrid}>
            {data?.products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
      {totalProducts == limit && (
        <div className={styles.show_more}>
          <Button size='l' onClick={handleButtonClick}>
            Show more
          </Button>
        </div>
      )}
    </section>
  );
};
