import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItems from '../components/ProductItems';
import Title from '../components/Title';
import { IoIosArrowDropright } from "react-icons/io";

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [collectionsProducts, setCollectionsProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortOption, setSortOption] = useState("relevant");

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        if (sortOption === "lowtohigh") {
            productsCopy = productsCopy.slice().sort((a, b) => a.price - b.price);
        } else if (sortOption === "hightolow") {
            productsCopy = productsCopy.slice().sort((a, b) => b.price - a.price);
        }

        setCollectionsProducts(productsCopy);
    };

    useEffect(() => {
        setCollectionsProducts(products);
        applyFilter();
    }, [products, category, subCategory, sortOption, search, showSearch]);

    // Erase Below Navbar Line

    return (
        <>
            {/* Left Side */}
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-4'>
                {/* Filters Options */}
                <div className='min-w-48'>
                    <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                        FILTERS <IoIosArrowDropright className={`h-5 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
                    </p>
                    <hr />
                    {/* Filters Category */}
                    <div style={{ borderRadius: '10px' }} className={`border border-gray-500 pl-5 py-3 mt-3 mb-2 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-2 text-sm font-medium'>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />MENS</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />WOMENS</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />KIDS</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Electronics'} onChange={toggleCategory} />ELECTRONICS</p>
                        </div>
                    </div>
                    {/* Filters Sub Category */}
                    <div style={{ borderRadius: '10px' }} className={`border border-gray-500 pl-5 py-3 my-3 mb-3 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-2 text-sm font-medium'>TYPE</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />TOP WEAR</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />BOTTOM WEAR</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />WINTER WEAR</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Footwear'} onChange={toggleSubCategory} />FOOT WEAR</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Laptops'} onChange={toggleSubCategory} />LAPTOPS</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Cameras'} onChange={toggleSubCategory} />CAMERAS</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Smartphones'} onChange={toggleSubCategory} />SMARTPHONES</p>
                            <p className='flex gap-2 hover:text-white'><input className='w-3' type="checkbox" value={'Formalwear'} onChange={toggleSubCategory} />FORMAL WEAR</p>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex-1">
                    {/* Header Section with Title and Sort Option */}
                    <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
                        <Title text1="All" text2="COLLECTIONS" />
                        <select className="border border-gray-500 bg-transparent text-sm px-2" onChange={(e) => setSortOption(e.target.value)}>
                            <option className="bg-[#242424]" value="relevant">Sort By: Relevant</option>
                            <option className="bg-[#242424]" value="lowtohigh">Sort By: Low To High</option>
                            <option className="bg-[#242424]" value="hightolow">Sort By: High To Low</option>
                        </select>
                    </div>

                    {/* Rendering Products */}
                    <div className="overflow-y-auto h-[calc(100vh-170px)] pr-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-6 ml-2">
                            {collectionsProducts.map((item) => (
                                <ProductItems key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collection;
