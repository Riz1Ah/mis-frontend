import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Portal from "./components/Portal";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth/>}>
          <Route path="/portal" element={<Portal />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
