import { Link } from "react-router-dom";
import style from "./style/newProject.module.css";

function ButtonLink({ to, text }) {
  return (
    <Link className={style.btn} to={to}>
      {text}
    </Link>
  );
}

export default ButtonLink;
