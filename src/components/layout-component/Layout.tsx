import { Outlet } from "react-router-dom";
import { Header } from "..";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <h2>footer</h2>
      </footer>
    </>
  );
};
