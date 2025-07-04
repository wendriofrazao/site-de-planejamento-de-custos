import style from "./Button.module.css";

function ButtonSubmit({ text }) {
  return (
    <div>
      <button className={style.btn}>{text}</button>
    </div>
  );
}

export default ButtonSubmit;
