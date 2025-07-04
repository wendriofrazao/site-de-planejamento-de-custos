import { Link } from "react-router-dom";

import Conteiner from "./conteiner";
import style from "./navbar.module.css";
import Logo from "../assets/img/coin.png";

function NavBar() {
  return (
    <nav class={style.navigate}>
      <Conteiner>
        <Link to="/">
          <img
            src={Logo}
            alt="planning"
            style={{ width: "110px", height: "110px" }}
          />
        </Link>

        <ul className={style.list}>
          <li>
            <Link className={style.itens} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={style.itens} to="/NovoProjeto">
              Novo projeto
            </Link>
          </li>
          <li>
            <Link className={style.itens} to="/Projetos">
              Projetos
            </Link>
          </li>
          <li>
            <Link className={style.itens} to="/Contato">
              Contatos
            </Link>
          </li>
        </ul>
      </Conteiner>
    </nav>
  );
}

export default NavBar;
