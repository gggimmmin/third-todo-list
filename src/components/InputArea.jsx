import React from "react";
import styles from "./InputArea.module.css";

export const InputArea = () => {
  return (
    <form className={styles.form}>
      <input />
      <input />
      <button>작성</button>
    </form>
  );
};
