import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import male_banner from "./components/assets/banner_mens.png";
import female_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/laptops"
            element={<ShopCategory banner={male_banner} category="laptops" />}
          />
          <Route
            path="/smartphones"
            element={
              <ShopCategory banner={male_banner} category="smartphones" />
            }
          />
          <Route
            path="/fragrances"
            element={
              <ShopCategory banner={kids_banner} category="fragrances" />
            }
          />
          <Route
            path="/skincare"
            element={
              <ShopCategory banner={female_banner} category="skincare" />
            }
          />
          <Route
            path="/groceries"
            element={
              <ShopCategory banner={female_banner} category="groceries" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
