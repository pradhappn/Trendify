import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <CheckCircle className="w-16 h-16 text-teal-500 mb-4" />
      <h1 className="text-4xl font-bold text-teal-700 mb-3">Thank you!</h1>
      <p className="text-gray-700 text-lg mb-6">
        Your order has been placed successfully.
      </p>
      <Link
        to="/"
        className="inline-block bg-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-teal-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
