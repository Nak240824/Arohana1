import React from 'react'
import logo from './assets/Arohana.png'
import weightLoss from './assets/Burs Fat Naturally.png'
import detox from './assets/Untitled design.png'
import millets from './assets/Millets 1.png'
import bg from './assets/ChatGPT Image Jul 17, 2025, 11_09_46 PM.png'

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center">
          <img src={logo} alt="Arohana Logo" className="h-12 mr-3" />
          <h1 className="text-2xl font-bold">Arohana</h1>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          🛒 Cart
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-lg text-xl hover:bg-green-100">
          Our Products
        </button>
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* Weight Loss Powder */}
        <div className="border p-4 rounded-xl shadow hover:shadow-xl transition-all">
          <img src={weightLoss} alt="Weight Loss Powder" className="h-40 mx-auto" />
          <h2 className="text-xl font-semibold mt-4 text-center">Weight Loss Powder</h2>
          <p className="text-center text-gray-700 mt-2">Helps burn fat naturally. Enhances metabolism. ₹599</p>
          <button className="mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>

        {/* Detox Powder */}
        <div className="border p-4 rounded-xl shadow hover:shadow-xl transition-all">
          <img src={detox} alt="Detox Powder" className="h-40 mx-auto" />
          <h2 className="text-xl font-semibold mt-4 text-center">Detox Powder</h2>
          <p className="text-center text-gray-700 mt-2">Cleanses your body gently and naturally. ₹249</p>
          <button className="mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>

        {/* Millets Powder */}
        <div className="border p-4 rounded-xl shadow hover:shadow-xl transition-all">
          <img src={millets} alt="Millets Powder" className="h-40 mx-auto" />
          <h2 className="text-xl font-semibold mt-4 text-center">Millets Powder</h2>
          <p className="text-center text-gray-700 mt-2">Wholesome nutrition with ancient grains. ₹449</p>
          <button className="mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
