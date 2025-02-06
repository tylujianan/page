import React from 'react'
import Hero from '@/components/Hero'
import {assets} from '../../../../assets/assets'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Performance'
}

export default function Performance() {
  return (
    <Hero imgUrl={assets.performance_image} altTxt="Performance" content='Performance'/>
  )
}
