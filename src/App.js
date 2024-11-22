
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import NightLife from './Components/NightLife/NightLife';
import Resturant from './Components/Resturant/Resturant';
import Mansions from './Components/Mansins/Mansions';
import AxoticCars from './Components/AxoticCar/AxoticCars';
import YachtsUpdate from './Components/Yachts/YachtsUpdate';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurant' element={<Resturant />} />
          <Route path='/nightlifes' element={<NightLife />}/>
          <Route path='/mansions' element={<Mansions />} />
          <Route path='/exotics' element={<AxoticCars />} />
          <Route path='/yacht' element={<YachtsUpdate />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
