import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TABS } from "@/constants"


type Props = {}

const Detail = (props: Props) => {
  return (
    <>
      <section className="max-container min-h-80 flex flex-col items-start justify-start md:gap-12 lg:py-14">
        <Tabs defaultValue="Overview" className="w-full">
          <TabsList className="flex items-start h-auto flex-wrap justify-start gap-8">
            {TABS.map((tab) => (
              <TabsTrigger value={tab.trigger} key={tab.trigger} > {tab.trigger}  </TabsTrigger>
            ))}

          </TabsList>
          {TABS.map((tab,index) => (
            <TabsContent value={tab.trigger} key={index}>
              {tab.description}
            </TabsContent>
          ))}

        </Tabs>
      </section>

    </>

  )
}

export default Detail