import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
    const { products, currency } = useContext(ShopContext)
    return (
        <>
            <div className='pt-4'>
                <div className='text-xl lg:text-2xl'>
                    <Title text1={"MY"} text2={"ORDERS"} />
                </div>
                <div>
                    {products.slice(1, 4).map((item, index) => (
                        <div key={index} className='py-3 text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20' src={item.image[0]} alt="Product_Image" />
                                <div>
                                    <p className='sm:text-base font-medium'>{item.name}</p>
                                    <div className='flex items-center gap-3 mt-2 text-base text-gray-400'>
                                        <p className='text-lg'>{currency}{item.price}</p>
                                        <p>Quantity : 1</p>
                                        <p>Size : M</p>
                                    </div>
                                    <p className='mt-2'>Date : <span className='text-gray-500'>20, November, 2024</span></p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className="flex items-center gap-2">
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className='text-sm md:text-base'>Ready To Ship</p>
                                </div>
                                <button className='btn bg-black border-gray-500 border-1 text-white px-10 text-sm'>TRACK ORDER</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Orders
