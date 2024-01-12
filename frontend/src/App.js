import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home f/Home"
import Products from "./pages/products f/Products"
import Overview from "./pages/overview f/Overview"
import Admin from "./pages/admin f/admin"
import "../src/pages/home f/Home.css"
import "../src/pages/admin f/Admin.css"
import "../src/pages/products f/Products.css"
import "../src/pages/popups/CartSidebar.css"
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
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
