import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./paginas/PaginaPadrao";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from "../src/paginas/Inicio";
import SobreMim from "../src/paginas/SobreMim";

console.log(window.location);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>
        <Route path="*" element={<div>Bad Request: Página não encontrada</div>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
