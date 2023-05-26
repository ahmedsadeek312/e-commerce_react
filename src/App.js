import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Products from "./components/Products";
import Statics from "./components/Statics";
import Feature from "./components/Feature";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/home" element={<Home />} />
        <Route path="/static" element={<Statics />} />
        <Route path="feature" element={<Feature />} />
        <Route path="/allProducts" element={<Products />} />
        <Route
          path="*"
          element={
            <div className=" text-center text-6xl p-32 uppercase">
              page is not found
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
