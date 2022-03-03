import React from 'react'
import {useLocation, useParams} from 'react-router-dom';

const ProductDetails = () => {
    const loc = useLocation();
    const params = useParams();
  return (
    <div className='p-3'>
        <h4>ProductDetails</h4>
        <p>Location Path : {loc.pathname}</p>
        <p>Params ID : {params.id}</p>
    </div>
  )
}

export default ProductDetails;