// src/components/Charities.jsx
export default function Charities() {
  return (
    <section
      className="py-16 md:py-20 text-white bg-cover bg-center"
      // Use the blue IMAGE8.png as the background
      style={{ backgroundImage: "url('src/assets/IMAGE8.png')" }} 
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

        {/* Logos strip */}
        <img
          // Use the FrameBg.png which contains the logos
          src="src/assets/FrameBg.png"
          alt="Charity partners: Prostate Cancer Foundation, American Tinnitus Association, U.S. Pain Foundation, American Diabetes Association, American Heart Association"
          className="w-full max-w-5xl mx-auto h-auto object-contain"
        />
      </div>
    </section>
  );
}