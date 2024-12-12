import { useQuery } from "@tanstack/react-query"
import Product from "../Product/Product"
import { useState } from "react"

type Props = {}

export type ProductType = {
  id: number
  name: string
  image: string
  price: string
  rating: number
  votes: number
  popular: boolean
  available: boolean
}

export default function ProductList({}: Props) {
  const [allProducts, setAllProducts] = useState(true)
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      ).then((res) => res.json()),
  })

  if (isPending) return "Loading..."

  if (error) return `An error has occurred: ${error.message}`

  const handleAvailability = () => {
    setAllProducts(!allProducts)
  }

  const availableProducts = products.filter(
    (product: ProductType) => product.available
  )
  return (
    <div className="m-auto">
      <div className="flex w-[50%] m-auto justify-center items-center gap-10 font-bold mb-10">
        <button
          className={`${
            allProducts &&
            "bg-[var(--btn-active-clr)] px-5 py-2 rounded-md transition-all"
          }`}
          onClick={handleAvailability}
        >
          All Products
        </button>
        <button
          className={`${
            !allProducts &&
            "bg-[var(--btn-active-clr)] px-5 py-2 rounded-md transition-all"
          }`}
          onClick={handleAvailability}
        >
          {" "}
          Available Now
        </button>
      </div>
      <div className="grid grid-cols-12">
        {allProducts
          ? products.map((product: ProductType) => (
              <Product product={product} />
            ))
          : availableProducts.map((product: ProductType) => (
              <Product product={product} />
            ))}
      </div>
    </div>
  )
}
