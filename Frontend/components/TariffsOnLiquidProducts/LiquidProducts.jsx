import React from 'react';
import styles from './LiquidProducts.module.scss';
import tarif1 from '../../image/tariff1.svg';
import tarif2 from '../../image/tariff2.svg';
import { FaEquals } from "react-icons/fa";

const LiquidProducts = () => {
  return (
    <div className={styles.liquidProducts}>
        <div className={styles.container}>
            <div className={styles.tariffs}>
                <h1>Tariflər</h1>
                <div className={styles.tariffsCards}>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif1} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.0 kq - 0.100 kq</p>
                            <h2>1.53 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif1} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.101 kq-0.250 kq</p>
                            <h2>2.72 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif1} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.251 kq - 0.500 kq</p>
                            <h2>4.42 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif1} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.501 kq - 1 kq</p>
                            <h2>6.12 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif1} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>1+ kq (hər kq üçün)</p>
                            <h2>6.12 AZN</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.liquidProductsText}>
                    <h3>Maye məhsulları</h3>
                    <div className={styles.equal}>
                        <FaEquals />
                    </div>
                    <div className={styles.equal}>
                        <FaEquals />
                    </div>
                    <div className={styles.equal}>
                        <FaEquals />
                    </div>
                    <div className={styles.equal}>
                        <FaEquals />
                    </div>
                </div>
                <div className={styles.tariffsCards}>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif2} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.0 kq - 0.100 kq</p>
                            <h2>1.53 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif2} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.101 kq-0.250 kq</p>
                            <h2>2.72 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif2} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.251 kq - 0.500 kq</p>
                            <h2>4.42 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif2} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>0.501 kq - 1 kq</p>
                            <h2>6.12 AZN</h2>
                        </div>
                    </div>
                    <div className={styles.tariffsCard}>
                        <div className={styles.cardImg}>
                            <img src={tarif2} alt="tarif" />
                        </div>
                        <div className={styles.cardText}>
                            <span>Çəki</span>
                            <p>1+ kq (hər kq üçün)</p>
                            <h2>6.12 AZN</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.butunMehsullar}>
                <h1><span>BÜTÜN</span> məhsullar üzrə tariflər</h1>
                <p>Bir tərəfinin uzunluğu 1 metrə kimi olan bağlamalar həcmsəl hesablanmır. Həcmsəl çəki = En x Uzunlug x Hündürlük / 6000 <br />
                Bağlamanın həm həcm, həm də fiziki çəkisi hesablanır. Hansı çəki yüksək olarsa, daşınma haqqı ona əsasən hesablanır <br />
                Təhvil məntəqələrinə əlavə ödəniş hesablanmır.</p>
            </div>
        </div>
    </div>
  )
}

export default LiquidProducts