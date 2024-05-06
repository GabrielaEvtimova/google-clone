import { GOOGLE_LOGO, LOGO_ALT_TEXT } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

export default function Logo({width, height}) {
  return (
    <Image
    src={GOOGLE_LOGO}
    alt={LOGO_ALT_TEXT}
    width={width}
    height={height}
    priority
    style={{ width: "auto" }}
  />
  )
}
