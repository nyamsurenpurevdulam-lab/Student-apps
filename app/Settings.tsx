import { useState } from "react"
import {
  Info,
  HelpCircle,
  ShieldCheck,
  FileText,
  RefreshCcw,
  ChevronRight,
  ArrowLeft,
  LogOut,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const pages = {
  about: {
    icon: Info,
    title: "Апп-ийн тухай",
    body: "Энэхүү аппликейшн нь хялбаршуулсан бүртгэл хийх горимтой бөгөөд хэрэглэгчдэд зориулсан систем юм.",
  },
  help: {
    icon: HelpCircle,
    title: "Тусламж",
    body: "Асуулт, санал хүсэлт байвал манай дэмжлэгийн багтай холбогдоно уу.",
  },
  privacy: {
    icon: ShieldCheck,
    title: "Нууцлал",
    body: "Таны хувийн мэдээллийг бид гуравдагч этгээдэд дамжуулахгүй бөгөөд зөвхөн системийн үйл ажиллагаанд ашиглана.",
  },
  terms: {
    icon: FileText,
    title: "Нөхцөл",
    body: "Үйлчилгээг ашигласнаар та манай хэрэглээний нөхцөлийг зөвшөөрсөнд тооцогдоно.",
  },
  version: {
    icon: RefreshCcw,
    title: "Шинэ хувилбар",
    body: "Одоогийн хувилбар: 2.4.1. Шинэ шинэчлэлт гарсан үед энд мэдэгдэнэ.",
  },
}

type PageKey = keyof typeof pages

export default function SettingsPage(
  props: React.ComponentProps<typeof Card>
) {
  const [activePage, setActivePage] = useState<PageKey | null>(null)

  if (activePage) {
    const { icon: Icon, title, body } = pages[activePage]

    return (
      <Card className="w-full max-w-md mx-auto" {...props}>
        <CardHeader>
          <button
            onClick={() => setActivePage(null)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Буцах
          </button>

          <div className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-blue-600" />
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex h-40 items-center justify-center rounded-xl bg-blue-50">
            <Icon className="h-14 w-14 text-blue-300" />
          </div>

          <p className="text-sm leading-7 text-gray-600">{body}</p>

          <Button variant="outline" className="w-full gap-2">
            <LogOut className="h-4 w-4" />
            Системээс гарах
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto" {...props}>
      <CardHeader>
        <CardTitle>Тохиргоо</CardTitle>
        <CardDescription>
          Аппликейшны талаарх мэдээлэл
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {(Object.entries(pages) as [PageKey, (typeof pages)[PageKey]][]).map(
          ([key, page]) => {
            const Icon = page.icon

            return (
              <button
                key={key}
                onClick={() => setActivePage(key)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 transition hover:bg-blue-50"
              >
                <span className="flex items-center gap-3 text-sm text-gray-700">
                  <Icon className="h-5 w-5 text-blue-600" />
                  {page.title}
                </span>

                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            )
          }
        )}

        <Button variant="outline" className="mt-4 w-full gap-2">
          <LogOut className="h-4 w-4" />
          Системээс гарах
        </Button>
      </CardContent>
    </Card>
  )
}