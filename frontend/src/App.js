import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home f/Home"
import Products from "./pages/products f/Products"
import Admin from "./pages/admin f/admin"
import AdminLogin from "../src/components/AdminLogin.jsx"
import "../src/pages/home f/Home.css"
import "../src/pages/admin f/Admin.css"
import "../src/pages/products f/Products.css"
import "../src/pages/popups/CartSidebar.css"
import "../src/components/LoginModal.css"
import "../src/components/navbar.css"
import { CartProvider } from './components/CartContext.jsx';
import "./App.css"

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/home" element= {<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
