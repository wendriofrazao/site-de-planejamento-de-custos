import style from "./select.module.css";

function SelectOption({ name, text, option, handleOnchange, value }) {
  return (
    <div className={style.control_form}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnchange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {option.map((option) => {
          return (
            <option
              value={option.id}
              key={option.id}
              style={{ color: option?.color }}
            >
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectOption;
