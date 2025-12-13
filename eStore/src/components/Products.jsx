import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoader(true)
    const response = await axios('https://fakestoreapi.com/products')
    setProducts(response.data);
    setLoader(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(products)

  if (loader) {
    return (
      <Loader />
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-zinc-900 items-stretch'>
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
    <div className='group bg-zinc-800 rounded-xl p-4 flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 gap-1 cursor-pointer'>
      <img src={items.image} alt="" className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400" />

      <h1 className='line-clamp-2 min-h-[40px] text-white group-hover:text-indigo-400 transition'>{items.title}</h1>

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

      <p className="mt-1 text-lg font-semibold text-white/60">
        ₹{items.price}
      </p>
    </div>
  )
}

export default Products
