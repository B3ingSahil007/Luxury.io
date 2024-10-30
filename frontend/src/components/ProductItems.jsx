import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <>
            <Link className='text-gray-400 cursor-pointer mb-3' target='_blank' to={`/product/${id}`}>
                <div style={{ borderRadius: '15px' }} className="overflow-hidden">
                    <img className='hover:scale-110 transition ease-linear' src={image[0]} alt="Product Image" />
                </div>
                <p className='pt-2 text-sm'>{name}</p>
                <p className='text-base font-medium'>{currency} {price}</p>
            </Link>
        </>
    )
}

export default ProductItems
