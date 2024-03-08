import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="max-container flex flex-col items-center justify-center md:gap-12 lg:py-14">
    <Button className="bg-blue-600 font-bold">
      <Link href="/coin">
        Go to Coin Page
      </Link>
     </Button>
    </section>
    </>
  );
}
