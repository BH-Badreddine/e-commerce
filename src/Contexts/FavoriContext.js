

import React, { createContext, useEffect, useState } from 'react'

export const favoriCtx = createContext();




export default function FavoriContext(props) {

  
  
  //au lieu d'utiliser useState pour stocker les ProdFavori, je peux utiliser useReducer(reducer,[],fonction qui retourne la valeur par défaut du state'c'est les memes instructions de getFavori()')
  const [likedProd, setLikedProd] =  useState(JSON.parse(localStorage.getItem('ProduitsFavori')) || []);//getFavoriFromLocStorage()
    
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    /*setTimeout(() => {
      setIsAnimated(false);
    }, 2000)*/
  }, [likedProd])

    useEffect(()=> {
      localStorage.setItem('ProduitsFavori', JSON.stringify(likedProd));
    }, [likedProd])

    
      
    return (
    <favoriCtx.Provider value={{likedProd, setLikedProd}}>
        {props.children}
    </favoriCtx.Provider>
  )
}
