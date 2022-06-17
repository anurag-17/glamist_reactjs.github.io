import "./App.css";
import { Navbar } from "./Components/Homepage/Navbar";
import { Badge } from "./Components/Homepage/Badge";
import { Homes } from "./Components/Homepage/Home";
import { Shop } from "./Components/Homepage/Shop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainShop } from "./Components/mainshopcom/MainShop";
import { Main } from "./Components/Homepage/Main"
import { Category } from "./Components/mainshopcom/Category";
import { Signup } from "./Components/Register/Signup";
import { Admin } from "./Components/Admin";

function App() {
  return (
    <div className="App">
<BrowserRouter>

<Routes>

  <Route path = "/" element = {<Main/>}/>
  <Route path = "/mainshop" element = {<MainShop/>}/>
  <Route path = "/category" element = {<Category/>}/>
  <Route path = "/signup" element = {<Signup/>}/>
  <Route path = "/admin" element = {<Admin/>}/>

</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
