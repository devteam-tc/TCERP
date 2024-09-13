import React from 'react'
import HomeVideoLanding from './HomeVideoLanding'
import OurMissionSection from './OurMissionSection'
import CardSection from './CardSection'
import RecordSection from './RecordSection'
import PricingSection from './PricingSection'
import CallToActionSection from './CallToActionSection'
import OurPartnerSection from './OurPartnerSection'
import ImportantModuleSection from './ImportantModuleSection'
import Testimonials from './Testimonials'
import { testimonialsData } from '../../utils/constants'

const Home = () => {
  return (
   <>
   <HomeVideoLanding />
   <OurMissionSection />
   <CardSection />
   <ImportantModuleSection />
   <RecordSection />
   <PricingSection />
   <CallToActionSection />
   <OurPartnerSection />
   <Testimonials testimonialsData={testimonialsData.car_testimonials}/>
   </>
  )
}

export default Home
