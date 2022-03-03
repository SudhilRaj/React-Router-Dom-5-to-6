import React from 'react'
import { useHistory } from 'react-router-dom'
import { products } from '../data';

const Products = () => {

  const history = useHistory();

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
						<small className='float-end' onClick={() => history.push(`/products/${product.id}`)}>View More</small>
					</div>
				))
			}
       </div>
    </div>
  )
}

export default Products;