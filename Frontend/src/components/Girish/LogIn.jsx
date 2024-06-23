import React from 'react'
import styles from './LogIn.module.scss'

const LogIn = () => {
  return (
    <div className={styles.logIn}>
        <div className={styles.container}>
          <form action="#" className={styles.small_form}>
            <div className={styles.head}>
              <h2>Şəxsi kabinetə giriş</h2>
              <p>
                KargoLux-a xoş gəlmisiniz. E-mail və şifrənizi doğru yazdığınızdan əmin olun
              </p>
            </div>
            <div className={styles.input}>
              <input type="email" placeholder="E-mail" />
              <span class="error_message"></span>
            </div>
            <div className={styles.input}>
              <input type="password" placeholder="Şifrə" />
              <span class="error_message"></span>
            </div>
            <div className={styles.forgetAndRemember}>
              <label>
                
                <input type="checkbox" checked="checked" />
                {/* <span class="checkmark"></span> */}
                Yadda saxla
              </label>
              <a href="" className={styles.forgetBtn}>Şifrəmi unutdum</a>
            </div>
            <div className={styles.authlinks}>
              <a href="">Qeydiyyatdan keç</a>
              <button  type="submit">Daxil ol</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default LogIn