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
      <img className={styles.imgStyle} src={img} alt="" />
      <div>
        {name}/{price}/{category}
      </div>
      <p>{descriptionShort}</p>
      <p>{descriptionLong}</p>
      <button>купить</button>
    </div>
  );
};
