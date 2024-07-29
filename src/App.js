import "./App.css";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/*" element={<Welcome />} />
        <Route path="/welcome/*" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

//בשביל שזה יעבוד צריך לשנות משהו בINDEX.JS שימי לב

export default App;
