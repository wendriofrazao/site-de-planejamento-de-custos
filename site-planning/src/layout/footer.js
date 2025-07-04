import style from "./navbar.module.css";
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={style.footerNav}>
      <ul className={style.socia_list}>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <p className={style.copy}>
        Copyright &copy; 2025 <span>Planning</span>
      </p>
      <div>
        <label for="idiomas">Idioma: </label>
        <select className={style.idioma} id="idiomas" name="fruits">
          <option value="portugues">Português</option>
          <option value="ingles">Inglês</option>
          <option value="espanhol">Espanhol</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
