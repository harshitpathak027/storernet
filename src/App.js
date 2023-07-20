import {Route,Routes,BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Product from "./components/Product";
import Category from "./components/Category"
import Header from "./components/Header/Header"
import AppContext from "./components/utils/Context";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <BrowserRouter>
    <AppContext>

    
    <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Category/:id' element = {<Category/>}/>
        <Route path = '/Product/:id' element = {<Product/>}/>
    
       
      </Routes>
      <Footer/>
      <Newsletter/>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
