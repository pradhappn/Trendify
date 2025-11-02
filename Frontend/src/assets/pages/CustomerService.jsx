import React from "react";

export default function CustomerService() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Customer Service</h1>
      <p className="mb-4">For help with orders, returns, or account issues please contact us.</p>
      <ul className="list-disc ml-6 text-sm text-gray-700">
        <li>Email: support@example.com</li>
        <li>Phone: +91 00000 00000</li>
        <li>Help topics: Orders, Returns, Payment, Shipping</li>
      </ul>
    </div>
  );
}
