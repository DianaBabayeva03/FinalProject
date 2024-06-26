import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TariffsOnAllProducts.module.scss';
import flagTurkey from '../../image/turkiyebayraqicon.svg';

const TarrifsOnAllProducts = () => {
  const currency = useSelector((state) => state.currency.currency);

  const convertToAZN = (priceInUSD) => {
    const exchangeRate = 1.7; // USD'e AZN'e valyuta deyishimi
    return (priceInUSD * exchangeRate).toFixed(2);
  };

  const tariffs = [
    { range: '0 kq - 0.100 kq', priceUSD: 0.90 },
    { range: '0.101 kq - 0.250 kq', priceUSD: 1.60 },
    { range: '0.251 kq - 0.500 kq', priceUSD: 2.60 },
    { range: '0.501 kq - 1 kq', priceUSD: 3.60 },
    { range: '1+ kq+ (qrama-qram)', priceUSD: 3.60 }
  ];

  return (
    <div className={styles.tariffsOnAllProducts}>
      <div className={styles.container}>
        <div className={styles.turkey}>
          <div className={styles.turkeyFlag}>
            <img src={flagTurkey} alt="bayraq" />
            <span>Türkiyə</span>
          </div>
          <h3>Türkiyədən çatdırılma</h3>
        </div>
        <div className={styles.tariffs}>
          <h2><span>BÜTÜN</span> məhsullar üzrə tariflər</h2>
          <p>Bir tərəfinin uzunluğu 1 metrə kimi olan bağlamalar həcmsəl hesablanmır. Həcmsəl çəki = En x Uzunlug x Hündürlük / 6000 <br />
            Bağlamanın həm həcm, həm də fiziki çəkisi hesablanır. Hansı çəki yüksək olarsa, daşınma haqqı ona əsasən hesablanır</p>
          <p>Təhvil məntəqələrinə əlavə ödəniş hesablanmır.</p>
        </div>
        <div className={styles.tariffPrices}>
          <h4>Standart məhsullar üçün tariflər</h4>
          {tariffs.map((tariff, index) => (
            <p key={index}>
              {tariff.range}
              <div className={styles.line}></div>
              {currency === 'USD' ? `${tariff.priceUSD} $` : `${convertToAZN(tariff.priceUSD)} ₼`}
            </p>
          ))}
        </div>
        <div className={styles.tariffPrices}>
          <h4>Maye məhsullar üçün tariflər</h4>
          {tariffs.map((tariff, index) => (
            <p key={index}>
              {tariff.range}
              <div className={styles.line}></div>
              {currency === 'USD' ? `${tariff.priceUSD} $` : `${convertToAZN(tariff.priceUSD)} ₼`}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TarrifsOnAllProducts;
