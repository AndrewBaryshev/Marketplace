import { useEffect, useState } from "react";
import { ProductCard } from "../product-card/ProductCard";
import styles from "./cards-component.module.css";

export const CardsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://bh018dd7r3.execute-api.us-west-2.amazonaws.com/api/shop/products"
    )
      .then((data) => data.json())
      .then((res) => setData(res));
    console.log("here");
  }, []);

  return (
    <div className={styles.cards}>
      {data.map((elem: any) => (
        <ProductCard
          id={elem.id}
          name={elem.name}
          price={elem.price}
          category={elem.category.name}
          descriptionLong={elem.long_description}
          descriptionShort={elem.short_description}
          img={elem.get_image}
        />
      ))}
    </div>
  );
};
