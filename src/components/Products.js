import React from "react"
import { useProducts, useCart } from "../hooks"

export default props => {
  const { products } = useProducts()
  const { add } = useCart()

  return (
    <div className="products">
      {products.map(product => (
        <div className="product">
          {/* <img src={`/assets/${product.sku}-1.jpg`} /> */}
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button onClick={e => add(product)}>Add to Cart</button>>
        </div>
      ))}
    </div>
  )
}
