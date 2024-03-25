import styles from "./style.module.css";

export const BtnMinus = ({ action }) => {
  return (
    <div onClick={action} className={styles.container}>
      <div className={styles.minus}></div>
    </div>
  );
};
