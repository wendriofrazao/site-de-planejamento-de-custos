import { useNavigate } from "react-router-dom";

import style from "./style/newProject.module.css";
import Formulario from "../project/ProjetoForm";

function CreateProject() {
  const myNavigate = useNavigate();

  function createMyPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:3000/projets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        myNavigate("/Projetos", {
          state: { message: "Projeto criado com sucesso!" },
        });
        console.log(data);
      })
      .catch((error) => {
        myNavigate("/Projetos", {
          state: { message: "Erro ao criar um projeto!" },
        });
        console.log(`Ocorreu algum erro ao inicializar o POST ${error}`);
      });
  }

  return (
    <div className={style.create_project}>
      <h1>Criação do projeto</h1>
      <p className={style.p_text}>
        Crie primeiro o projeto para depois adicionar os serviços
      </p>
      <p className={style.p_form}>formulário</p>
      <Formulario handleSubmit={createMyPost} btnText="Criar projeto" />
    </div>
  );
}

export default CreateProject;
