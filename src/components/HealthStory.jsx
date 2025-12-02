import Img1 from "../assets/IMAGE1.png";
import Img2 from "../assets/IMAGE2.png";
import Img3 from "../assets/IMAGE3.png";

export default function HealthStory() {
  const sections = [
    {
      title: "100% Natural Components",
      subtitle: "Nature-Powered Wellness You Can Trust",
      copy: `We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Care Desk, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.`,
      image: Img1,
      reverse: false,
    },
    {
      title: "Research-Backed Formulations",
      subtitle: "Formulated with Clinically Tested Ingredients",
      copy: `We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.`,
      image: Img2,
      reverse: true,
    },
    {
      title: "Eco-Conscious Manufacturing",
      subtitle: "Sustainable from Source to Shelf",
      copy: `Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.`,
      image: Img3,
      reverse: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Health Care Desk
            <br />
            <span>The Future Of Smart Health</span>
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            At Health Care Desk, we are committed to producing supplements that harness
            the power of all-natural superfoods. Our products help support the body's
            natural processes, improving our customers&apos; quality of life.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-16 md:space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                section.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className={`${section.reverse ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* TEXT */}
              <div className={`${section.reverse ? "md:order-1" : "md:order-2"}`}>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-blue-700 font-semibold mb-4">
                  {section.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {section.copy}
                </p>

                <button
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm font-medium 
                             hover:bg-blue-600 hover:text-white transition"
                >
                  Learn More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
