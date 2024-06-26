import React from 'react'
import styles from './AddFaktura.module.scss'
import { MdPlayArrow } from "react-icons/md";


const AddFaktura = () => {
  return (
    <div className={styles.addFaktura}>
        <div className={styles.container}>
            <div className={styles.addFakturaText}>
                <button><MdPlayArrow /></button>
                <p>Faktura əlavə et</p>
            </div>
            <div className={styles.addFakturaBtns}>
                <button className={styles.faktura}>Faktura əlavə et</button>
                <button className={styles.sifarish}>Sifariş et</button>
            </div>
        </div>
    </div>
  )
}

export default AddFaktura