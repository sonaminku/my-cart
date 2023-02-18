import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Category from './Components/Category';
import Checkout from './Components/Checkout';
import Product from './Components/Product';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/category' element={<Category />} />
          <Route exact path='/category/:categoryID' element={<Product />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
