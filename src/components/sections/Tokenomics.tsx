import { Circle, Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

const Tokenomics = (props: Props) => {
  return (
    <>
      <section className='max-container min-h-72 flex flex-col items-start justify-start md:gap-12 lg:py-14'>
        <div>
          <div>
          <h1 className='sectionTitle my-8'>
            Tokenomics
          </h1>
          <h2 className='font-semibold my-10 text-xl'>
            Initial Distribution
          </h2>
          </div>


          <div className='flex justify-start items-center gap-8 flex-col lg:flex-row'>
            <div className='w-20 h-20 p-24 rounded-full border-8 border-solid border-l-yellow-500 border-blue-500'>
            </div>
            <div className='flex flex-col justify-center items-start  gap-5 mb-5 lg:mb-0'>
              <div className='flex items-center justify-start gap-2'>
                <Circle className='text-white bg-blue-500 rounded-full' />
                <label htmlFor="">CrowdSale investors: </label>
                <p>80%</p>
              </div>
              <div className='flex items-center justify-start gap-2'>
                <Circle className='text-white bg-yellow-500 rounded-full' />
                <label htmlFor="">Foundation: </label>
                <p>20%</p>
              </div>
            </div>
          </div>

        </div>
        <div>
          <p className="font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quam fugit cupiditate magni, quas magnam et! Aspernatur suscipit quis numquam praesentium earum maiores error vitae, mollitia, odit magni porro eius?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quam fugit cupiditate magni, quas magnam et! Aspernatur suscipit quis numquam praesentium earum maiores error vitae, mollitia, odit magni porro eius?
          </p>
        </div>
      </section>
    </>
  )
}

export default Tokenomics