import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/landing/Hero'
import Brands from '../sections/landing/Brands'
import SubHero from '../sections/landing/SubHero'

function Landing() {
  return (
    <>
      <Header/>
      <Hero/>
      <SubHero/>
      <Brands/>
    </>
  )
}

export default Landing