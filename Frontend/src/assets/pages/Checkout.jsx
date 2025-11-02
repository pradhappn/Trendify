import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address } = form;
    if (!name || !email || !address) {
      setError("Please fill out all fields.");
      return;
    }
    clearCart();
    navigate("/success");
  };

  return (
    <section className="container mx-auto max-w-lg px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-500"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-500"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block mb-1 font-medium text-gray-700">
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="123 Main St, City, Country"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-500 resize-none"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* Inline error */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
