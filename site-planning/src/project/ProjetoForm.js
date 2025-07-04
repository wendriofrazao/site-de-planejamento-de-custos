import style from "./formProject.module.css";

import { useEffect, useState } from "react";

import Input from "../form/input";
import SelectOption from "../form/Select";
import ButtonSubmit from "../form/Button";

function Formulario({ handleSubmit, btnText, projectData }) {
  const [categorie, setCategorie] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:3000/categores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategorie(data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
  };

  function handlechange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategorie(e) {
    const selectedCategory = categorie.find((cat) => cat.id === e.target.value);
    setProject({
      ...project,
      category: selectedCategory || null,
    });
  }

  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Digite o nome do seu projeto"
        handleOnchange={handlechange}
      />
      <Input
        type="number"
        text="Orçamento total"
        name="valor"
        placeholder="Digite o orçamento total"
        handleOnchange={handlechange}
      />
      <SelectOption
        name="categoria_id"
        text="Escolha uma categoria"
        option={categorie}
        handleOnchange={handleCategorie}
        value={project.category ? project.category.id : ""}
      />
      <ButtonSubmit text={btnText} />
    </form>
  );
}

export default Formulario;
