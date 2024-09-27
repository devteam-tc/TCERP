import React from 'react';
import ExpertiseSection from '../../components/ExpertiseSection';
import RecordSection from '../Home/RecordSection';
import OurPartnerSection from '../Home/OurPartnerSection';
import OurMissionSection from '../Home/OurMissionSection';
import { releavant } from '../../utils/constants';

const Aboutus = () => {
  return (
    <>
      {/* Pass the about_content as a prop to OurMissionSection */}
      <OurMissionSection relevantData={releavant.ourMission.about_content} />
      <ExpertiseSection />
      <RecordSection />
      <OurPartnerSection />
    </>
  );
}

export default Aboutus;
