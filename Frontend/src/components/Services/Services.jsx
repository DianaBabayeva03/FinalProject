import React from 'react';
import styles from './Services.module.scss'

const Services = () => {
  return (
    <div className={styles.servicesBox}>
        <div className={styles.container}>
            <div className={styles.servicesText}>
                <h1>Xidmətlər</h1>
            </div>
            <div className={styles.servicesCards}>
                <div className={styles.servicesCard}>
                    <div className={styles.cardImg}>
                        <img src="https://kargolux.az/storage/services/2.svg" alt="turkiyeden chatdirilma xidmeti" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>Türkiyədən Çatdırılma” xidməti</h2>
                        <p>KargoLux Türkiyənin alış-veriş saytlarından online sifariş olunan malların, poçt bağlamalarının Türkiyədən çatdırılmasını həyata keçirir. Türkiyədəki depomuza daxil olan bağlamalar 3-5 gün ərzində müştərilərə çatdırılır. (Bizdən asılı olmayan səbəblərə görə gecikmələr ola bilir. Gecikmələr olduqda yalnız bizdə deyil, bütün daşıyıcı şirkətlərdədə baş verir) Sifarişçinin sifariş etdiyi məhsullar Türkiyə anbarına çatdığı zaman məhsul açılmadan, qutusu ilə birlikdə olduğu kimi daşınması həyata keçirdilir. Diqqət: Qadağan olunan məhsulların daşınması həyata keçirilmir! Türkiyədən ilk sifariş 0.90$ kampaniyası davam edir. Nəzərinizə çatdırmaq istərdik ki, 1kq 0.90$ kampaniyası 30.09.2022-ci ildə bitəcəkdir. Hazırda 0.90$ kampaniyası bitmişdir.</p>
                    </div>
                </div>
                <div className={styles.servicesCard}>
                    <div className={styles.cardImg}>
                        <img src="https://kargolux.az/storage/services/9.svg" alt="biz alaq xidmeti" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>“Biz Alaq” xidməti</h2>
                        <p>Türkiyənin online alış-veriş səhifələrindən hər hansı bir malın alınması zamanı çətinlik çəkirsinizsə bununla bağlı bizə müraciət edə bilərsiniz. Biz bu xidmətlə müştərilərimizin bizə vermiş olduğu ixtiyara əsasən həmin məhsulu müştərin adına alıb Türkiyədən Azərbaycana çatdırılmasını təşkil edirik. *Qeyd edək ki, “Biz Alaq” xidmətini seçdiyiniz zaman 5% xidmət haqqı hesablanır ki, bu da Türkiyədən online aliş-veris zamanı yaranan bank xərci, pulun nəğdləşdirilməsi və xidmət haqqı olaraq çıxılmış sayılır.</p>
                    </div>
                </div>
                <div className={styles.servicesCard}>
                    <div className={styles.cardImg}>
                        <img src="https://kargolux.az/storage/services/15.svg" alt="tecili sifarish xidmeti" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>“Təcili sifariş” xidməti</h2>
                        <p>Sifarişçilər Türkiyə saytlarından alış-veriş etmək üçün bizə müraciət edərək "Biz alaq" xidmətindən istifadə edir. Bunun üçün də göndərilən linklərin sifariş olunması növbə ilə həyata keçirilir. Sifarişlərin növbədən kənar həyata keçirilməsi üçün “Təcili sifariş” xidmətini seçə bilərsiniz. Bu ödəniş göndərilən hər link (sadəcə eyni mağazadırsa) üçün ayrı-ayrılıqda yox, toplam 1 dəfə hesablanır. Əgər linklər ayrı ayrı mağazalardısa hər mağaza üçün ayrı hesablanacaqdır. *Qeyd edək ki, “Təcili sifariş” xidməti seçdiyiniz zaman 1$ (bir dollar) xidmət haqqı ödəməlisiniz.</p>
                    </div>
                </div>
                <div className={styles.servicesCard}>
                    <div className={styles.cardImg}>
                        <img src="https://kargolux.az/storage/services/16.svg" alt="kuryer xidmeti" />
                    </div>
                    <div className={styles.cardText}>
                        <h2>“Kuryer” xidməti</h2>
                        <p>Bizim şirkət həmçinin Bakı anbarına daxil olmuş bağlamanızın istənilən ünvana çatdırılmasını da həyata keçirir. Bununla da siz vaxtınıza qənaət etmiş olursunuz. Qiymətlərlə bağlı tariflər bölməsində məlumat əldə edə bilərsiniz.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services