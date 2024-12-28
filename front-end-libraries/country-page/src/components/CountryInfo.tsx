type Props = {
  title: string
  value: string | number | string[]
}

export default function CountryInfo({ title, value }: Props) {
  return (
    <div className="flex justify-between mt-2 border-t-[0.5px] border-t-componentClr p-4">
      <h2>{title}</h2>
      <p className="font-semibold">
        {(typeof value === "string" && value) ||
          (typeof value === "number" && value)}
      </p>
    </div>
  )
}
