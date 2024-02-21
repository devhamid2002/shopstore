import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCaregory from "./pages/ShopCaregory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSingup from "./pages/LoginSingup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCaregory category="men" />} />
          <Route path="/womens" element={<ShopCaregory category="women" />} />
          <Route path="/kids" element={<ShopCaregory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
