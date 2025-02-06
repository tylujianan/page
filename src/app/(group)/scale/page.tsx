import React from 'react'
import Hero from '@/components/Hero'
import {assets} from '../../../../assets/assets'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Scale'
}

export default function Scale() {
  return (
    <Hero imgUrl={assets.scale_image} altTxt="Scale" content='Scale'/>
  )
}
