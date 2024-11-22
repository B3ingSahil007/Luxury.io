import React from "react";
import { FaFileImport } from "react-icons/fa";

const Add = () => {
    const uploadAreas = Array.from({ length: 6 }, (_, index) => `image${index + 1}`);

    return (
        <form className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-lg shadow-lg flex flex-col w-full items-start gap-6">
            <div className="w-full">
                <p className="prata-regular mb-3 text-lg font-semibold">Upload Images :</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {uploadAreas.map((imageId, index) => (
                        // <label
                        //     key={imageId}
                        //     htmlFor={imageId}
                        //     className="upload-label flex flex-col items-center justify-center bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg hover:border-white transition duration-300 w-24 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
                        // >
                        //     <img
                        //         src={assets.upload_area}
                        //         alt={`Upload_Image_${index + 1}`}
                        //         className="w-12 sm:w-14 md:w-16 mb-2"
                        //     />
                        //     <input type="file" id={imageId} hidden />
                        //     <p className="text-xs sm:text-sm text-gray-400">Upload Image</p>
                        // </label>
                        <label
                            key={imageId}
                            htmlFor={imageId}
                            className="upload-label flex flex-col items-center justify-center bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg hover:border-white transition duration-300 w-24 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
                        >
                            <FaFileImport className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2" />
                            <input type="file" id={imageId} hidden />
                            <p className="text-xs sm:text-sm text-gray-400">Upload Image</p>
                        </label>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <p className="prata-regular mb-2 text-lg font-semibold">Product Name :</p>
                <input
                    className="w-full max-w-[500px] border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded"
                    type="text"
                    placeholder="Enter Product Name"
                    required
                />
            </div>

            <div className="w-full">
                <p className="prata-regular mb-2 text-lg font-semibold">Product Description :</p>
                <textarea
                    className="w-full max-w-[500px] border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded"
                    rows="4"
                    placeholder="Write Product Description"
                    required
                ></textarea>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <p className="prata-regular mb-2 text-lg font-semibold">Category :</p>
                    <select
                        className="w-full border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded"
                        required
                    >
                        <option value="Mens">Mens</option>
                        <option value="Womens">Womens</option>
                        <option value="Kids">Kids</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <div className="flex-1">
                    <p className="prata-regular mb-2 text-lg font-semibold">Sub Category :</p>
                    <select
                        className="w-full border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded"
                        required
                    >
                        <option value="Topwear">Top Wear</option>
                        <option value="Bottomwear">Bottom Wear</option>
                        <option value="Winterwear">Winter Wear</option>
                        <option value="Footwear">Foot Wear</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Cameras">Cameras</option>
                        <option value="Smartphones">Smart Phones</option>
                        <option value="Formalwear">Formal Wear</option>
                    </select>
                </div>
                <div className="flex-1">
                    <p className="prata-regular mb-2 text-lg font-semibold">Product Price :</p>
                    <input
                        className="w-full border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded"
                        type="number"
                        placeholder="Eg - 1000"
                        required
                    />
                </div>
            </div>

            <div className="w-full">
                <p className="prata-regular mb-2 text-lg font-semibold">Product Sizes :</p>
                <div className="flex gap-3">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                            key={size}
                            type="button"
                            className="prata-regular cursor-pointer border-2 border-gray-600 bg-transparent text-gray-200 px-3 py-2 rounded"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full flex items-center gap-4">
                <label htmlFor="bestseller" className="prata-regular text-lg font-semibold">
                    Best Seller :
                </label>
                <input
                    id="bestseller"
                    className="w-5 h-5 accent-green-500 focus:outline-none focus:ring focus:ring-green-500"
                    type="checkbox"
                />
            </div>

            <button
                type="submit"
                className="self-start px-6 py-2 bg-transparent border text-white text-lg font-semibold rounded shadow-lg hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-500 transition duration-300"
            >
                Submit Product
            </button>
        </form>
    );
};

export default Add;
