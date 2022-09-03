import React from 'react'

function Product_List_item({title, price, description}) {
  return (
    <div className="px-6 pt-6 overflow-x-auto flex justify-between w-full">
            <div className="flex items-center">
              <div className="bg-gray-100 dark:bg-gray-800  rounded-sm p-2.5">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/list5-svg1.svg"
                  alt="apple"
                />
              </div>
              <div className="pl-3">
                <div className="flex items-center text-sm leading-none">
                  <p className="font-semibold text-textColor ">
                    {title}
                  </p>
                  {/* <p className="text-indigo-700 dark:text-indigo-400  ml-3">
                    (ID 879-10-940)
                  </p> */}
                </div>
                <p className="text-xs md:text-sm leading-none text-textColor  mt-2">
                  {description?.substring(0, 50)}...
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold leading-none text-right text-textColor ">
              ₹{price}
              </p>
              <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                <p className="text-xs leading-3 text-green-700">Shipped</p>
              </div>
            </div>
          </div>
  )
}

export default Product_List_item