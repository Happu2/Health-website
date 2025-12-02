export default function SupportSection() {
  return (
    <section className="bg-[#F5F6FA] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

          {/* Column 1 — FAQ */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Have a Question?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Check out our FAQs where<br />
              we answer the most<br />
              commonly asked questions
            </p>
            <button
              className="border border-blue-600 text-blue-600 
                         px-6 py-2 rounded-md hover:bg-blue-600 
                         hover:text-white transition"
            >
              Read FAQs
            </button>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Connect With Us
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Enjoy free shipping for all<br />
              orders.
            </p>
            <p className="text-xl font-bold text-gray-900">
              1-800-822-7777
            </p>
          </div>

          {/* Column 3 — Social */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              We're Social
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Like us, love us, follow us!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
