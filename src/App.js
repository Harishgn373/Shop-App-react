import './App.css';
import Home from './Component/Home';
import Product from './Component/Product';
import Productdetail  from './Component/Productdetail';
import Navbar from './Component/Navbar';
import Cart from './Component/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Context from './Component/Context';

function App() {
  return (
    <Router>
      <Context>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:single' element={<Product/>}/>
        <Route path='/:single/:id' element={<Productdetail/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </Context>
    </Router>
  );
}

export default App;
