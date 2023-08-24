
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { favoriCtx } from '../Contexts/FavoriContext';
import {Cartctx} from '../Contexts/CartContext';



export default function Navbar({Prodfavori, setProdfavori}) {
    
    const {likedProd, isAnimated} = useContext(favoriCtx);
    const {cartItems} = useContext(Cartctx);


    {/* remarque: au lieu de la balise <a> j'utilise le component prédifini <Link />, Mais pour le style css--> je cible <Link/> comme étant un élé <a>*/}
    {/* NavLink permet de traquer la page courante et la styler via la classe 'active'(voir App.css) */}
    return ( <>
        <nav>
            <ul>
                <li className='logo'><img src='./logo.png' height='90' width='120' alt='logo' /></li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Our Products</NavLink></li>
                <li className='favori'><Link to='/favori'>
                    <i style={{color: likedProd.length>0 ? 'red' : 'white' }} className="bi bi-heart-fill" ></i>
                    {likedProd.length>0 && <span className='countFavori'>{likedProd.length}</span>}
                    </Link>
                </li>
                <li className='cart'><Link to='/shoppingCart' ><i className="bi bi-cart-fill" style={{color: cartItems.length>0 ? 'blueviolet' : 'white'}}></i></Link></li>
            </ul>
        </nav>
        
        </>

    );
}