import style from "../../project/formProject.module.css";
import Input from "../../form/input";
import ButtonSubmit from "../../form/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ServiceForm({ handleOnSubmit, dataProjet }) {
  const [service, setService] = useState({
    id: uuidv4(),
    name: "",
    cost: "",
    description: "",
  });

  const handleOnChange = (event) => {
    setService({ ...service, [event.target.name]: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();

    if (!service.name || !service.cost || !service.description) {
      alert("Preencha todos os campos antes de adicionar um serviço.");
      return;
    }

    handleOnSubmit(service);
  };

  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        type="text"
        text="Nome do serviço"
        id="addService"
        name="name"
        placeholder="Adicione um nome ao serviço"
        handleOnchange={handleOnChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        id="addCusto"
        name="cost"
        placeholder="Adicione o custo do serviço"
        handleOnchange={handleOnChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        id="descricao"
        name="description"
        placeholder="Digite a descrição do serviço"
        handleOnchange={handleOnChange}
      />
      <ButtonSubmit text="Adicionar" />
    </form>
  );
}

export default ServiceForm;
