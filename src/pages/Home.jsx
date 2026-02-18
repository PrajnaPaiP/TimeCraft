import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import s1 from "../assets/watch_main1.png";
import a3 from "../assets/a3.jpg";
const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 1500,
    image: s1,
  },
  {
    id: 2,
    name: "Classic Watch",
    price: 500,
    image: a3,
  },
  {
    id: 3,
    name: "Premium Watch",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
  },
  {
    id: 4,
    name: "Luxury Watch",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="px-8 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Featured Products"
            subtitle="Discover our premium watch collection"
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
