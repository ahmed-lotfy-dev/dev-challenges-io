type Props = {}

export default function Header({}: Props) {
  return (
    <div className="text-center relative p-10 overflow-hidden md:col-span-2 lg:col-span-3">
      <img
        src="/images/vector.svg"
        className="absolute right-[-4rem]  top-14"
        alt=""
      />
      <h1 className="mb-5 mt-[4rem] text-[2rem] font-bold">Our Collection</h1>
      <p className="sm:max-w-[50%] md:max-w-[55%] m-auto">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </div>
  )
}
