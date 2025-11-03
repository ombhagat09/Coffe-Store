"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-amber-800">☕ CoffeeStore</h1>
      <div className="flex space-x-6 text-gray-700 font-medium">
        {[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
          { name: "Reviews", path: "/reviews" },
        
        ].map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="relative hover:text-amber-700 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-amber-700 hover:after:w-full after:transition-all after:duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
