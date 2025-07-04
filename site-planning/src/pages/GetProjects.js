import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./style/Projetos.module.css";
import { GrEdit } from "react-icons/gr";
import { ImBin } from "react-icons/im";

function GetProject() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar os projetos!");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  function removeProjects(id) {
    fetch(`http://localhost:3000/projets/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao remover o projeto");
        }
        return res.json();
      })
      .then(() => {
        setProjects((project_remove) =>
          project_remove.filter((project_remove) => project_remove.id !== id)
        );
      })
      .catch((error) => console.log(error));
  }

  if (loading) {
    return (
      <div className={style.loading}>
        <div className={style.loading_base}>
          <div className={style.rotate_loading}></div>
        </div>
      </div>
    );
  }

  if (error) return <p>Erro: {error}</p>;

  return (
    <div className={style.box_projects}>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h1>{project.name}</h1>
            <p>
              Orçamento: <span>R$ {project.valor}</span>
            </p>
            <p>
              Categoria:{" "}
              <span style={{ color: project.category?.color }}>
                {project.category?.name || "Não selecionado"}
              </span>
            </p>

            <Link to={`/EditsProjects/${project.id}`}>
              <button className={style.edit}>
                <GrEdit />
              </button>
            </Link>

            <button
              onClick={() => removeProjects(project.id)}
              className={style.remove}
            >
              <ImBin />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetProject;
