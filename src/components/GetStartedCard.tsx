import { ArrowRight, BarChart } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {}

const GetStartedCard = (props: Props) => {
  return (
    <>
      <div className='flex justify-center items-center flex-col bg-blue-800 text-white p-10 rounded-2xl'>
        <h1 className='sectionTitle mb-8 text-center'>
          Get Started with KoinX for Free
        </h1>
        <p className='font-medium text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem hic ut quo veritatis animi, odio dolorem deleniti quisquam 
        </p>
        {/* <BarChart width={100} height={100} className='text-white my-14' /> */}
        <Image
        src="/office.png"
        alt='office'
        width={500}
        height={500}
        />
        <Button className='my-5 bg-white text-blue-950 font-semibold flex justify-center items-center gap-2 text-md hover:bg-white'>
          Get Started for FREE <ArrowRight />
        </Button>
      </div>
    </>
  )
}

export default GetStartedCard