import GetStartedCard from '@/components/GetStartedCard'
import TrendingCoinsNoChart from '@/components/TrendingCoinsNoChart'
import About from '@/components/sections/About'
import Chart from '@/components/sections/Chart'
import Detail from '@/components/sections/Detail'
import Sentiment from '@/components/sections/Sentiment'
import SimilarCoins from '@/components/sections/SimilarCoins'
import Team from '@/components/sections/Team'
import Tokenomics from '@/components/sections/Tokenomics'
import { GetPrice, GetTrending } from '@/lib/actions/CoinGeckoActions'
import React from 'react'

type Props = {}

const page = async(props: Props) => {
    
    const similarCoinsData = await GetTrending();

    return (
        <>
            <div className="max-container padding-container flex flex-col justify-center items-center lg:justify-start lg:items-start  md:gap-28 lg:py-20 lg:flex-row">
                <div className="lg:w-2/3">
                    <Chart />
                    <Detail />
                    <Sentiment />
                    <About />
                    <Tokenomics />
                    <Team />
                    <SimilarCoins SimilarCoinsData={similarCoinsData} />
                </div>
                <div className='flex flex-col'>
                    <GetStartedCard />
                    <TrendingCoinsNoChart SimilarCoinsData={similarCoinsData} />
                </div>
            </div>
        </>
    )
}

export default page