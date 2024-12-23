type Props = {
  data: string | number
  label: string
}

export default function DataCard({ data, label }: Props) {
  return (
    <div className="w-fit h-full flex justify-center items-center gap-6 rounded-xl bg-gradientColor1">
      <div className="border-r-[0.5px] border-r-clrNotKnow2 font-bold px-5 py-3">
        <p className="text-clrNotKnow2">{label}</p>
      </div>
      <div className="p-6 pl-0 font-bold">
        <span>{data}</span>
      </div>
    </div>
  )
}
