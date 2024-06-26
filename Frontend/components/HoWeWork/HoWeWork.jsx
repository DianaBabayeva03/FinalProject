import React from 'react';
import styles from './HoWeWork.module.scss';
import qeydiyyatImg from '../../image/qeydiyyatillustrasiya.svg';
import sifarishImg from '../../image/sifarisillustrasiya.svg';
import chatdirilmaImg from '../../image/catdirilmaillustrasiya.svg';

const HoWeWork = () => {
  return (
    <div className={styles.howWeWork}>
        <div className={styles.container}>
            <div className={styles.workText}>
                <h2>Biz necə işləyirik?</h2>
                <p>Türkiyədən məhsul sifariş etdikdən bir müddət sonra saytımızda qeyd etdiyiniz mobil nömrənizə bağlamanızın Türkiyə ofisimizə çatdığı haqda məlumat daxil oldur. Sonra siz “Smart Customs” tədbiqinə daxil olaraq bağlamanız haqqında məlumatları doldurursunuz.</p>
                <p>Türkiyə ofisimizə gələn bağlamanızda faktura olmadığı təqdirdə siz hesabınıza daxil olaraq bağlamanın fakturasını əlavə edirsiniz. Sonra isə “Smart Customs” tədbiqində bəyan edirsiniz.</p>
            </div>
            <div className={styles.qeydiyyat}>
                <div className={styles.qeydiyyatText}>
                    <span>01.</span>
                    <h3>Qeydiyyat</h3>
                    <p>Qeydiyyatdan keçin və Kargolux ünvanınızı əldə edin. Bu, Sizin Türkiyə ünvanınız olacaq.</p>
                </div>
                <div className={styles.qeydiyyatImg}>
                    <img src={qeydiyyatImg} alt="qeydiyyat" />
                </div>
            </div>
            <div className={styles.sifarish}>
                <div className={styles.qeydiyyatImg}>
                    <img src={sifarishImg} alt="sifarish" />
                </div>
                <div className={styles.qeydiyyatText}>
                    <span>02.</span>
                    <h3>Sifariş</h3>
                    <p>Türkiyədəki istənilən online alış-veriş saytından sifarişlərinizi Türkiyə ünvanımıza göndərin.</p>
                </div>
            </div>
            <div className={styles.chatdirilma}>
                <div className={styles.qeydiyyatText}>
                    <span>03.</span>
                    <h3>Çatdırılma</h3>
                    <p>Qeydiyyatdan keçib sifariş etdiyiniz məhsullar 3 iş günündə ünvanınıza kimi çatdırılır.</p>
                </div>
                <div className={styles.qeydiyyatImg}>
                    <img src={chatdirilmaImg} alt="chatdirilma" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HoWeWork