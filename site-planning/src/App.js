import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import NovoProjeto from "./pages/NovoProjeto";
import CriarProjeto from "./pages/CriarProjeto";
import EditsProjects from "./pages/editions/Edits";

import Conteiner from "./layout/conteiner";
import NavBar from "./layout/navbar";
import Footer from "./layout/footer";

function App() {
  return (
    <Router>
      <NavBar />

      <Conteiner classCuston="min-heigth">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/NovoProjeto" element={<NovoProjeto />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/CriarProjeto" element={<CriarProjeto />} />
          <Route path="/EditsProjects/:id" element={<EditsProjects />} />
        </Routes>
      </Conteiner>

      <Footer />
    </Router>
  );
}

export default App;
