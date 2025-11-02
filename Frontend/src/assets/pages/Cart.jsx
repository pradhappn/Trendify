import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartItems.length === 0)
    return (
      <div className="text-center py-10 text-gray-600 text-lg">
        Your cart is empty.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <button
                    aria-label={`Decrease quantity for ${item.name}`}
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-2 py-1 bg-gray-100 rounded"
                  >
                    −
                  </button>
                  <span className="text-sm text-gray-600">Qty: {item.qty}</span>
                  <button
                    aria-label={`Increase quantity for ${item.name}`}
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-2 py-1 bg-gray-100 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm font-medium text-teal-600 mt-2">
                  ₹{item.price * item.qty}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm font-medium hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <p className="text-xl font-bold text-gray-800">Total: ₹{total}</p>
        <Link
          to="/checkout"
          className="bg-teal-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-teal-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
