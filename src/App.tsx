import { Route, Routes } from "react-router-dom";
import { CardsComponent, ErrorBoundary } from "./components";
import { Layout } from "./components";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CardsComponent />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
