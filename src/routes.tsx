import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutUs } from './pages/AboutUs'
import { Customers } from './pages/Customers'
import { Layout } from './pages/layout'
import { Products } from './pages/Products'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Products />} path="/products" />
          <Route element={<Customers />} path="/customers" />
          <Route element={<AboutUs />} path="/about-us" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
