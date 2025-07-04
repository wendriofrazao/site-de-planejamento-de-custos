import ButtonLink from "./BotaoCriar";
import style from "./style/newProject.module.css";

function NovoProjeto() {
  return (
    <div className={style.box_button}>
      <ButtonLink to="/CriarProjeto" text="Iniciar" />
      <br />
      <p className={style.text}>
        Dê o primeiro passo para tirar sua ideia do papel.
      </p>
    </div>
  );
}

export default NovoProjeto;
