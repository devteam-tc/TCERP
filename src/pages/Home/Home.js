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

const Home = () => {
  return (
    <>
      <HomeVideoLanding />
      <OurMissionSection data={releavant.ourMission} /> 
      <CardSection />
      <ImportantModuleSection />
      <Testimonials testimonialsData={testimonialsData} />
      <RecordSection />
      <GalleryTabs />
      <PricingSection />
      <CallToActionSection />
      <OurPartnerSection />
    </>
  );
};

export default Home;
