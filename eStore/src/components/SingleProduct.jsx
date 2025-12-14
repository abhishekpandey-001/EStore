import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'

const SingleProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const [loader, setLoader] = useState(false);

    const fetchData = async () => {
        setLoader(true)
        const response = await axios(`https://fakestoreapi.com/products/${id}`)
        setProducts(response.data);
        setLoader(false)
    }
    console.log(products)

    useEffect(() => {
        fetchData()
    }, [id])



    if (loader) {
        return (
            <Loader />
        )
    }
    return (
        <div className="min-h-screen bg-zinc-900 p-6 flex justify-center">
            <div className="max-w-5xl w-full bg-zinc-800 rounded-2xl p-6 
                    grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl">

                {/* Image */}
                <div className="bg-zinc-900 rounded-xl flex items-center justify-center">
                    <img
                        src={products?.image}
                        alt={products?.title}
                        className="max-h-[400px] object-contain p-6"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4">

                    <h1 className="text-2xl font-semibold text-white">
                        {products?.title}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md">
                            ⭐ {products?.rating?.rate}
                        </div>
                        <span className="text-gray-400">
                            ({products?.rating?.count} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <p className="text-3xl font-bold text-white">
                        <span className="text-lg align-top">₹</span>
                        {products?.price}
                    </p>

                    {/* Category */}
                    <span className="text-xs uppercase tracking-wide text-indigo-400">
                        {products?.category}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {products?.description}
                    </p>

                    {/* CTA */}
                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-500 
                           text-white py-3 rounded-xl transition">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct
