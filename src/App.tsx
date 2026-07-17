import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SeoHead from './components/SeoHead'

// Pavanity Pages
import PavanityHomeV4 from './pages/index/pavanity-home-v4'
import AboutPavanity from './pages/inner-pages/about-pavanity'
import ServicesPage from './pages/inner-pages/services'
import CareerPage from './pages/inner-pages/career'
import ProductsMain from './pages/products/products-main'
import ProductDetail from './pages/products/product-detail'
import SingleProductDetail from './pages/products/single-product-detail'
import ContactPavanity from './pages/inner-pages/contact-pavanity'

function App() {
  return (
    <>
      <SeoHead />
      <Routes>
          {/* Pavanity Global Website Routes */}
          <Route path="/" element={<PavanityHomeV4/>} />
          <Route path="/about-us" element={<AboutPavanity/>} />
          <Route path="/products" element={<ProductsMain/>} />
          <Route path="/products/:categorySlug/:productSlug" element={<SingleProductDetail/>} />
          <Route path="/products/:slug" element={<ProductDetail/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/quality-compliance" element={<Navigate to="/services" replace />} />
          <Route path="/private-label-custom-sourcing" element={<Navigate to="/services" replace />} />
          <Route path="/contact" element={<ContactPavanity/>} />

          {/* Catch all - redirect to home */}
          <Route path="*" element={<PavanityHomeV4/>} />
     </Routes>
    </>
  )
}

export default App
