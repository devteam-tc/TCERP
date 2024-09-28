import React from 'react'
import HomeVideoLanding from './HomeVideoLanding'
import OurMissionSection from './OurMissionSection'
import CardSection from './CardSection'
import RecordSection from './RecordSection'
import PricingSection from './PricingSection'
import CallToActionSection from './CallToActionSection'
import OurPartnerSection from './OurPartnerSection'
import ImportantModuleSection from './ImportantModuleSection'
import { testimonialsData } from '../../utils/constants'
import Testimonials from './Testimonials'
import GalleryTabs from '../Gallery/GalleryTabs'
const Home = () => {
  return (
   <>
   <HomeVideoLanding />
   <OurMissionSection />
   <CardSection />
   <ImportantModuleSection />
   <Testimonials testimonialsData={testimonialsData}/>
   <RecordSection />
   <GalleryTabs/>
   <PricingSection />
   <CallToActionSection />
   <OurPartnerSection />
   </>
  )
}

export default Home
