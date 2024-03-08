import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'

type Props = {}

const CarouselItemComponent = ({ item }: any) => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <div className='flex justify-start items-center gap-2 mb-4'>
        <Image
          src={item.item.thumb}
          alt='logo'
          width={20}
          height={20}
        />
        <h3 className='font-bold text-xl'>
          {item.item.symbol}
        </h3>
        <p className={`font-semibold ${item.item.data.price_change_percentage_24h.usd > 0 ? 'text-green-700' : 'text-red-700'}`}>
          {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
        </p>
      </div>
      <h1 className='text-xl mb-4'>
        {item.item.data.price}
      </h1>
      <Image
        src={item.item.data.sparkline}
        alt='sparkline'
        width={200}
        height={200}
      />
    </div>
  );
};

const SimilarCoins = ( {SimilarCoinsData}: any) => {

  return (
    <section className='max-container py-10 gap-2 w-[300px] sm:w-[500px] md:w-[900px] lg:w-full flex flex-col items-start justify-start md:gap-8'>
      <div className='flex flex-col gap-5 items-center justify-start'>
        <h1 className='sectionTitle'>
          You May Also Like
        </h1>
      </div>

      <Carousel className="w-full ml-5">
        <CarouselContent className="-ml-1">
          {SimilarCoinsData?.map((item: any, index: number) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/3">
              <CarouselItemComponent key={index} item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="mr-16 drop-shadow-2xl" />
      </Carousel>

      <div className='flex flex-col gap-5 items-center justify-start'>
        <h1 className='sectionTitle'>
          Trending Coins (24h)
        </h1>
      </div>

      <Carousel className="w-full ml-5">
        <CarouselContent className="-ml-1">
          {SimilarCoinsData?.map((item: any, index: number) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/3">
              <CarouselItemComponent key={index} item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="mr-16 drop-shadow-2xl" />
      </Carousel>
    </section>
  )
}

export default SimilarCoins