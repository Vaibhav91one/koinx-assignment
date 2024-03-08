
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { BITCOIN_INFO, TABS } from "@/constants"
import { Info } from "lucide-react"

const BitcoinInfo = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
       {BITCOIN_INFO.map((info, index) => (
         <div key={index} className="flex justify-between items-center">
           <p className="text-slate-500 text-sm">
             {info.title}
           </p>
           <p className="text-sm font-semibold">
             {info.value}
           </p>
         </div>
       ))}
     </div>
  );
 };

type Props = {}

const Detail = (props: Props) => {
  return (
    <>
      <section className="max-container flex flex-col items-start justify-start md:gap-12 lg:py-14">
        <Tabs defaultValue="Overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:flex items-start h-auto flex-wrap justify-start gap-8">
            {TABS.map((tab) => (
              <TabsTrigger value={tab.trigger} key={tab.trigger} > {tab.trigger}  </TabsTrigger>
            ))}

          </TabsList>
          {TABS.map((tab, index) => (
            <TabsContent value={tab.trigger} key={index}>
              <div className="pt-5" >
                <div>
                  <h1 className="sectionTitle my-6">
                    Performance
                  </h1>

                  <div className="flex flex-col gap-10 my-6">
                    <div className="flex justify-between items-center gap-4 lg:gap-14">
                      <div className="flex flex-col justify-start items-start gap-2">
                        <p className="text-sm whitespace-nowrap">
                          Today's Low
                        </p>
                        <p>
                          46,930.22
                        </p>
                      </div>

                      <div className="h-[6px] rounded-sm bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full"></div>

                      <div className="flex flex-col justify-start items-start gap-2">
                        <p className="text-sm whitespace-nowrap">
                          Today's High
                        </p>
                        <p>
                          46,930.22
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center gap-4 lg:gap-14">
                      <div className="flex flex-col justify-start items-start gap-2">
                        <p className="text-sm whitespace-nowrap">
                          52W Low
                        </p>
                        <p>
                          46,930.22
                        </p>
                      </div>

                      <div className="h-[6px] rounded-sm bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full"></div>

                      <div className="flex flex-col justify-start items-start gap-2">
                        <p className="text-sm whitespace-nowrap">
                          52W High
                        </p>
                        <p>
                          46,930.22
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h2 className='flex items-center justify-start gap-2 text-md font-semibold text-gray-600 my-5'>
                    Fundamentals <Info className='bg-gray-600 rounded-2xl text-white ' />
                  </h2>
                  <div className="py-4">
                  <BitcoinInfo/>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
                    <div className="flex justify-between items-center mt-5">
                      <p className="text-slate-500 text-sm">
                        All-Time High
                      </p>
                      <p className="flex justify-between items-end flex-col text-sm font-semibold">
                        $69,044.77 <span className="text-red-500"> -75.6% </span>
                        <span> Nov 10,2021 (about 1 year) </span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <p className="text-slate-500 text-sm">
                        All-Time Low
                      </p>
                      <p className="flex justify-between items-end flex-col text-sm font-semibold">
                        $69,044.77 <span className="text-green-500"> -75.6% </span>
                        <span> Nov 10,2021 (about 9 year) </span>
                      </p>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
            </TabsContent>
          ))}

        </Tabs>
      </section>

    </>

  )
}

export default Detail