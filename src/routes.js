import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

console.log(window.location);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />}/>
        <Route path="*" element={<div>Bad Request: Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
