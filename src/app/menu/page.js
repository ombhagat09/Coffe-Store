import Image from "next/image";

const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    price: "₹120",
    image: "/espresso.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "₹160",
    image: "/cappuccino.jpg",
  },
  {
    id: 3,
    name: "Latte",
    price: "₹180",
    image: "/latte.jpg",
  },
  {
    id: 4,
    name: "Mocha",
    price: "₹200",
    image: "/mocha.jpg",
  },
  {
    id: 5,
    name: "Cold Brew",
    price: "₹220",
    image: "/coldbrew.jpg",
  },
  {
    id: 6,
    name: "Americano",
    price: "₹140",
    image: "/americano.jpg",
  },
];

export default function MenuPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-amber-800">
        Our Coffee Menu
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffeeMenu.map((coffee) => (
          <div
            key={coffee.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={coffee.image}
                alt={coffee.name}
                width={400}
                height={300}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {coffee.name}
              </h2>
              <p className="text-amber-700 font-medium mt-2">{coffee.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
