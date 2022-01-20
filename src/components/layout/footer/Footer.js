import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://facebook.com/darcisio.almeida" target="_new"><FaFacebook /></a> 
        </li>
        <li>
          <a href="https://instagram.com/darcisioalmeida" target="_new"> <FaInstagram /></a>
        </li>
        <li>
          <a href="https://linkedin.com/in/darcisioalmeida" target="_new"><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/DarcisioAlmeida" target="_new"><FaGithub /></a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Bitcosts</span> &copy; 2022 | Todos os direitos reservados
      </p>
      <p>Darcisio Almeida - DEV</p>
    </footer>
  )
}

export default Footer