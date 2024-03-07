import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { aboutCardData } from '@/constants'

type AboutCardProps = {
  title: string;
  bg: string;
  img: string;
}
type Props = {}

const AboutCard = ({ title, bg, img }: AboutCardProps) => {
  return (
    <>
      <Card className={`my-4 sm:my-10 bg-gradient-to-r ${bg}`}>
        <CardContent className='flex justify-between py-8 items-center gap-5'>
          <div className='w-1/2'>
            <Image
              src={img}
              alt='about-img'
              width={200}
              height={200}
              className='rounded-lg'
            />
          </div>
          <div className='flex flex-col justify-between items-start gap-5'>
            <h2 className='text-2xl font-semibold text-white'>
              {title}
            </h2>
            <Button className='bg-white text-blue-950 hover:bg-white flex justify-center items-center gap-2'>
              Check Now <ArrowRight />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

const About = (props: Props) => {
  return (
    <>
      <div className='flex flex-col justify-start items-start gap-12'>
        <div>
          <h1 className='sectionTitle mb-5'>
            About Bitcoin
          </h1>
          <div>
            <h2 className="font-bold mb-2">
              What is Bitcoin?
            </h2>
            <p className="font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
            </p>
          </div>

          <div>
            <h2 className='font-bold mb-2 mt-4'>
              Lorem ipsum, dolor sit amet.
            </h2>
            <p className="font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
            </p>
            <br />
            <p className="font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
            </p>
            <br />
            <p className="font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
            </p>
          </div>

        </div>
        <div>
          <h1 className='sectionTitle mb-5'>
            Already Holding Bitcoin ?
          </h1>

          <div className='flex flex-col justify-start items-start gap-0 sm:gap-2 sm:flex-row'>
            {aboutCardData.map((data, index) => (
              <AboutCard key={index} bg={data.bg} title={data.title} img={data.img} />
            ))}
          </div>

          <div>
            <p className="font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure fugit? Possimus atque totam iste ab qui harum non corporis provident quo itaque asperiores, laudantium numquam reprehenderit quasi explicabo quae.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About