import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <NewProduct/>
      <ProductList/>
     
    </div>
  );
}

export default App;
