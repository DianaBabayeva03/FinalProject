import React from 'react';
import styles from './Register.module.scss'

const Register = () => {
  return (
    <div className={styles.registerBox}>
        <div className={styles.container}>
            <h1>Qeydiyyat</h1>
            <div className={styles.registerInpBox}>
                <input type="text" className={styles.ad} />
                <input type="text" className={styles.soyad} />
                <input type="date" className={styles.dogumtarixi} />
                <select name="" id="">
                    <option value="">Kishi</option>
                    <option value="">Qadin</option>
                </select>
                <input type="email" className={styles.ad} />
                <div className={styles.phone}>
                    <input type="number" className={styles.ad} />
                </div>
                <input type="password" className={styles.ad} />
                <input type="password" className={styles.ad} />
                {/* <div className={styles.vesiqenomresi}>
                    <select name="" id="">
                        <option value="">AZE</option>
                        <option value="">AA</option>
                        <option value="">MYI</option>
                        <option value="">DYI</option>
                    </select>
                    <input type="text" className={styles.ad} />
                </div> */}
                <input type="text" className={styles.unvan} />
                <div className={styles.selectBox}>
                    <select name="" id="">
                        <option value="">Filial</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                        <option value="">Qusar OBA Aliexpress filiali</option>
                    </select>
                    <p><span>*</span> Siz məhsulunuzu seçdiyiniz filialdan təhvil alacaqsınız</p>
                </div>
            </div>
            <div className={styles.satishSozleshmesi}>
               <div className={styles.checkBox}>
                    <input type="checkbox" /> <p>Məsafəli <span>satış sözləşməsini</span> qəbul edirəm.</p>
               </div>
               <div className={styles.gonder}>
                    <button>Girish et</button>
                    <button>Qeydiyyatdan kech</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Register