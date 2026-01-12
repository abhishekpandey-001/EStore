import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaOpencart } from "react-icons/fa";
import { useMyContext } from '../MyContext';


const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const data = useMyContext()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50
                bg-zinc-900/90 backdrop-blur
                border-b border-white/5 h-16">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          className="text-xl font-bold tracking-wide cursor-pointer text-white hover:text-indigo-400 transition"
        >
          eStore
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => navigate('/')} className="text-gray-300 hover:text-white">
            Home
          </button>

          <button onClick={() => navigate('/products')} className="text-gray-300 hover:text-white">
            Products
          </button>

          <button
            onClick={() => navigate('/products')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Shop
          </button>

          <div className='mt-1'>
            <FaOpencart className='text-2xl' />
            <span className='text-red-600 absolute top-1.5 w-4 mt-0.5 h-4 text-xs font-bold rounded-4xl text-center bg-white'>{data.cart}</span>
          </div>
        </div>

        {/* Mobile menu button */}

        <div className='flex flex-row justify-center items-center gap-2 sm:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-gray-300 hover:text-white"
          >
            ☰
          </button>
          <div>
            <FaOpencart className='sm:hidden text-xl' />
            <span className='text-red-600 absolute top-1 w-5 h-5 text-xs font-bold rounded-4xl text-center bg-white'>{data.cart}</span>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden bg-zinc-900 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <button onClick={() => { navigate('/'); setOpen(false) }}>
            Home
          </button>
          <button onClick={() => { navigate('/products'); setOpen(false) }}>
            Products
          </button>
          <button
            onClick={() => { navigate('/products'); setOpen(false) }}
            className="bg-indigo-600 py-2 rounded-lg"
          >
            Shop
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
