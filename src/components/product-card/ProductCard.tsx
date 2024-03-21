import styles from "./product-card.module.css";
import { FC } from "react";

interface IProductCard {
  name: string;
  price: number;
  category: string;
  descriptionShort: string;
  descriptionLong: string;
  img: string;
  id: number;
}

export const ProductCard: FC<IProductCard> = ({
  name,
  price,
  category,
  descriptionShort,
  descriptionLong,
  img,
  id,
}) => {
  return (
    <div key={id} className={styles.productCard}>
      <div className={styles.imgStyle}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <div className={styles.headerCard}>
        {name}/{price}/{category}
      </div>
      <p className={styles.description}>{descriptionShort}</p>
      <p className={styles.description}>{descriptionLong}</p>
      <button className={styles.button}>купить</button>
    </div>
  );
};
