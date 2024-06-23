import React from 'react';
import styles from './FollowWe.module.scss';
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl';
import { SiWhatsapp } from 'react-icons/si';
import { PiTelegramLogoDuotone } from 'react-icons/pi';

const FollowWe = () => {
  return (
    <div className={styles.followWe}>
        <div className={styles.container}>
            <div className={styles.icons}>
                <button><SlSocialFacebook /></button>
                <button><SlSocialInstagram /></button>
                <button><SiWhatsapp /></button>
                <button><PiTelegramLogoDuotone /></button>
                <button><SlSocialYoutube /></button>
                <p>Bizi sosial şəbəkələrdə izləyin</p>
            </div>
        </div>
    </div>
  )
}

export default FollowWe