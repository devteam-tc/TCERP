import React from 'react';
import HomeVideoLanding from './HomeVideoLanding';
import OurMissionSection from './OurMissionSection';
import CardSection from './CardSection';
import ImportantModuleSection from './ImportantModuleSection';
import Testimonials from './Testimonials';
import RecordSection from './RecordSection';
import GalleryTabs from '../Gallery/GalleryTabs';
import PricingSection from './PricingSection';
import CallToActionSection from './CallToActionSection';
import OurPartnerSection from './OurPartnerSection';
import { testimonialsData, releavant } from '../../utils/constants';
import StickyButton from '../Home/StickyButton';
import FeatureCard from '../../pages/FeatureCard';

const Home = () => {
  return (
    <>
      
      <HomeVideoLanding />
      <OurMissionSection data={releavant.ourMission} />
      <CardSection />
      <ImportantModuleSection />
      <RecordSection />
      <FeatureCard />
      <Testimonials testimonialsData={testimonialsData} />
      <GalleryTabs />
      <PricingSection />
      <CallToActionSection />
      <OurPartnerSection />
      <StickyButton />
    </>
  );
};

export default Home;
