import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200"},
        { id: 3, name: "Headphones", price: "$199"}
    ]
  return (
    <div>
        { products.map(({id, name, price}) => {
            return (
                <div key={id}>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList