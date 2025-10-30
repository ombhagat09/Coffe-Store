export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/coffee-bg.jpg')",
      }}
    >
      <div className="bg-black/50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold text-white mb-4">
          Freshly Brewed Coffee Everyday
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Discover your favorite cup from our premium selection
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
}
