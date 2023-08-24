import React, { useContext} from 'react'
import { favoriCtx } from '../Contexts/FavoriContext';


export default function Favori() {

    const {likedProd, setLikedProd} = useContext(favoriCtx);

    const deleteProdFav = (id) => {
       const  likedProdFiltered = likedProd.filter(prod => prod.id !== id);
       setLikedProd(likedProdFiltered);
    }

    return (
        <div className='favori-container'>
            
            <p className='text-center display-6'>- You liked {likedProd.length} {likedProd.length === 1? 'product' : 'products'}  ! -</p>
               { likedProd.length > 0 && 
                likedProd.map(prod => 
                    <div key={prod.id} className="item-favori row justify-content-evenly align-items-center mb-3">
                        <img className='col-md-3' src={prod.img} height='80px' width='100%' />
                        <p className='col-md-4'>{prod.name}</p>
                        <p className='col-md-3'>{prod.price} </p>
                        <button className='btn btn-danger'><i className="bi bi-trash3" onClick={()=>deleteProdFav(prod.id)}></i></button>
                    </div>
                 ) 
                
                }
                
             
            
            {likedProd.length === 0 && <h3>-empty list -</h3>}
            
        </div>
    )
}


