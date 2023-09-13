import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import "./App.css"; */
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Landing from "./Componentes/Landing/Landing";
import Home from "./Componentes/Home/Home";
import Nuevo from "./Componentes/Nuevo/Nuevo";
import Pages404 from "./Componentes/Pages404/Pages404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<WithHeader />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
function WithHeader() {
  return (
    <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh" }}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/nuevo" element={<Nuevo />} />
        <Route path="*" element={<Pages404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
