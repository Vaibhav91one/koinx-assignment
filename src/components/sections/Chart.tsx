import { ArrowBigUp, ChevronsRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import TradingViewChart from '../TradingViewChart'
import { GetPrice } from '@/lib/actions/CoinGeckoActions'


const Chart = async () => {
  const Price = await GetPrice();
  return (
    <>
      <section className='max-container flex flex-col items-start justify-start gap-5 md:gap-12'>
        <div className='flex justify-start items-center gap-2 text-md'>
          Cryptocurrencies <ChevronsRight /> <span className='text-slate-600'>Bitcoin</span>
        </div>

        <div className='flex justify-start items-center gap-2'>
          <span className='sectionTitle'>Bitcoin</span> <span>BTC</span>
          <Button disabled={true} className='ml-6 text-white font-semibold text-md bg-slate-900'>
            Rank #1
          </Button>
        </div>

        <div className='flex justify-start items-center gap-10'>
          <div className='flex flex-col justify-start items-start gap-5'>
            <h1 className='font-bold text-3xl lg:text-4xl'>
              {Price ? `$ ${Price.bitcoin.usd}` : '$ 657565'}
            </h1>
            <h2 className='text-lg lg:text-2xl font-semibold'>
              {Price ? `₹ ${Price.bitcoin.inr}` : '₹ 557565'}
            </h2>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <div className='flex justify-center items-center gap-2 text-green-600' >
              <ArrowBigUp />
              <p>
                +50.02%
              </p>
            </div>
            <p className='text-slate-500'>
              (24H)
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <TradingViewChart />
        </div>

      </section>
    </>
  )
}

export default Chart