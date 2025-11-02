import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { CartProvider } from "./assets/context/CartContext";
import { ProductsProvider } from "./assets/context/ProductsContext";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./assets/pages/Home.jsx"));
const ProductDetail = lazy(() => import("./assets/pages/ProductDetail.jsx"));
const Cart = lazy(() => import("./assets/pages/Cart.jsx"));
const Checkout = lazy(() => import("./assets/pages/Checkout.jsx"));
const OrderSuccess = lazy(() => import("./assets/pages/OrderSuccess.jsx"));
const Deals = lazy(() => import("./assets/pages/Deals.jsx"));
const CustomerService = lazy(() => import("./assets/pages/CustomerService.jsx"));
const Registry = lazy(() => import("./assets/pages/Registry.jsx"));
const GiftCards = lazy(() => import("./assets/pages/GiftCards.jsx"));
const Sell = lazy(() => import("./assets/pages/Sell.jsx"));
const Account = lazy(() => import("./assets/pages/Account.jsx"));


function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Router>
          <Header />
          <div className="min-h-screen px-4 py-6">
            <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<OrderSuccess />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/service" element={<CustomerService />} />
                <Route path="/registry" element={<Registry />} />
                <Route path="/gift-cards" element={<GiftCards />} />
                <Route path="/sell" element={<Sell />} />
                
                {/* ACCOUNT ROUTE ADDED */}
                <Route path="/account" element={<Account />} /> 
                
                {/* Optional: Add a catch-all route for 404 errors */}
                {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </Router>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;