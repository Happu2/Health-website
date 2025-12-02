export default function Hero() {
  return (
    // External top padding remains pt-4 for minimum gap with header
    <section className="pt-4 pb-12 bg-white"> 
      
      <div className="mx-auto"> 

        {/* Grey card: Fixed dimensions, centered, and rounded */}
        <div 
          className="
            bg-[#f4f5f7]
            rounded-2xl
            mx-auto 
            
            // Fixed dimensions
            max-w-[1311px] 
            min-h-[603px]
            
            // Minimal internal top/bottom padding
            pt-4 pb-4 px-12 
          "
        >
          {/* Grid layout with wide gap (gap-24) */}
          <div className="grid lg:grid-cols-2 gap-24 items-start"> 

            {/* LEFT — TEXT */}
            {/* Heading positioned down to neck level (pt-32) */}
            <div className="max-w-xl pt-32"> 
              
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                <span className="whitespace-nowrap">
                  Health Desk Clinic:
                </span>
                <br />
                <span className="whitespace-nowrap">
                  All Natural Supplements
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                Health Care Desk is the premier choice for those seeking
                wellness through wholesome, superfood-enriched formulas that
                actually work. Our all-natural, organic health supplements
                are designed to give your body what it needs to thrive and
                optimize your health each day!
              </p>

              <button
                className="mt-10 bg-[#2267e3] hover:bg-[#1d54b8]
                           text-white font-semibold px-10 py-4
                           rounded-full shadow-md transition"
                >
                Shop Now
              </button>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="flex justify-center lg:justify-end items-start">
              <img
                src="src/assets/IMAGE.png"
                alt="Doctor"
                // INCREASED HEIGHT to h-[620px] lg:h-[700px] to make the doctor taller
                className="object-cover h-[620px] lg:h-[700px] w-auto" 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}