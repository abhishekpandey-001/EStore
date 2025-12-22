import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 299,
      rating: 4.6,
      reviews: 120,
      image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495&width=400'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 499,
      rating: 4.4,
      reviews: 98,
      image: 'https://st2.depositphotos.com/1017986/10270/i/450/depositphotos_102703000-stock-photo-close-up-of-smart-watch.jpg'
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 699,
      rating: 4.7,
      reviews: 210,
      image: 'https://img.freepik.com/premium-photo/pair-fashion-black-unbranded-sneakers-flying-dark-background-black-sport-running-shoes-levitate-air_179369-1092.jpg'
    },
    {
      id: 4,
      name: 'DSLR Camera',
      price: 1299,
      rating: 4.5,
      reviews: 64,
      image: 'https://media.macphun.com/img/uploads/macphun/blog/1110/best-hdr-camera1x.jpg'
    },
  ]


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
          <div className="bg-zinc-800/40">

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {featuredProducts.map((prods, i) => (
                <div
                  key={i}
                  className="group bg-zinc-800 rounded-xl p-4
                             border border-white/5
                             shadow-md hover:shadow-xl
                             hover:border-indigo-500/40
                             transition cursor-pointer"
                >
                  <div className="bg-zinc-900 rounded-lg mb-4 
                h-48 flex items-center justify-center">
                    <img
                      src={prods.image}
                      alt="product"
                      className="max-h-full max-w-full object-contain p-4
               group-hover:scale-95 transition"
                    />
                  </div>

                  <h3 className="font-medium text-white/90 group-hover:text-indigo-400 transition line-clamp-1">
                    {prods.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm mt-1">
                    <div className="bg-green-600 text-white px-2 py-0.5 rounded">
                      ⭐ {prods.rating}
                    </div>
                    <span className="text-gray-400">{`(${prods.reviews})`}</span>
                  </div>

                  <p className="mt-2 text-lg font-bold">
                    <span className="text-sm align-top">₹</span>{prods.price}
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
