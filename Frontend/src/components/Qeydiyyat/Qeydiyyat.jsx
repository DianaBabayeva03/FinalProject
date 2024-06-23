import React from 'react'
import styles from './Qeydiyyat.module.scss'

const Qeydiyyat = () => {
  return (
    <div className={styles.authBlock}>
        <div className={styles.container}>
          <form action="#" className={styles.bigForm}>
            <div className={styles.head}>
              <h2 className="title">Qeydiyyat</h2>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Ad" />
              <span className="error_message"></span>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Soyad" />
              <span className="error_message"></span>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Doğum tarixi" id="datepicker" />
              <span className="error_message"></span>
            </div>
            <div className={styles.input}>
              <select>
                <option value="#" hidden>Cins</option>
                <option value="#">Kişi</option>
                <option value="#">Qadın</option>
              </select>
              <span className="error_message"></span>
            </div>
            <div className={styles.input}>
              <input type="email" placeholder="E-mail" />
              <span className="error_message"></span>
            </div>
            <div className={styles.phoneInput}>
              <span className="code">+994</span>
              <input type="number" placeholder="Mobil nömrə" />
              <span className="error_message"></span>
            </div>
            <div className={styles.input}>
              <input type="password" placeholder="Şifrə" />
              <span className="error_message"></span>
            </div>
            <div className={styles.input}>
              <input type="password" placeholder="Təkrar şifrə" />
              <span className="error_message"></span>
            </div>
            <div className={styles.inputWithInfo}>
              <div className={styles.inputRow}>
                <div className={styles.input}>
                  <select>
                    <option value="#">AZE</option>
                    <option value="#">AA</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Şəxsiyyət vəsiqəsinin seriya nömrəsi"
                  />
                </div>
                {/* <div className="info popover_wrapper top_popover">
                  <img className="mark" src="/assets/images/icons/_.svg" alt="#" />
                  <div className="popover_content">
                    <div className="register_info_imgs">
                      <img src="/assets/images/img/passNewSeria.png" alt="#" />
                      <img src="/assets/images/img/passOldSeria.png" alt="#" />
                    </div>
                  </div>
                </div> */}
              </div>
              <span className="error_message"></span>
            </div>
            <div className="input_with_info">
              <div className="input_row">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Şəxsiyyət vəsiqəsinin fin kodu"
                  />
                </div>
                {/* <div className="info popover_wrapper top_popover">
                  <img className="mark" src="/assets/images/icons/_.svg" alt="#" />
                  <div className="popover_content">
                    <div className="register_info_imgs">
                      <img src="/assets/images/img/passNewFin.png" alt="#" />
                      <img src="/assets/images/img/passOldFin.png" alt="#" />
                    </div>
                  </div>
                </div> */}
              </div>
              <span className="error_message"></span>
            </div>
            <div className="input adress_input">
              <input type="text" placeholder="Ünvan" />
              <span className="error_message"></span>
            </div>
            <div className="input branch_select">
              <select>
                <option value="#" hidden>Cins</option>
                <option value="#">Kişi</option>
                <option value="#">Qadın</option>
              </select>
              <span className="error_message"
                ><span className="red_star">*</span> Siz məhsulunuzu seçdiyiniz
                filialdan təhvil alacaqsınız</span
              >
            </div>
            <div className="sales_contract">
              <label className="checkbox_label">
                Məsafəli
                <a href="#" className="orange_color">satış sözləşməsini</a> qəbul
                edirəm.
                <input type="checkbox" checked="checked" />
                <span className={styles.checkmark}></span>
              </label>
              <div className={styles.loginRegister}>
                <a href="" className={styles.btnLogin}>Giriş et</a>
                <button type="submit" className={styles.btnRegister}>
                  Qeydiyyatdan keç
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Qeydiyyat