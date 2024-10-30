import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

const Product = () => {
    const { productId } = useParams();
    const { products, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const selectedProduct = products.find(item => item._id === productId);
        if (selectedProduct) {
            setProductData(selectedProduct);
            setImage(selectedProduct.image[0]);
        }
    }, [products, productId]);

    return productData ? (
        <>
            <div className='transition-opacity ease-in duration-500 opacity-100'>
                <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                    {/* Product Images */}
                    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                        {/* Thumbnails Container */}
                        <div className='flex sm:flex-col overflow-x-scroll sm:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 sm:h-[500px] justify-start sm:w-[18.7%] w-full'>
                            {productData.image.map((img, index) => (
                                <img onClick={() => setImage(img)} src={img} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer mx-1' alt="More Images Of Products" />
                            ))}
                        </div>
                        {/* Main Image Display */}
                        <div className='w-full sm:w-[80%]'>
                            <img className='w-full h-auto' src={image} alt="Product Image" />
                        </div>
                    </div>
                    {/* Product Information */}
                    <div className='flex-1'>
                        <h1 className='font-medium text-2xl mt-2 prata-regular'>{productData.name}</h1>
                        <div className='flex items-center gap-1 mt-1'>
                            <IoStar className='w-3.5' />
                            <IoStar className='w-3.5' />
                            <IoStar className='w-3.5' />
                            <IoStar className='w-3.5' />
                            <IoIosStarOutline className='w-3.5' />
                            <p className='pl-1'>( 122 )</p>
                        </div>
                        <p className='mt-3 text-3xl font-medium'>{currency}{productData.price}</p>
                        <p className='mt-3 text-gray-500 md:w-4/5'>{productData.description}</p>
                        {/* Product Size */}
                        {productData.sizes && productData.sizes.length > 0 && (
                            <div className='flex flex-col gap-4 my-8'>
                                <p>Select Size :</p>
                                <div className='flex gap-2'>
                                    {productData.sizes.map((item, index) => (
                                        <button
                                            onClick={() => setSize(item)}
                                            className={`border-1 border-gray-500 py-1 px-4 -mt-4 bg-gray-800 hover:bg-gray-500 hover:text-white ${item === size ? 'bg-gray-400 text-black' : ''}`}
                                            key={index}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* Product Specifications */}
                        {productData.specifications && (
                            <div className='my-8'>
                                <h3 className='font-medium text-lg'>Specifications:</h3>
                                <ul className='list-disc list-inside'>
                                    {Object.entries(productData.specifications).map(([key, value], index) => (
                                        <li key={index} className='text-gray-500 capitalize'>
                                            <span className='font-semibold'>{key.replace(/_/g, ' ')} :</span>
                                            {typeof value === 'object' ? (
                                                Array.isArray(value) ? (
                                                    ` ${value.join(', ')}`
                                                ) : (
                                                    <ul className='list-disc list-inside ml-4'>
                                                        {Object.entries(value).map(([subKey, subValue]) => (
                                                            <li key={subKey} className='text-gray-500'>
                                                                <span className='font-semibold'>{subKey.replace(/_/g, ' ')} :</span> {subValue}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )
                                            ) : (` ${value}`)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div>
                            <button className='btn bg-black border-gray-500 border-1 text-white px-8 text-sm mr-2 py-2'>ADD TO CART</button>
                            <hr className='mt-3 sm:w-4/5' />
                            <div className='text-sm text-gray-500 mt-3 flex flex-col gap-1'>
                                <p>100% Original Product.</p>
                                <p>Cash On Delivery Is Available On This Product.</p>
                                <p>Easy Return And Exchange Policy Within 7 Days.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Description & Review Section */}
                <div className='mt-20'>
                    <div className='flex'>
                        <b className='border px-3 py-3 text-sm'>Description</b>
                        <p className='border px-3 py-3 text-sm'>Reviews ( 122 )</p>
                    </div>
                    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                        <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div className='opacity-40 text-center my-20'>
            <h1>Item Is Not Stored In Product Data</h1>
        </div>
    );
}

export default Product;
