import React from 'react'
import {assets} from '@/assets/assets'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Home'
}

export default function Page() {
  return (
    <Hero imgUrl={assets.home_image} altTxt="Home" content='Welcome to our website'/>
  )
}
