// src/components/Testimonials.jsx
import React from 'react';

// Map product names to the correct image file paths
const productImages = {
  "TestoBites": "src/assets/Testobites.png",
  "Vita Renew": "src/assets/vita-renew.png",
  "Nerve Freedom": "src/assets/NerveFreedom.png",
};

// SVG icons defined inside the component for perfect rendering
// Component to render the social icon buttons


export default function Testimonials() {
  const reviews = [
    {
      product: "TestoBites",
      stars: 5,
      text: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
      author: "Ryan R."
    },
    {
      product: "Vita Renew",
      stars: 5,
      text: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
      author: "Jamie Fields"
    }
    ,
    {
      product: "Nerve Freedom",
      stars: 5,
      text: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
      author: "Anonymous"
    }
  ];

  const renderStars = (stars) => {
    return (
      <div className="text-yellow-500 text-lg flex">
        {Array(5).fill(null).map((_, i) => (
          <span key={i} className={i < stars ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    // Set section background to a very light gray/blue tint
    <section className="py-20 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Separator Dot */}
        <h2 className="text-4xl font-bold text-center mb-6">Verified Customer Testimonials</h2>


        {/* Customer Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              // Card style: rounded corners, shadow
              className="rounded-xl p-8 shadow-2xl relative overflow-hidden flex flex-col h-full"
              // Setting the very light blue-green background tint
              style={{ 
                  backgroundColor: '#F0FFFF', // Very light Azure/Mint shade
              }}
            >
              
              {/* Product Image and Title/Stars Section (Top-Left Alignment) */}
              <div className="flex items-start mb-4">
                  {/* Image Container for precise top-left corner positioning */}
                  <div className="absolute top-0 left-0">
                      <img 
                          src={productImages[r.product]} 
                          alt={r.product} 
                          className="w-16 h-16 object-contain" 
                          // Margin adjustment to pull it to the absolute corner
                          style={{ margin: '-10px -10px 0 0' }} 
                      />
                  </div>

                  {/* Text Content (moved right with padding to avoid image overlap) */}
                  <div className='flex flex-col ml-16 pl-2 pt-1'> 
                      <h4 className="font-bold text-lg text-gray-800">{r.product}</h4>
                      {renderStars(r.stars)}
                  </div>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 text-base mb-6 leading-relaxed flex-grow pt-4">
                {r.text}
              </p>
              
              {/* Author */}
              <p className="text-right font-semibold text-blue-600 mt-auto">
                - {r.author}
              </p>
            </div>
          ))}
        </div>

        {/* --- Footer Section: Logo, Follow Button, Social Icons --- */}
        <div className="mt-20 flex flex-col items-center">
          
          {/* Health Desk Clinic Logo (using Rectangle 730.png, large h-16) */}
          <img 
            src="src/assets/Rectangle 730.png"
            alt="HEALTH DESK Clinic Logo"
            className="h-16 mb-8 object-contain" 
          />

          {/* Follow Us Button */}
          <button 
            className="border border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-full transition duration-300 hover:border-blue-500 hover:text-blue-500 mb-4"
            style={{ borderWidth: '1px' }} 
          >
            Follow Us
          </button>

          {/* Social Media Icons (Using individual SVGs which are more reliable) */}
          <div className="mt-6">
  <img
    src="src/assets/socialmedia.png"
    alt="Social Media Icons"
    className="h-10 md:h-12 object-contain"
  />
</div>
        </div>
      </div>
    </section>
  );
}