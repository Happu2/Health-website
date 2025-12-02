const productCategories = [
  "Results-Driven",
  "All-Natural",
  "Non-GMO",
  "Cruelty-Free",
];

const products = [
  { name: "Dent Pure" },
  { name: "True Fem" },
  { name: "Vita Renew" },
  { name: "ProstaZen" },
  { name: "Nerve Freedom" },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Our Best Sellers
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-4">
          Formulated with science-backed all-natural ingredients, our unique supplements
          support holistic health, healing & wellness.
        </p>

        {/* Category Row */}
        <div className="flex flex-wrap items-center gap-4 text-lg font-semibold text-gray-800 mb-10">
          {productCategories.map((c, idx) => (
            <div key={c} className="flex items-center">
              <span className="cursor-pointer hover:text-blue-600">{c}</span>

              {idx < productCategories.length - 1 && (
                <span className="mx-3 text-gray-400">|</span>
              )}
            </div>
          ))}
        </div>

        {/* ONE SINGLE IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src="/src/assets/products.png"
            alt="Best Selling Products"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {products.map((p) => (
            <div key={p.name} className="flex flex-col items-center">

              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>

              <div className="text-yellow-500 text-xl mb-3">
                ★★★★★
              </div>

              <button
                className="
                  border border-blue-600 text-blue-600
                  px-6 py-2 rounded-md text-sm font-medium
                  hover:bg-blue-600 hover:text-white transition
                "
              >
                Shop Now
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
