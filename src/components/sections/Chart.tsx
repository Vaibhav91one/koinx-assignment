import { ArrowBigUp, ChevronsRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import TradingViewChart from '../TradingViewChart'
import { GetPrice } from '@/lib/actions/CoinGeckoActions'
import { redirect } from 'next/navigation'
import Link from 'next/link'

type Props = {
  id: any;
  CoinInfo: any
}

const Chart = async ({ id, CoinInfo }: Props) => {

  const Price = await GetPrice(id);

  if (!CoinInfo || !Price) {
    return redirect("/")
  }

  const name = CoinInfo.name;
  const ChartSymbol: string = (CoinInfo.tickers[0].base + CoinInfo.tickers[0].target).toString();
  const symbol = CoinInfo.symbol;
  const rank = CoinInfo.market_cap_rank;
  const destructurePrice = Price[id];
  const inrPrice = destructurePrice['inr'];
  const usdPrice = destructurePrice['usd'];

  return (
    <>
      <section className='max-container flex flex-col items-start justify-start gap-5 md:gap-12'>
        <div className='flex justify-start items-center gap-2 text-md'>
          <Link href="/">
            Cryptocurrencies
          </Link> <ChevronsRight /> <span className='text-slate-600'>{name}</span>
        </div>

        <div className='flex justify-start items-center gap-2'>
          <span className='sectionTitle'>{name}</span> <span>{symbol}</span>
          <Button disabled={true} className='ml-6 text-white font-semibold text-md bg-slate-900'>
            Rank #{`${rank}`}
          </Button>
        </div>

        <div className='flex justify-start items-center gap-10'>
          <div className='flex flex-col justify-start items-start gap-5'>
            <h1 className='font-bold text-3xl lg:text-4xl'>
              {Price ? `$ ${usdPrice}` : '$ 657565'}
            </h1>
            <h2 className='text-lg lg:text-2xl font-semibold'>
              {Price ? `₹ ${inrPrice}` : '₹ 557565'}
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
          <TradingViewChart ChartSymbol={ChartSymbol} />
        </div>

      </section>
    </>
  )
}

export default Chart