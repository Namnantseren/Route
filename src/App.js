import Home from "./Pages/Home";
import About from "./Pages/About"
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import { MENUS, users } from "./util/data"
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path={MENUS[0].url} element={<Home/>} />
          <Route path={MENUS[1].url} element={<About/>}/>
          <Route path={MENUS[2].url} element={<Login/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
