import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import ListProducts from './pages/ListProducts';
import Favori from './pages/Favori';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';

function App() {
  

  


/*****************************************Attention *************************** */
//J'ai ajouté le contexte <FavoriContext></FavoriContext> et il imbrique l'élé <App> dans 'index.js'
  return (
    
      <div className="App">
      
      <HashRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<ListProducts />}></Route>
            <Route path='/favori' element={<Favori />}></Route>
            <Route path='/shoppingCart' element={<Cart /> }></Route>
          </Routes>

          <Footer />
      </HashRouter>
      
    </div>
   
  );
}

export default App;
