import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const BestSellers = () => {
    const { products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([])

    useEffect(() => {
        const bestProducts = products.filter((item) => (item.bestseller));
        setBestSellers(bestProducts.slice(0, 5))
    }, [products]);

    return (
        <>
            <div className="my-10">
                <div className="text-center text-3xl py-8">
                    <Title text1={'BEST'} text2={'SELLERS'} />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Our best sellers bring together timeless style and modern flair, loved for their versatility and quality. Each piece is crafted to elevate any look, featuring classic designs, comfortable fits, and premium materials. Explore our most popular items and find your next wardrobe favorite!
                    </p>
                </div>
                {/* Rendering Products */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {bestSellers.map((item, index) => (
                        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default BestSellers
