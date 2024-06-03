import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/landing/Hero'
import Brands from '../sections/landing/Brands'
import SubHero from '../sections/landing/SubHero'
import Testimonial from '../sections/landing/Testimonial'
import FeaturedProducts from '../sections/landing/FeaturedProducts'
import Cta from '../sections/landing/Cta'
import Faq from '../sections/landing/Faq'
import Footer from "../components/Footer"
import DocumentTitle from '../utils/DocumentTitle'

function Landing() {
  DocumentTitle("Start exploring here")
  return (
    <>
      <Header/>
      <Hero/>
      <SubHero/>
      <FeaturedProducts/>
      <Testimonial/>
      <Faq/>
      <Brands/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default Landing