import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export default function PostCard ({post}) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`../../posts/${post.id}/capa.png`} alt="capa"/>
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
    )
}