import Style from "../editions/Editation.module.css";
import { ImBin } from "react-icons/im";

function ServiceShow({ id, name, cost, description, handleRemove }) {
  const remove = (event) => {
    event.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <div className={Style.showMyService}>
      <h2>
        <span>Nome do serviço:</span> {name || "Sem nome"}
      </h2>
      <p className={Style.costTotal}>
        Custo: <span>R$ {cost ? parseFloat(cost).toFixed(2) : "0.00"}</span>
      </p>
      <p className={Style.descriptionService}>
        Descrição: <span>{description || "Nenhuma descrição disponível"}</span>
      </p>
      <span className={Style.positionSpan}>
        <button onClick={remove} className={Style.btnRemoveServe}>
          Excluir <ImBin />
        </button>
      </span>
    </div>
  );
}

export default ServiceShow;
