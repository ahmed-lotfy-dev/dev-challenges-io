import type { ProductType } from "../ProductList/ProductList"
type Props = { product: ProductType }

export default function Product({ product }: Props) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 w-full m-auto text-center mb-16 relative">
      <div className="w-full">
        <img
          className="rounded-3xl m-auto w-[50%] md:w-[75%]"
          src={product.image}
          alt=""
        />
      </div>
      {product.popular && (
        <p className=" absolute top-[6%] left-[30%] md:top-[6%] md:left-[16%] lg:left-[5rem] rounded-2xl bg-[var(--popular-bg-clr)] text-sm text-black px-3 py-1">
          Popular
        </p>
      )}
      <div className="flex justify-between items-center w-[50%] md:w-[75%] m-auto mt-3">
        <p className="font-bold text-xl mb-2">{product.name}</p>
        <p className="bg-[var(--price-bg-clr)] px-3 py-1 rounded-md text-black text-sm">
          {product.price}
        </p>
      </div>
      <div className="">
        {product.rating ? (
          <div className="flex w-[50%] md:w-[75%] m-auto justify-between mt-1">
            <div className="flex">
              <img src="/images/Star_fill.svg" />
              <p className="ml-1">{product.rating}</p>
              <span className="ml-2 text-gray-500">
                ({product.votes} votes)
              </span>
            </div>
            <div>
              {!product.available && (
                <span className="text-orange-600 text-[0.95rem] font-bold">
                  Sold Out
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex w-[50%] m-auto">
            <img src="/images/Star.svg" />
            <p className="ml-1">No ratings</p>
          </div>
        )}
        <img src="/images/star" alt="" />
      </div>
    </div>
  )
}
