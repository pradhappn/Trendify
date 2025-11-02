import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Search, Menu } from "lucide-react";

export default function Header() {
  const { cartItems } = useCart();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q && q.trim()) params.set("q", q.trim());
    navigate({ pathname: "/", search: params.toString() });
  };

  return (
    <div>
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              Trendify
            </Link>

            <form onSubmit={onSearch} className="search-form">
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products"
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <Search className="icon" />
              </button>
            </form>

            <div className="header-nav">
              <Link to="/account" className="nav-link">
                <span>Hello, Sign in</span>
                <span className="font-bold">Account & Lists</span>
              </Link>

              <Link to="/orders" className="nav-link">
                <span>Returns</span>
                <span className="font-bold">& Orders</span>
              </Link>

              <Link to="/cart" className="nav-link cart-link">
                <div className="cart-icon">
                  <ShoppingCart />
                  <span className="cart-count">
                    {cartItems.length}
                  </span>
                </div>
                <span className="font-bold">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <nav className="sub-nav">
        <div className="container">
          <div className="sub-nav-content">
            <Link to="/" className="sub-nav-link">
              <Menu className="icon" />
              All
            </Link>
            <Link to="/deals" className="sub-nav-link">Today's Deals</Link>
            <Link to="/service" className="sub-nav-link">Customer Service</Link>
            <Link to="/registry" className="sub-nav-link">Registry</Link>
            <Link to="/gift-cards" className="sub-nav-link">Gift Cards</Link>
            <Link to="/sell" className="sub-nav-link">Sell</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
