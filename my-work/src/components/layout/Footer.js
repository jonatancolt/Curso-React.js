import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
    <footer className={styles.back}>
        <ul className={styles.social_list}>
            <li>  <FaFacebook/></li>
            <li>  <FaInstagram/></li>
            <li>  <FaLinkedin/></li>
        </ul>
        <p>nosso rodape</p>
    </footer>
    )
}
export default Footer