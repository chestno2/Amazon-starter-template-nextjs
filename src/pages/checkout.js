import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../Components/CheckoutProduct'
import Header from "../Components/Header"
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from "react-currency-formatter"
function Checkout() {
    const total = useSelector(selectTotal)
    const items = useSelector(selectItems)
    return (
        <div className=" bg-gray-100 " >
            <Header />
            <main className="bg-gray-100 lg:flex max-w-screen-2xl mx-auto " >
                <div className="  flex-grow m-5 shadow-md " >
                    <Image src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain" />
                    <div className="  flex flex-col  p-5 space-y-10 bg-white">
                        
                        <h1 className=" text-3xl  border-b pb-4 " >{items.length===0?"Your Amazon Basket Is empty":"Shopping Basket"}</h1>

                    </div>
                    {items.map((item,i)=>(
                        <div className=""  >
                        <CheckoutProduct 
                         key={i}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.image}
                        hasPrime={item.hasPrime}
                        image={item.image}

                        />
                        </div>
                    ))}
                </div>
                  {/* Right  */}
                  <div className=" flex flrx-col bg-white p-10 shadow-md  " >
                      {items.length>0 &&(
                          <>
                          <h2>SubTotal ({items.length} items):{" "}
                          <span className=" font-bold " >
                              <Currency  quantity={total} />
                          </span>
                          </h2>
                  
                          </>
                      )}
                  </div>
            </main>
        </div>
    )
}

export default Checkout
