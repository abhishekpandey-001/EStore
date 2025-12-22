import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur 
                    border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 
                      flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="text-xl font-bold tracking-wide cursor-pointer
                     text-white hover:text-indigo-400 transition"
        >
          eStore
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => navigate('/')}
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate('/products')}
            className="text-gray-300 hover:text-white transition"
          >
            Products
          </button>

          {/* CTA */}
          <button
            onClick={() => navigate('/products')}
            className="bg-indigo-600 hover:bg-indigo-500
                       text-white px-5 py-2 rounded-lg
                       shadow-md hover:shadow-lg
                       transition"
          >
            Shop
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
