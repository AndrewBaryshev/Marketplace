import styles from "./style.module.css";

export const BtnAction = ({ children, action }) => {
  return (
    <button onClick={action} className={styles.button}>
      {children}
    </button>
  );
};
