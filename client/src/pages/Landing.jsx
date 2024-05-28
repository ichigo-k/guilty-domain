import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/landing/Hero'
import Brands from '../sections/landing/Brands'
import SubHero from '../sections/landing/SubHero'
import Footer from '../components/Footer'
import Testimonial from '../sections/landing/Testimonial'
import FeaturedProducts from '../sections/landing/FeaturedProducts'

function Landing() {
  return (
    <>
      <Header/>
      <Hero/>
      <SubHero/>
      <FeaturedProducts/>
      <Testimonial/>
      <Brands/>
    </>
  )
}

export default Landing