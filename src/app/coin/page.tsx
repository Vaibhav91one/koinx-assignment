import GetStartedCard from '@/components/GetStartedCard'
import TrendingCoinsNoChart from '@/components/TrendingCoinsNoChart'
import About from '@/components/sections/About'
import Chart from '@/components/sections/Chart'
import Detail from '@/components/sections/Detail'
import Sentiment from '@/components/sections/Sentiment'
import SimilarCoins from '@/components/sections/SimilarCoins'
import Team from '@/components/sections/Team'
import Tokenomics from '@/components/sections/Tokenomics'
import TrendingCoins from '@/components/sections/TrendingCoins'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className="max-container padding-container flex flex-col  md:gap-28 lg:py-20 lg:flex-row">
                <div className="w-2/3">
                    <Chart />
                    <Detail />
                    <Sentiment />
                    <About />
                    <Tokenomics />
                    <Team />
                    <SimilarCoins />
                    <TrendingCoins />
                </div>
                <div>
                    <GetStartedCard />
                    <TrendingCoinsNoChart />
                </div>
            </div>
        </>
    )
}

export default page