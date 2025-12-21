import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-zinc-900 text-white min-h-screen">

      {/* HERO */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-zinc-900 to-zinc-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Next Product
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Premium products, clean design, smooth shopping experience.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-3 rounded-xl text-lg"
        >
          Shop Now
        </button>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <button
              onClick={() => navigate('/products')}
              className="text-sm text-indigo-400 hover:underline"
            >
              View all →
            </button>
          </div>

          {/* Container boundary */}
          <div className="bg-zinc-800/40 rounded-2xl p-6 ring-1 ring-white/5">

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="group bg-zinc-800 rounded-xl p-4
                             border border-white/5
                             shadow-md hover:shadow-xl
                             hover:border-indigo-500/40
                             transition cursor-pointer"
                >
                  <div className="bg-zinc-900 rounded-lg mb-4">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="product"
                      className="aspect-square object-contain p-6
                                 group-hover:scale-95 transition"
                    />
                  </div>

                  <h3 className="font-medium text-white/90 group-hover:text-indigo-400 transition line-clamp-1">
                    Product Name
                  </h3>

                  <div className="flex items-center gap-2 text-sm mt-1">
                    <div className="bg-green-600 text-white px-2 py-0.5 rounded">
                      ⭐ 4.5
                    </div>
                    <span className="text-gray-400">(120)</span>
                  </div>

                  <p className="mt-2 text-lg font-bold">
                    <span className="text-sm align-top">₹</span>299
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="px-6 py-16 bg-zinc-800/50 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to explore more?
        </h3>
        <p className="text-gray-400 mb-6">
          Browse all categories and find what suits you best.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-3 rounded-xl"
        >
          Browse Products
        </button>
      </section>

    </div>
  )
}

export default Home
