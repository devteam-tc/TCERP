import React from 'react'
import HomeVideoLanding from './HomeVideoLanding'
import OurMissionSection from './OurMissionSection'
import CardSection from './CardSection'
import Testimonials from './Testimonials'
import { testimonialsData } from '../../utils/constants'

const Home = () => {
  return (
   <>
   <HomeVideoLanding />
   <OurMissionSection />
   <CardSection />
   <Testimonials testimonialsData={testimonialsData.car_testimonials}/>
   </>
  )
}

export default Home
