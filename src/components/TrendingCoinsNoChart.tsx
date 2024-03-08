import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

const TrendingList = ({ item }: any) => {
  return (
    <div>
      <div className='flex justify-between items-center gap-2 mb-4'>
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
        </div>
        <div>
          <p className={`font-semibold ${item.item.data.price_change_percentage_24h.usd > 0 ? 'text-green-700' : 'text-red-700'}`}>
            {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}

const TrendingCoinsNoChart = ({ SimilarCoinsData }: any) => {
  return (
    <div className='mt-12 flex flex-col justify-center items-center'>
      <h1 className='sectionTitle mb-20'>
        Trending Coins (24h)
      </h1>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[200px]">
          {SimilarCoinsData?.map((item: any, index: number) => (
            <CarouselItem key={index} className="pt-1 basis-1/2 md:basis-1/3">
              <div className="p-1">
                <TrendingList item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default TrendingCoinsNoChart