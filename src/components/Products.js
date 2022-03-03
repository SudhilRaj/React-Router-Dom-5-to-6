import React from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../data';

const Products = () => {

// There is no useHistory or Redirect, instead we have useNavigate
  const navigate = useNavigate();

  return (
    <div className="p-3">
       <div className="row">
			{
				products.map(product => (
					<div key={product.id} className="col-4">
						<h3>{product.name}</h3>
						<p>{product.supplier}</p>
						<p>{product.desc}</p>
						<small>Date: {product.added_date}</small> 
						<small className='float-end' onClick={() => navigate(`/products/${product.id}`)}>View More</small>
					</div>
				))
			}
       </div>
    </div>
  )
}

export default Products;