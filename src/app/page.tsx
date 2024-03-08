import { Button } from "@/components/ui/button";
import { GetTrending } from "@/lib/actions/CoinGeckoActions";
import Image from "next/image";
import Link from "next/link";

const CoinButtons = ({ item }: any) => {
  return (
    <>
      <Link href={`/${item.item.id}`} as={item}>
        <Button className="flex w-full justify-start items-center p-10 gap-2 bg-white text-blue-950  hover:text-white" >
          <Image
            src={item.item.thumb}
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <h2>
            {item.item.name}
          </h2>
        </Button>
      </Link>

    </>
  )
}

export default async function Home() {

  const data = await GetTrending();

  return (
    <>
      <section className="max-container my-20 flex gap-14 flex-col items-center justify-center bg-gradient-to-t from-white via-green-200 to-white">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5">
          {data.map((item: any, index: number) => (
            <CoinButtons item={item} key={index} />
          ))}
        </div>

        <p className="p-10" >
          Note: <span className="text-slate-500" >If you click on a button and see a blink this means that Rate Limiting was done on API. So, try clicking on the button after few seconds.</span>
        </p>

      </section>
    </>
  );
}
