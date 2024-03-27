import { Cart, Person } from "../../assets";
import { Find } from "../../assets/svg/Find";
import styles from "./header.module.css";
import CartProducts from "../../store/cartProducts";
import { createPortal } from "react-dom";
import { CartComponent } from "../cart-component/CartComponent";
import { observer } from "mobx-react-lite";

export const Header = observer(() => {
  return (
    <header className={styles.containerFlex}>
      <div className={styles.flex}>
        <h1 className={styles.header}>marketplace</h1>
        <div className={styles.find}>
          <Find />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.grid}>
          <div>about us</div>
          <div>github</div>
          <div>devs team</div>
          <div>sample</div>
        </div>
        <Person />
        <Cart />
      </div>
      {CartProducts.open
        ? createPortal(<CartComponent />, document.body)
        : null}
    </header>
  );
});
