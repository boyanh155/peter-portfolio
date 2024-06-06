import HeroBanner from '@/components/marketing/hero-banner'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    params:{locale: string}
}

const HomePage = ({params:{locale}}: Props) => {
  return (
    <div >
      <HeroBanner/>
      
    </div>
  )
}

export default HomePage