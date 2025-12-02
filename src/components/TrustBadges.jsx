import trustBg from "../assets/trustbg.png";          // background image
import trustIcons from "../assets/trust-badges.png"; // row of blue icons

export default function TrustBadges() {
  const labels = [
    "All Natural",
    "Cruelty-Free",
    "Money-back Guarantee",
    "Giving back",
    "Non-GMO",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Rounded card with background image */}
        <div className="rounded-3xl overflow-hidden shadow-sm">
          <div className="relative">
            {/* Background with those soft shades */}
            <img
              src={trustBg}
              alt="Soft background"
              className="w-full h-full object-cover"
            />

            {/* Content over the background */}
            <div className="absolute inset-0 flex flex-col items-center text-center pt-10 pb-8 px-6">
              <h3 className="text-3xl font-bold mb-3">
                A Brand That You Can Trust
              </h3>

              <p className="text-gray-700 mb-8">
                Our results-driven supplements are made with premium &amp; safe ingredients
              </p>

              {/* Icons row */}
              <img
                src={trustIcons}
                alt="Trust badges"
                className="w-full max-w-3xl object-contain mb-4"
              />

              {/* Labels aligned under icons */}
              <div className="flex justify-center gap-12 text-sm font-medium mt-2">
                {labels.map((label) => (
                  <div key={label} className="w-32 text-center">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
