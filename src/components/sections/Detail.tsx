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
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex items-start justify-start gap-8">
        {TABS.map((tab) => (
          <TabsTrigger value={tab.trigger} key={tab.trigger} > {tab.trigger}  </TabsTrigger>
        ))}

      </TabsList>
      {TABS.map((tab) => (
        <TabsContent value={tab.trigger}>
          {tab.description}
        </TabsContent>
      ))}

    </Tabs>
  )
}

export default Detail