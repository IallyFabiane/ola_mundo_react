import { useParams, Routes, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from '../../json/posts.json';
import PostModelo from "../../componentes/PostModelo";
import './Post.css';
import NaoEncontrado from "../NaoEncontrado";
import PaginaPadrao from "../PaginaPadrao";
import styles from './Post.module.css';
import PostCard from "../../componentes/PostCard";

export default function Post () {

    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id))
    
    if (!post) {
        return <NaoEncontrado />
    }
    
    const postsRecomendados = posts
    .filter((post) => (post.id !== Number(parametros.id)))
    .sort((a, b) => b.id - a.id)
    .slice(0 , 4)

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index  element={
                    <PostModelo fotoCapa={`/posts/${post.id}/capa.png`} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>{post.texto}</ReactMarkdown> 
                        </div>

                        <h2 className={styles.titulosOutrosPosts}>Outros posts que você pode gostar:</h2>
                        <ul className={styles.postsRecomendados}>{postsRecomendados.map((post) => {
                            return (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                            )
                        })}</ul>
                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}