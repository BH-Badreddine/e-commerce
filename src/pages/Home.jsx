import React, { useContext } from 'react'
import home from '../Images/home.avif';
import { Link } from 'react-router-dom';

export default function Home() {

   
  
  return (<>
    <div className='container home '>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5 slogan">
          <h2>Welcome to the boundless world of online shopping: discover, explore, shop !</h2>
        </div>
        <div className="col-lg-7">
            <img className='img-fluid' src={home} height='100%' width='100%' alt="" />
        </div>
      </div>
      
      
    </div>
    
    <div className="d-flex mx-auto col-5 mt-4 justify-content-center discover">
      <Link to="/products" className='btn btn-success'>Discover products <i className="bi bi-arrow-right ms-2"></i></Link>
    </div>
    </>
  )
}
