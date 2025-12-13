import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await axios('https://fakestoreapi.com/products')
    setProducts(response.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(products)

  return (
    <div className='grid grid-cols-5 gap-5'>
      {
        products.map((items) => {
          return (
            <div key={items.id}>
              <DisplayProducts key={items.key} items={items} />
            </div>
          )
        })
      }
    </div>
  )
}


const DisplayProducts = ({ key, items }) => {
  return (
    <div className='flex flex-col gap-1'>
      <img src={items.image} alt="" className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400" />

      <h1 className='line-clamp-2'>{items.title}</h1>

      {/* Ratings and count display */}

      <div className="flex items-center gap-2 text-sm mt-1">
        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded-md">
          <span>⭐</span>
          <span>{items.rating.rate}</span>
        </div>
        <span className="text-gray-500">
          ({items.rating.count} reviews)
        </span>
      </div>

      <p className="text-lg font-semibold text-white/60">
        ₹{items.price}
      </p>

    </div>
  )
}

export default Products
