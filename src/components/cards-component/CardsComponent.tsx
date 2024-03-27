import { useEffect, useState } from "react";
import { ProductCard } from "../product-card/ProductCard";
import styles from "./cards-component.module.css";
import { Circles } from "react-loader-spinner";
import { IDataFetch } from "./type";

export const CardsComponent = () => {
  const [data, setData] = useState([]);

  async function getData(url: string) {
    try {
      const promise = await fetch(url);
      const res = await promise.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(
      "https://bh018dd7r3.execute-api.us-west-2.amazonaws.com/api/shop/products"
    );
  }, []);

  return (
    <div className={styles.cards}>
      {data.length ? (
        data.map((elem: IDataFetch) => (
          <ProductCard
            key={elem.id}
            id={elem.id}
            name={elem.name}
            price={elem.price}
            category={elem.category.name}
            descriptionLong={elem.long_description}
            descriptionShort={elem.short_description}
            img={elem.get_image}
          />
        ))
      ) : (
        <Circles
          height="140"
          width="140"
          color="#E8E4F2"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </div>
  );
};
