import { Route, Routes } from "react-router-dom";
import { CardsComponent } from "./components";
import { Layout } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardsComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
