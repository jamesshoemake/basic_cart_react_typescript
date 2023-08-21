import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'

import { useState } from 'react'
import React from 'react'

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <React.StrictMode>
      <ProductsProvider>
        <CartProvider>
          <Header viewCart={viewCart} setViewCart={setViewCart} />
          {pageContent}
          <Footer viewCart={viewCart} />
        </CartProvider>
      </ProductsProvider>
    </React.StrictMode>
  )

  return content
}

export default App
