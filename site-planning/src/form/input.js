import style from "./input.module.css";

function Input({ type, text, name, placeholder, handleOnchange, value }) {
  return (
    <div className={style.control_form}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnchange}
        value={value}
        maxLength="35"
        required
      />
    </div>
  );
}

export default Input;
