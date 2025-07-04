import style from "../project/Messages.module.css";

import { useState, useEffect } from "react";

function PostMenssages({ type, menssage }) {
  const [menssages, setMenssages] = useState(false);

  useEffect(() => {
    if (!menssage) {
      setMenssages(false);
      return;
    }
    setTimeout(() => {
      setMenssages(true);
    }, 800);

    const timer = setTimeout(() => {
      setMenssages(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [menssage]);

  return (
    <>
      {menssages && (
        <div className={`${style.msg}  ${style[type]}`}>{menssage}</div>
      )}
    </>
  );
}

export default PostMenssages;
