import { ChevronsRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import TradingViewChart from '../TradingViewChart'

type Props = {}

const Chart = (props: Props) => {
  return (
    <>
      <section className='max-container flex flex-col items-start justify-start md:gap-12'>
        <div className='flex justify-start items-center gap-2'>
          Cryptocurrencies <ChevronsRight /> <span>Bitcoin</span>
        </div>

        <div className='flex justify-start items-center gap-2'>
          <span>Bitcoin</span> <span>BTC</span>
          <Button disabled={true} className='ml-6 text-white bg-slate-800'>
            Rank #1
          </Button>
        </div>

        <div className='flex justify-center items-center'>
          <TradingViewChart/>
        </div>

      </section>
    </>
  )
}

export default Chart