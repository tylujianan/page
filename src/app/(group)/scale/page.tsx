import React from 'react'
import Hero from '@/components/Hero'
import { assets } from '@/assets/assets'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default async function Scale() {
  return (
    <div>
      <Hero imgUrl={assets.scale_image} altTxt="Scale" content='Scale' />
    </div>
  )
}
