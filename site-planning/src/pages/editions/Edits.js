import style from "../style/Projetos.module.css";
import Style from "../editions/Editation.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Formulario from "../../project/ProjetoForm";
import ServiceForm from "./ServiceForm";
import ServiceShow from "./ServiceShow";

function EditsProjects() {
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [errorProject, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showService, setShowService] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/projets/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar o projeto");
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setServices(data.services || []);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className={style.loading}>
        <div className={style.loading_base}>
          <div className={style.rotate_loading}></div>
        </div>
      </div>
    );
  }

  if (errorProject) return <p>Erro: {errorProject}</p>;

  function editationPost(updatedProject) {
    fetch(`http://localhost:3000/projets/${updatedProject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setShowForm(false);
      })
      .catch((error) => console.error(`Erro ao atualizar o projeto: ${error}`));
  }

  function createService(service) {
    if (!service) {
      alert("Nenhum serviço encontrado!");
      return false;
    }

    if (!project) {
      alert("Projeto não carregado!");
      return false;
    }

    service.id = uuidv4();

    const lastCost = service?.cost ? parseFloat(service.cost) : 0;

    const projectBudget = project?.valor ? parseFloat(project.valor) : 0;
    const costNew = parseFloat(project?.cost || 0) + lastCost;

    if (costNew > projectBudget) {
      alert("O custo total não pode ultrapassar o orçamento!");
      return;
    }

    const updatedProject = {
      ...project,
      services: [...(project?.services || []), service],
      cost: costNew, // lastCost agora está incluído corretamente
    };

    fetch(`http://localhost:3000/projets/${updatedProject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(`Erro ao atualizar projeto: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setServices(data.services || []);
      })
      .catch((error) => console.error(`Ocorreu um erro: ${error.message}`));
  }

  function removeService(serviceId, cost) {
    if (!project || !project.services) {
      alert("Projeto não carregado ou sem serviços!");
      return;
    }

    const updatedServices = project.services.filter(
      (service) => service.id !== serviceId
    );
    const updatedCost = parseFloat(project.cost || 0) - parseFloat(cost || 0);
    const updatedProject = {
      ...project,
      services: updatedServices,
      cost: updatedCost,
    };

    fetch(`http://localhost:3000/projets/${updatedProject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao remover um serviço");
        }
        return res.json();
      })
      .then(() => {
        setProject(updatedProject);
        setServices(updatedServices);
      })
      .catch((error) => console.error(`Erro ao remover serviço: ${error}`));
  }

  return (
    <div className={Style.project_edit}>
      <div className={Style.conteiner}>
        <h1>
          <span>Projeto:</span> {project.name}
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className={Style.buttonEdit}
          style={{
            background: showForm ? "rgb(189, 82, 82)" : "rgb(40, 41, 43)",
          }}
        >
          {showForm ? "Fechar" : "Editar projeto"}
        </button>

        {!showForm ? (
          <div>
            <p>
              Orçamento:{" "}
              <span style={{ color: "green" }}>R$ {project.valor}</span>
            </p>
            <p>
              Categoria:{" "}
              <span style={{ color: project.category?.color }}>
                {project.category?.name || "Não selecionado"}
              </span>
            </p>
            <p>
              Custos: <span style={{ color: "red" }}>R$ {project.cost}</span>
            </p>
          </div>
        ) : (
          <div className={Style.formEdit}>
            <Formulario
              handleSubmit={editationPost}
              btnText="Atualizar"
              projectData={project}
            />
          </div>
        )}

        <div className={Style.ConteinerService}>
          <div className={Style.service}>
            <h2>Adicione um serviço</h2>
            <button
              onClick={() => setShowService(!showService)}
              className={Style.buttonService}
              style={{
                background: showService
                  ? "rgb(40, 41, 43)"
                  : "rgb(189, 82, 82)",
              }}
            >
              {showService ? "Adicionar" : "Fechar"}
            </button>
          </div>

          {!showService && (
            <div className={Style.MyForms}>
              <ServiceForm handleOnSubmit={createService} />
            </div>
          )}

          {services.length > 0 ? (
            services.map((service) => (
              <ServiceShow
                key={service.id}
                name={service.name}
                id={service.id}
                cost={service.cost}
                handleRemove={removeService}
                description={service.description}
              />
            ))
          ) : (
            <p>Nenhum serviço adicionado</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditsProjects;
