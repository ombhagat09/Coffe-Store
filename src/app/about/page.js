import Image from "next/image";


export default function AboutPage() {
  return (

    <section className="min-h-screen bg-amber-50 px-6 md:px-20 py-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-amber-900 mb-10">About Us</h1>

      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/about-coffee.jpg"
          alt="About Coffee"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold text-amber-800 mb-4">
            Brewing Happiness Since 2024
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <strong>Coffee Brew</strong> — where every cup tells a
            story. We believe coffee is more than a drink; it's a connection, a
            pause, and a comfort in every sip.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our beans are handpicked from the finest farms and roasted with
            perfection to bring you that rich, bold aroma you love. Whether
            you're starting your day or winding down, our brews are crafted to
            make every moment special.
          </p>
  
          <button className="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium">
            Visit Our Menu
          </button>
        </div>
      </div>
    </section>
      
  );
}
