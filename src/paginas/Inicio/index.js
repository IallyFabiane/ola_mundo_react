import styles from './Inicio.modules.css';
import posts from '../../json/posts.json';
import Post from '../../componentes/Post';

export default function Inicio () {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => 
                    (
                        <li key={post.id}>
                           <Post post={post}/>
                        </li>
                    )
                )}
            </ul>
        </main>
    )
}