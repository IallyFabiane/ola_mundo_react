import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./paginas/PaginaPadrao";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from "../src/paginas/Inicio";
import SobreMim from "../src/paginas/SobreMim";
import Post from "./paginas/Post";
import NaoEncontrado from "./paginas/NaoEncontrado";
import ScrollToTop from "./componentes/ScrollToTop";

console.log(window.location);

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>
        <Route path="posts/:id/*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrado />}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
