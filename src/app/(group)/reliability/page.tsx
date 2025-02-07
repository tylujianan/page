import React from 'react'
import Hero from '@/components/Hero'
import {assets} from '@/assets/assets'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Reliability'
}

export default function Reliability() {
  return (
    <Hero imgUrl={assets.reliability_image} altTxt="Reliability" content='Reliability'/>
  )
}
