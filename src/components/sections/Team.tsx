import { teamCardsData } from '@/constants';
import Image from 'next/image'
import React from 'react'

type Props = {}
type TeamCardProps = {
  name: string;
  img: string;
}

const TeamCard = ({ name, img }: TeamCardProps) => {
  return (
    <div className='flex justify-start items-center gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div>
          <Image
            src={img}
            alt='profile'
            width={300}
            height={300}
            className='rounded-lg transition-all hover:shadow-[0px_0px_30px_rgba(0,0,0,_0.7)]'
          />
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='font-semibold'>
            {name}
          </h2>
          <p className='text-slate-500 text-sm whitespace-nowrap'>
            Designation here
          </p>
        </div>
      </div>
      <div>
        <p className='font-medium mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit id fugit atque natus ipsa nulla possimus facere saepe? Id suscipit commodi soluta distinctio officia quos rem pariatur quisquam autem.
        </p>
      </div>
    </div>
  )
}

const Team = (props: Props) => {
  return (
    <>
      <section className='max-container min-h-screen flex flex-col items-start justify-start md:gap-12 lg:py-14'>
        <div>
          <h1 className='sectionTitle my-8'>
            Team
          </h1>
          <p className='font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia officiis assumenda eveniet. Ratione sapiente voluptatibus et doloribus, quisquam ea quibusdam quas ipsum, totam aut obcaecati impedit error, unde nisi.
          </p>
        </div>
        <div className='flex flex-col justify-start items-start my-5 gap-10'>
          {teamCardsData.map((data, index) => (
            <TeamCard key={index} name={data.name} img={data.img} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Team