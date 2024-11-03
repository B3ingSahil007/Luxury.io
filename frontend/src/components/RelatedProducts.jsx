import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            const productsCopy = products
                .filter((item) => item.category === category)
                .filter((item) => item.subCategory === subCategory)
                .slice(0, 6)

            // console.log(productsCopy)
            setRelated(productsCopy)
        }
    }, [products, category, subCategory])
    return (
        <>
            <div className='my-16'>
                <div className='text-center text-3xl py-2'>
                    <Title text1="RELATED" text2="PRODUCTS" />
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg-grid-cols-6 gap-3 gap-y-6'>
                    {related.map((item, index) => (
                        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts