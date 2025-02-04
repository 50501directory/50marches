import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="text-xl font-bold hover:text-blue-100">
            50 Marches
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-100">
              Home
            </Link>
            <Link to="/map" className="hover:text-blue-100">
              Find Protests
            </Link>
            <Link to="/resources" className="hover:text-blue-100">
              Resources
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 