import CharityBg from "../assets/IMAGE8.png";
import CharityLogos from "../assets/FrameBg.png";

export default function Charities() {
  return (
    <section
      className="py-16 md:py-20 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${CharityBg})` }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Headings */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Our Charitable Initiatives
        </h2>

        <p className="text-2xl md:text-3xl font-bold mb-6">
          Health Care Desk Gives Back
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-12 opacity-90">
          At Health Care Desk, a portion of our profits are committed to
          supporting charities and global health research initiatives.
        </p>

        {/* Logos Strip */}
        <img
          src={CharityLogos}
          alt="Charity partners"
          className="w-full max-w-5xl mx-auto object-contain"
        />
      </div>
    </section>
  );
}
