import React from 'react'
import styles from './InformationAndOurServices.module.scss'
import hevale from '../../image/hevale.svg'
import tecili from '../../image/tecili.svg'
import kuryersifarishet from '../../image/Kuryersifariset.svg'

const InformationAndOurServices = () => {
  return (
    <div className={styles.informationAndOurServices}>
        <div className={styles.container}>
            <div className={styles.information}>
                <h1>Məlumat və xidmətlərimiz</h1>
                <p>“KargoLux” sizə bağlamaların Türkiyədən Azərbaycana surətli daşınması xidmətini təklif edir.</p>
                <p>Bizi seçən müştərilər məhsullarını tez, təhlükəsiz, həmçinin daha az büdcə ilə əldə edə biləcəklər. Sifarişləriniz 3-5 iş günü ərzində evinizə kimi çatdırılır.</p>
            </div>
            <div className={styles.ourServices}>
                <div className={styles.ourServicesText}>
                    <h2>Trendyoldan birbaşa sifariş</h2>
                    <p>Trendyoldan birbaşa sifariş zamanı Kargolux gəl al nöqtələrindən istifadə edə bilərsiniz. Kargolux şirkəti Trendyol ilə partnyordur.</p>
                    <button>Ətraflı</button>
                </div>
                <div className={styles.ourServicesImg}>
                    <img src={hevale} alt="our services" />
                </div>
            </div>
            <div className={styles.ourServices}>
                <div className={styles.ourServicesText}>
                    <h2>Təcili sifariş xidməti</h2>
                    <p>Sifarişlərin növbədən kənar həyata keçirilməsi üçün “Təcili sifariş” xidmətini seçə bilərsiniz. Təcili sifariş 30 dəqiqə ərzində həyata keçirilir</p>
                    <button>Ətraflı</button>
                </div>
                <div className={styles.ourServicesImg}>
                    <img src={tecili} alt="our services" />
                </div>
            </div>
            <div className={styles.ourServices}>
                <div className={styles.ourServicesText}>
                    <h2>Ölkədaxili kuryer xidməti</h2>
                    <p>İndi sifarişlərinizi əldə etmək daha asan oldu. Göstərdiyimiz kuryer xidmətindən istifadə edərək sifarişlərinizi ünvanınıza qədər çatdırırıq</p>
                    <button>Ətraflı</button>
                </div>
                <div className={styles.ourServicesImg}>
                    <img src={kuryersifarishet} alt="our services" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InformationAndOurServices