import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home f/Home";
import Products from "./pages/products f/Products";
import Overview from "./pages/overview f/Overview";
import Cart from "./pages/cart f/Cart";
import "../src/pages/home f/Home.css"
import "../src/pages/products f/Products.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/overview" element={<Overview/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
