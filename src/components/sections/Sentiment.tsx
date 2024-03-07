import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Info } from 'lucide-react'
import { SENTIMENT_ITEMS, progressData } from '@/constants'
import { TrendingUp, Newspaper, BarChart } from 'lucide-react';
import { Progress } from '../ui/progress'

const icons = [
  <TrendingUp className='text-white rounded-full m-4' />, <Newspaper className='text-white rounded-full m-4' />, <BarChart className='text-white rounded-full m-4' />
]

type CardProps = {
  icon: any;
  bg: string;
}
type Props = {}

const SentimentCard = ({ icon, bg }: CardProps) => {
  return (
    <>
      <div className='flex items-center justify-start gap-8 flex-col lg:flex-row lg:items-start'>
        <div className={`rounded-full ${bg}`}>
          {icon}
        </div>
        <div >
          <p className='font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et magnam sint in
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et magnam sint in non delectus quisquam dolorem, modi facilis! Libero sint alias cupiditate explicabo ipsum eaque nobis laudantium veritatis quis incidunt.
          </p>
        </div>
      </div>
    </>
  )
}


const Sentiment = (props: Props) => {
  return (
    <>
      <section className='max-container min-h-screen flex flex-col items-start justify-start md:gap-12 lg:py-14'>
        <div className='flex flex-col gap-5 items-center justify-start'>
          <h1 className='sectionTitle'>
            Sentiment
          </h1>
          <h3 className='flex items-center justify-start gap-2 text-md font-semibold text-gray-600'>
            Key Events <Info className='bg-gray-600 rounded-2xl text-white ' />
          </h3>
        </div>

        <Carousel className="w-full my-5">
          <CarouselContent className="-ml-1">
            {SENTIMENT_ITEMS.map((item, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-2/3">
                <div className="p-1">
                  <SentimentCard icon={icons[index]} bg={item.bg} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="mr-16 drop-shadow-2xl" />
        </Carousel>

        <div className='mb-5 sm:mb-0'>
          <h3 className='flex items-center justify-start gap-2 text-md font-semibold text-gray-600'>
            Analyst Estimates <Info className='bg-gray-600 rounded-2xl text-white ' />
          </h3>
        </div>

        <div className='flex justify-center items-center min-h-56 w-full lg:w-fit gap-14 sm:flex-row '>
          <div className='flex justify-center items-center md:p-5 md:m-5'>
            <h2 className='text-green-600 text-3xl md:text-5xl font-semibold'>
              76%
            </h2>
          </div>
          <div className='flex flex-col justify-center items-center gap-10'>
            {progressData.map((data, index) => (
              <div key={index} className='flex justify-center space-x-5 items-center'>
                <p className='text-slate-600'>
                  {data.action}
                </p>
                <div>
                  <Progress value={data.value} color={data.color} className='w-[100px] sm:w-[150px] md:w-[300px] lg:w-[400px] bg-slate-300' />
                </div>
                <p className='text-slate-600'>
                  {data.percentage}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </>
  )
}

export default Sentiment