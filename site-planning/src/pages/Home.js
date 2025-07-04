import { Link } from "react-router-dom";

import style from "./style/home.module.css";

function Home() {
  return (
    <section className={style.section}>
      <h1>
        Bem vindo ao <span>Planning</span>
      </h1>
      <p className={style.p01}>
        Comece a organizar seus projetos aqui e impulsione seus resultados com
        mais eficiência e foco!
      </p>
      <p className={style.p02}>
        Veja seus projetos de forma rápida e prática clicando no botão abaixo!
      </p>
      <Link to="Projetos">
        <input
          className={style.button}
          type="button"
          value="ir para projetos"
        />
      </Link>
    </section>
  );
}

export default Home;
