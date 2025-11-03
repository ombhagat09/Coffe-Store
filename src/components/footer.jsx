export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Coffee Store ☕</h2>
        <p className="text-amber-200 mb-4">
          Freshly brewed coffee made with ❤️ by Om.
        </p>

        <div className="flex justify-center gap-6 mb-6 text-amber-300">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-white transition"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-white transition"
          >
            Twitter
          </a>
        </div>

        <p className="text-amber-400 text-sm">
          © {new Date().getFullYear()} Coffee Store | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
