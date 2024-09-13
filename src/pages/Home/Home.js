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
const Home = () => {
  return (
   <>
   <HomeVideoLanding />
   <OurMissionSection />
   <CardSection />
   <ImportantModuleSection />
   <Testimonials testimonialsData={testimonialsData.car_testimonials}/>
   <RecordSection />
   <PricingSection />
   <CallToActionSection />
   <OurPartnerSection />
   </>
  )
}

export default Home
