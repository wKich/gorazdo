import React from 'react';
import WelcomeTitle from '../components/organisms/WelcomeTitle';
import PromoOffers from '../components/organisms/PromoOffers';

const Home = props => {
  return (
    <>
      <WelcomeTitle />
      <PromoOffers />
    </>
  );
};

export { Home };
