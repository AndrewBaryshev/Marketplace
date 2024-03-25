import styles from "./style.module.css";

export const BtnPlus = ({ action }) => {
  return (
    <div onClick={action} className={styles.container}>
      <div className={styles.plus}></div>
    </div>
  );
};
