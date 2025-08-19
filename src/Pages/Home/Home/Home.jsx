import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee';
import FeatureSection from '../FeatureSection/FeatureSection';
import MerchantSection from '../MerchantSection/MerchantSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <ClientLogoMarquee></ClientLogoMarquee>
      <FeatureSection></FeatureSection>
      <MerchantSection></MerchantSection>
    </div>
  );
};

export default Home;