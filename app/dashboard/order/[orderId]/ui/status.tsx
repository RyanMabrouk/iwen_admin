import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle } from 'lucide-react'

type StatusProps = {
  status: "pending" | "paid" | "canceled"
}

export default function Status({ status }: StatusProps) {
  let color: "bg-red-600" | "bg-yellow-500" | "bg-color2"
  let icon: React.ReactNode
  let text: string

  switch (status) {
    case 'pending':
      color = "bg-yellow-500"
      icon = <Clock className="w-4 h-4" />
      text = "قيد الانتظار"
      break
    case 'paid':
      color = "bg-color2"
      icon = <CheckCircle className="w-4 h-4" />
      text = "مدفوع"
      break
    case 'canceled':
      color = "bg-red-600"
      icon = <XCircle className="w-4 h-4" />
      text = "ملغي"
      break
    default:
      color = "bg-yellow-500"
      icon = <Clock className="w-4 h-4" />
      text = status
  }

  return (
    <Badge  className={`text-lg text-gray-50 py-1 px-2 flex items-center  hover:${color} hover:opacity-50 w-fit gap-1 ${color}`}>
      {icon}
      <span className="font-normal">{text}</span>
    </Badge>
  )
}