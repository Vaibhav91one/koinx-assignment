import { Button } from "@/components/ui/button";
import { GetTrending } from "@/lib/actions/CoinGeckoActions";
import Image from "next/image";
import Link from "next/link";

const CoinButtons = ({ item }: any) => {
  return (
    <>
      <Link href={`/${item.item.id}`} as={item}>
        <Button className="flex w-full justify-start items-center gap-2 bg-white text-blue-950 border border-blue-950 hover:text-white" >
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
      <section className="max-container my-20 flex gap-10 flex-col items-center justify-center">

        <h1 className="sectionTitle border-b-2 border-blue-950">
          Trending Coins
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
          {data.map((item: any, index: number) => (
            <CoinButtons item={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
