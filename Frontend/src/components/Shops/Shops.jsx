import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/slices/shopsSlice';
import styles from './Shops.module.scss';

const Shops = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shops.categories);
  const shops = useSelector((state) => state.shops.shops);
  const selectedCategory = useSelector((state) => state.shops.selectedCategory);

  const filteredShops = selectedCategory 
    ? shops.filter(shop => shop.category === selectedCategory)
    : shops;

  return (
    <div className={styles.shopsBox}>
        <div className={styles.container}>
            <div className={styles.shopsBoxText}>
                <h1>
                  Mağazalar
                  {selectedCategory && ` / ${selectedCategory}`}
                </h1>
            </div>
            <div className={styles.shopsBoxContent}>
                <div className={styles.contentsCards}>
                    {filteredShops.map(shop => (
                    <div key={shop.id} className={styles.contentsCard} onClick={() => window.open(shop.url, '_blank')}>
                        <img src={shop.logo} alt={shop.name} />
                    </div>
                    ))}
                </div>
                <div className={styles.contentsFilter}>
                    <button onClick={() => dispatch(selectCategory(null))}>
                        Hamısını Göstər
                    </button>
                    {categories.map(category => (
                    <button key={category} onClick={() => dispatch(selectCategory(category))}>
                        {category}
                    </button>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Shops;
