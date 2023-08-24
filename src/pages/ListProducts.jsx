import React, { useState, useEffect, useRef } from 'react'
import Product from '../components/Product';


export default function ListProducts() {

  const allProd = [
    { id: 1, name: 'smart watch', price: 3500, img: './ImagesProd/watch.jpg', categorie: 'electronics' },
    { id: 2, name: 'book', price: 1500, img: './ImagesProd/book.jpg', categorie: 'other' },
    { id: 3, name: 'shoes', price: 4500, img: './ImagesProd/shoes.jpg', categorie: 'chaussures & vetements' },
    { id: 4, name: 'phone', price: 15000, img: './ImagesProd/phone.jpg', categorie: 'electronics' },
    { id: 5, name: 'tablet', price: 25000, img: './ImagesProd/tablet.jpg', categorie: 'electronics' },
    { id: 6, name: 'computer', price: 75000, img: './ImagesProd/computer.jpg', categorie: 'electronics' },
    { id: 7, name: 'lamp', price: 3600, img: './ImagesProd/lamp.jpg', categorie: 'other' },
    { id: 8, name: 'shirt', price: 2800, img: './ImagesProd/shirt.jpg', categorie: 'chaussures & vetements' },
  ];
  const [Products, setProducts] = useState(allProd);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isFiltered ,setIsfiltered] = useState(false);
  const [priceFiltred, setPriceFiltered] = useState(null);
  const [categories, setCategories] = useState([]);

  /************************************************************** */
  const priceRef = useRef([]);
  const categRef = useRef([]);
 /******************************************************************* */ 

  const handlePrice = (e) => {
    switch(e.target.value){
      case '<4000' :
        setPriceFiltered({price: 4000, op: '<'});
        break;
      case '<8000' :
        setPriceFiltered({price: 8000, op: '<'});
        break;
      case '>16000' :
        setPriceFiltered({price: 16000, op: '>'});
        break;
      default: 
        setPriceFiltered(null); 
    }
    //console.log(priceFiltred)
  }
  const handleCateg = (e) => {
    const val = e.target.value;
  
   if(e.target.checked ) {
      if(categories.filter(categ => categ===val).length===0) {//la valeur checked n'existe pas dans categories
        setCategories([...categories,val]);
      }
    } else {
      setCategories(categories.filter(categ => categ !== val));
    }
    //console.log(categories)
  }
  
  const clearFilterHandler = () => {
    setIsfiltered(false);
    //console.log(priceRef.current)
    //console.log(priceRef.current[0].checked)
    for(let i=0; i < priceRef.current.length; i++) {
      priceRef.current[i].checked = false;
    }
    for(let i=0; i < categRef.current.length; i++) {
      categRef.current[i].checked = false;
    }
    setCategories([]);
    setPriceFiltered(null);
  }
  /*********************Fonction qui gére le filtrage des produits à chaque fois que 'isFiltered'  change*/
  useEffect(()=> {
    //console.log('filtrer');
    if(priceFiltred && categories.length > 0 ) {
      setIsfiltered(true);
      setFilteredProducts(Products.filter(prod => {
        return eval(`${prod.price} ${priceFiltred.op} ${priceFiltred.price}`) && categories.includes(prod.categorie); 
      }))
      return;//pour sortir de la fonction et ne pas exécuter le reste des blocs if
    }
    else if(priceFiltred) {
      setIsfiltered(true);
      setFilteredProducts(Products.filter(prod => {
        return eval(`${prod.price} ${priceFiltred.op} ${priceFiltred.price}`)  
      }))
    } else if (categories.length > 0) {
      setIsfiltered(true);
      setFilteredProducts(Products.filter(prod => {
        return  categories.includes(prod.categorie); 
      }))
    }  
  }, [priceFiltred,categories]) 


  return (<>
    <div className='container-fluid '>
      <h1>- List of all products -</h1>

      <div className="row justify-content-around mt-5">
        <div className="col-md-3 col-sm-5 mb-2 filtre-container me-2">
          <h3>Filtre</h3> <i class="bi bi-funnel-fill"></i>

          <label>Price</label><br />
          <ul> {/* j'ai créé une reférence 'priceRef' qui est un tableau contenant tous les éléments <li> pour pouvoir les cibler tous lors du clearFilter */}
            <li><input ref={element => priceRef.current[0] = element} onChange={handlePrice} name="prix" type="radio" value="<4000" /> &lt; 4000 </li>
            <li><input ref={element => priceRef.current[1] = element} onChange={handlePrice} name="prix" type="radio" value="<8000" /> &lt; 8000  </li>
            <li><input ref={element => priceRef.current[2] = element} onChange={handlePrice} name="prix" type="radio" value=">16000" /> &gt; 16000 </li>
            </ul>

          <label>Categorie</label><br />
          <ul>
            <li><input ref={element => categRef.current[0] = element} onChange={handleCateg} name='categ' type='checkbox' value='electronics'/> electronics</li>
            <li><input ref={element => categRef.current[1] = element} onChange={handleCateg} name='categ' type='checkbox' value='chaussures & vetements' />chaussures & vetements</li>
            <li><input ref={element => categRef.current[2] = element} onChange={handleCateg} name='categ' type='checkbox' value='other' /> other </li>
            </ul>

          <button className='btn btn-secondary offset-7 mt-5' onClick={clearFilterHandler}>Clear filtres</button>

        </div>

        <div className="col-md-8 allprod-container">
          <div className="row justify-content-evenly">
            { !isFiltered &&
              Products.map(item => <Product key={item.id} item={item}  />)
            }
            { isFiltered && (filteredProducts.length > 0 ?
              filteredProducts.map(item => <Product key={item.id} item={item} />)
              : <p>No product found !</p>)
            }
          </div>
        </div>
      </div>
    </div>


  </>
  )
}
