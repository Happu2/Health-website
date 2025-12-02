// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#F5F6FA] text-gray-800 pt-10">
      {/* TOP: Address + Products */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row pb-10 border-b border-gray-300">
          {/* LEFT: Address */}
          <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
            <img
              src="src/assets/Rectangle 730.png"
              alt="Health Desk Clinic"
              className="h-10 mb-6 object-contain"
            />
            <p className="text-sm leading-relaxed">
              Address: 7823 Red Oak Trail, Austin,<br />
              TX, 78745, United States<br />
              Phone: (512) 555-2376<br />
              Email: Ereforce@outlook.com
            </p>
          </div>

          {/* RIGHT: Our Products */}
          <div className="md:w-2/3 md:border-l border-gray-300 md:pl-10">
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-2 text-sm">
              {/* Column 1 */}
              <div className="space-y-1">
                <div>Vita Renew</div>
                <div>Testobites</div>
                <div>Audizen</div>
                <div>Nerve Flow</div>
                <div>Uro flow</div>
              </div>

              {/* Column 2 */}
              <div className="space-y-1">
                <div>Vita Renew</div>
                <div>Testobites</div>
                <div>Audizen</div>
                <div>Nerve Flow</div>
                <div>Memof</div>
              </div>

              {/* Column 3 */}
              <div className="space-y-1">
                <div>Vita Renew</div>
                <div>Testobites</div>
                <div>Audizen</div>
                <div>Nerve Flow</div>
                <div>Derma care</div>
              </div>

              {/* Column 4 */}
              <div className="space-y-1">
                <div>Vita Renew</div>
                <div>Testobites</div>
                <div>Audizen</div>
                <div>Nerve Flow</div>
                <div>TestoZen</div>
              </div>

              {/* Column 5 */}
              <div className="space-y-1">
                <div>Vita Renew</div>
                <div>Testobites</div>
                <div>Audizen</div>
                <div>Nerve Flow</div>
                <div>True Fem</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE: Disclaimer + Cards */}
      <div className="border-b border-gray-300 py-6 text-center px-4">
        <p className="text-xs text-gray-600 mb-1">
          These statements have not been evaluated by the Food and Drug Administration.
        </p>
        <p className="text-xs text-gray-600 mb-4">
          These products are not intended to diagnose, treat, cure or prevent any disease.
          Individual results may vary.
        </p>

        {/* payment icons image */}
        <img
          src="src/assets/cards.png"        // <- put your card-icons image here
          alt="Payment methods"
          className="mx-auto h-8 object-contain"
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="py-4 text-xs text-gray-600">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>

          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="hover:text-gray-800">
              Terms And Conditions
            </a>
            <span className="h-4 border-l border-gray-400" />
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <span className="h-4 border-l border-gray-400" />
            <a href="#" className="hover:text-gray-800">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
