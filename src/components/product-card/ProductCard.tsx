import styles from "./product-card.module.css";
import CartProducts from "../../store/cartProducts.ts";
import { FC } from "react";
import { BtnAction } from "../../ui/index.ts";
import { IProductCard } from "./type";

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
      <BtnAction action={() => CartProducts.pushData({ name, price, id })}>
        купить
      </BtnAction>
    </div>
  );
};
