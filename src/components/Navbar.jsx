"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-brown-700">☕ CoffeeStore</h1>
      <div className="space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
