// src/components/Testimonials.jsx
import React from "react";

import TestoBitesImg from "../assets/Testobites.png";
import VitaRenewImg from "../assets/vita-renew.png";
import NerveFreedomImg from "../assets/NerveFreedom.png";
import Logo from "../assets/Rectangle 730.png";
import SocialMediaStrip from "../assets/socialmedia.png";

// Map product names to the correct imported image modules
const productImages = {
  "TestoBites": TestoBitesImg,
  "Vita Renew": VitaRenewImg,
  "Nerve Freedom": NerveFreedomImg,
};

export default function Testimonials() {
  const reviews = [
    {
      product: "TestoBites",
      stars: 5,
      text: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
      author: "Ryan R.",
    },
    {
      product: "Vita Renew",
      stars: 5,
      text: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
      author: "Jamie Fields",
    },
    {
      product: "Nerve Freedom",
      stars: 5,
      text: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
      author: "Anonymous",
    },
  ];

  const renderStars = (stars) => {
    return (
      <div className="text-yellow-500 text-lg flex">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              className={i < stars ? "text-yellow-500" : "text-gray-300"}
            >
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6">
          Verified Customer Testimonials
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-xl p-8 shadow-2xl relative overflow-hidden flex flex-col h-full"
              style={{ backgroundColor: "#F0FFFF" }}
            >
              {/* Product image + title + stars */}
              <div className="flex items-start mb-4">
                <div className="absolute top-0 left-0">
                  <img
                    src={productImages[r.product]}
                    alt={r.product}
                    className="w-16 h-16 object-contain"
                    style={{ margin: "-10px -10px 0 0" }}
                  />
                </div>

                <div className="flex flex-col ml-16 pl-2 pt-1">
                  <h4 className="font-bold text-lg text-gray-800">
                    {r.product}
                  </h4>
                  {renderStars(r.stars)}
                </div>
              </div>

              {/* Review text */}
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

        {/* Footer: logo, button, social strip */}
        <div className="mt-20 flex flex-col items-center">
          <img
            src={Logo}
            alt="HEALTH DESK Clinic Logo"
            className="h-16 mb-8 object-contain"
          />

          <button
            className="border border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-full transition duration-300 hover:border-blue-500 hover:text-blue-500 mb-4"
          >
            Follow Us
          </button>

          <div className="mt-6">
            <img
              src={SocialMediaStrip}
              alt="Social Media Icons"
              className="h-10 md:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
