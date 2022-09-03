import React from 'react'
import Link from 'next/link'

function Product_Card({category, title, price, img_url, slug}) {
  return (
    <div
    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-black rounded-md shadow-md hover:-translate-y-3 transition-all cursor-pointer "
  >
    <a className="block relative h-fit max-h-72 rounded overflow-hidden">
      <img
        alt="ecommerce"
        className="object-cover object-center w-full h-full block"
        src={
          img_url
            ? `http://localhost:1337${img_url}`
            : "https://dummyimage.com/422x262"
        }
      />
    </a>
    <div className="mt-4">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
        {category}
      </h3>
      <div className="flex justify-between">
        <h2 className="text-textColor title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">₹{price}</p>
      </div>
    </div>
    <Link href={`/product/${slug}`}>
      <a>
        <button className="flex mt-2 text-white bg-orange-500 border-0 py-1 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
          View
        </button>
      </a>
    </Link>
  </div>
  )
}

export default Product_Card