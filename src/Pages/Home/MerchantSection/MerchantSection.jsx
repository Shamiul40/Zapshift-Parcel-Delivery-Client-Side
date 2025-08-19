import React from "react";
import merchantImg from "../../../assets/location-merchant.png"; // replace with your image

const MerchantSection = () => {
  return (
    <section data-aos="flip-up" className="w-full px-6 bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] md:px-12 py-8 my-8 bg-[#03373D]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Left text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed mb-6">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. 
            Pathao courier delivers your parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#CAEB66] text-black px-6 py-3 rounded-full font-medium h transition">
              Get Started
            </button>
            <button className="bg-transparent border text-[#CAEB66] px-6 py-3 rounded-full font-medium transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={merchantImg}
            alt="Merchant"
            className="rounded-2xl shadow-lg max-h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MerchantSection;
