import React, { useEffect, useState } from 'react';
import styles from './Brands.module.scss';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/slices/brandsSlice';

const Brands = () => {
  const brands = useSelector(selectBrands);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // looping uchun elave kopyalar daxil olmaqla umumi slayd sayi
  const totalSlides = brands.length * 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 2000); // her 2 saniyeden slaydi deyishdirir

    return () => clearInterval(interval);
  }, [totalSlides]);

  // brandsdaki markalari dovre salmaq uchun 3 defe tekrarlanmish dovr yaradri
  const loopingBrands = [...brands, ...brands, ...brands];

  return (
    <div className={styles.brandsSlide}>
        <div className={styles.slideshowContainer}>
        <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * 100}px)` }}
        >
            {loopingBrands.map((brand, index) => (
            <div key={index} className={styles.slide}>
                <img src={brand.url} alt={brand.name} />
            </div>
            ))}
        </div>
        </div>
    </div> 
  );
};

export default Brands;