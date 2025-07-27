// src/pages/NotFound.jsx
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full font-semibold"
      >
        Go Home
      </a>
    </div>
  );
}
