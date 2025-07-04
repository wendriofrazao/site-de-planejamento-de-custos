import { useLocation } from "react-router-dom";

import GetProject from "./GetProjects";
import PostMenssages from "../project/Menssages";

import style from "./style/Projetos.module.css";

import ButtonLink from "./BotaoCriar";

// import { useState } from "react";

function Projeto() {
  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div>
      <nav className={style.tema}>
        <h1>Projetos criados</h1>

        <ButtonLink text="Criar Projeto" to="/CriarProjeto" />
      </nav>

      {message && <PostMenssages type="success" menssage={message} />}
      {!message && <PostMenssages type="error" menssage={message} />}
      <GetProject />
    </div>
  );
}

export default Projeto;
