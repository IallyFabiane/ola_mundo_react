import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css';
import fotoSobreMim from '../../assets/sobremim.png'

export default function SobreMim () {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou Ially</h3>
            <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="foto sobre mim" />
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className={styles.paragrafo}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className={styles.paragrafo}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
            <p className={styles.paragrafo}>Morbi tristique senectus et netus. Quis blandit turpis cursus in hac habitasse platea. Amet nisl purus in mollis nunc sed id semper. </p>
        </PostModelo>
    )
}