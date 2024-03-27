import { observer } from "mobx-react-lite";
import CartProducts from "../../store/cartProducts.ts";
import styles from "./style.module.css";
import { BtnAction, BtnMinus, BtnPlus } from "../../ui/index.ts";
import { IData } from "../../store/type";

export const CartComponent = observer(() => {
  if (!CartProducts.open) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCart}>
        <h2>Покупки</h2>
        <div className={styles.productsContainer}>
          {CartProducts.data.map((item: IData) => (
            <div className={styles.products} key={item.id}>
              <div>price: {item.price}</div>
              <div>name: {item.name}</div>
              <div>amount: {item.count}</div>
              <div className={styles.buttons}>
                <BtnPlus action={() => CartProducts.onPlusAmount(item.id)} />
                <BtnMinus action={() => CartProducts.onMinusAmount(item.id)} />
              </div>
            </div>
          ))}
        </div>
        <BtnAction action={() => CartProducts.onClose()}>
          Оформить заказ
        </BtnAction>
      </div>
    </div>
  );
});
