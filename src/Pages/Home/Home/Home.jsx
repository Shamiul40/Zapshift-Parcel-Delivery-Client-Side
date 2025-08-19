import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee';
import FeatureSection from '../FeatureSection/FeatureSection';
import MerchantSection from '../MerchantSection/MerchantSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <ClientLogoMarquee></ClientLogoMarquee>
      <FeatureSection></FeatureSection>
      <ReviewSection></ReviewSection>
      <MerchantSection></MerchantSection>
    </div>
  );
};

export default Home;