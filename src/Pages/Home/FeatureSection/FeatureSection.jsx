import React from "react";

import parcelImg from "../../../assets/transit.png"; 
import trackingImg from "../../../assets/vector.png"; 
import safeImg from "../../../assets/vector.png";         
import supportImg from "../../../assets/vector.png";   

const FeatureSection = () => {
  const sections = [
    {
      image: parcelImg,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: safeImg,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: supportImg,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="w-full md:py-6 space-y-12">
      {sections.map((item, index) => (
        <div
          key={index}
          className="flex bg-white shadow flex-col md:flex-row items-center gap-"
        >
          {/* Left image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2xl shadow-lg max-h-80 object-contain"
            />
          </div>

          {/* Vertical line */}
          <div className="hidden md:block w-1 border-1 border-dashed bg-gray-300 h-40"></div>
          {/* 🔑 Changed: vertical line instead of horizontal, using bg color */}

          {/* Right text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
