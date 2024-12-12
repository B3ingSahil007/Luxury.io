import React, { useState } from "react";
import { FaFileImport } from "react-icons/fa";
import { toast } from 'react-toastify'
import axios from "axios";
import { backendURL } from "../App";

const Add = ({ token }) => {
    const [images, setImages] = useState(
        Object.fromEntries(
            Array.from({ length: 6 }, (_, i) => [`image${i + 1}`, false])
        )
    );

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Men")
    const [subCategory, setSubCategory] = useState("Topwear")
    const [bestseller, setBestseller] = useState(false)
    const [sizes, setSizes] = useState([]);
    const [loading, setLoading] = useState(false);

    const uploadAreas = Array.from({ length: 6 }, (_, i) => `image${i + 1}`);

    const handleImageChange = (e, imageId) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImages(prev => ({
                ...prev,
                [imageId]: imageURL
            }));
        }
    };

    const onSubmithandle = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("sizes", JSON.stringify(sizes))
            formData.append("bestseller", bestseller)

            Object.keys(images).forEach((imageId) => {
                const fileInput = document.getElementById(imageId);
                if (fileInput && fileInput.files[0]) {
                    formData.append(imageId, fileInput.files[0]);
                }
            });

            const response = await axios.post(backendURL + '/api/product/add', formData, { headers: { token } })
            // console.log("Response :", response.data);

            if (response.data.success) {
                toast.success(response.data.message);
                setName("");
                setDescription("");
                setPrice("");
                setCategory("Mens");
                setSubCategory("Topwear");
                setBestseller(false);
                setSizes([]);
                setImages(
                    Object.fromEntries(
                        Array.from({ length: 6 }, (_, i) => [`image${i + 1}`, false])
                    )
                );

                Object.keys(images).forEach((imageId) => {
                    const fileInput = document.getElementById(imageId);
                    if (fileInput) {
                        fileInput.value = "";
                    }
                });
            } else {
                toast.error(response.data.message || "Something Went Wrong !!");
            }
        } catch (error) {
            console.error("Error :", error);
            toast.error(error.message + "Product Is Not Added !!")
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmithandle} className="p-6 bg-gradient-to-r from-gray-900 to-gray-600 text-gray-200 rounded-lg shadow-lg flex flex-col w-full items-start gap-6">
            <h2 className="text-2xl">Add Products :</h2>
            <div className="w-full">
                <p className="prata-regular mb-3 text-lg font-semibold">Upload Images :</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {uploadAreas.map((imageId) => (
                        <label key={imageId} htmlFor={imageId} className="upload-label flex flex-col items-center justify-center bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg hover:border-white transition duration-300 w-24 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                            {images[imageId] ? (
                                <img src={images[imageId]} alt={`Uploaded ${imageId}`} className="w-full h-full object-cover rounded-lg" />
                            ) : (
                                <>
                                    <FaFileImport className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-400">Upload Image</p>
                                </>
                            )}
                            <input type="file" id={imageId} hidden onChange={(e) => handleImageChange(e, imageId)} />
                        </label>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <p className="prata-regular mb-2 text-lg font-semibold">Product Name :</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-[500px] border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded" type="text" placeholder="Enter Product Name" required />
            </div>
            <div className="w-full">
                <p className="prata-regular mb-2 text-lg font-semibold">Product Description :</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-[500px] border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded" rows="4" placeholder="Write Product Description" required ></textarea>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <p className="prata-regular mb-2 text-lg font-semibold">Category :</p>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded" required >
                        <option className="bg-gray-700" value="Mens">Mens</option>
                        <option className="bg-gray-700" value="Womens">Womens</option>
                        <option className="bg-gray-700" value="Kids">Kids</option>
                        <option className="bg-gray-700" value="Electronics">Electronics</option>
                    </select>
                </div>
                <div className="flex-1">
                    <p className="prata-regular mb-2 text-lg font-semibold">Sub Category :</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className="w-full border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded" required >
                        <option className="bg-gray-700" value="Topwear">Top Wear</option>
                        <option className="bg-gray-700" value="Bottomwear">Bottom Wear</option>
                        <option className="bg-gray-700" value="Winterwear">Winter Wear</option>
                        <option className="bg-gray-700" value="Footwear">Foot Wear</option>
                        <option className="bg-gray-700" value="Laptops">Laptops</option>
                        <option className="bg-gray-700" value="Cameras">Cameras</option>
                        <option className="bg-gray-700" value="Smartphones">Smart Phones</option>
                        <option className="bg-gray-700" value="Formalwear">Formal Wear</option>
                    </select>
                </div>
                <div className="flex-1">
                    <p className="prata-regular mb-2 text-lg font-semibold">Product Price :</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-full border border-gray-600 bg-transparent text-gray-200 px-4 py-2 rounded" type="number" placeholder="Eg - 1000" required />
                </div>
            </div>
            <div className="w-full">
                <p className="prata-regular mb-2 text-lg font-semibold">Product Sizes :</p>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button key={size} onClick={() => setSizes((prev) => prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size])} type="button" className={`prata-regular cursor-pointer border-2 px-2 py-2 rounded  ${sizes.includes(size) ? "border-gray-400 bg-slate-900 text-white" : "border-gray-600 bg-transparent text-gray-200"}  hover:border-gray-200`} >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full flex items-center gap-4">
                <label htmlFor="bestseller" className="prata-regular text-lg font-semibold">
                    Best Seller :
                </label>
                <input onChange={() => setBestseller(prev => !prev)} id="bestseller" checked={bestseller} className="w-5 h-5 accent-green-500 focus:outline-none" type="checkbox" />
            </div>
            <button type="submit" className={`btn btn-outline-dark ${loading ? "opacity-50 cursor-not-allowed" : ""} w-full sm:w-auto px-4 sm:px-6 py-2 text-sm sm:text-lg border text-white rounded shadow-xl hover:bg-gray-600 transition duration-300`} >
                {loading ? "Submitting..." : "Submit Product"}
            </button>
        </form>
    );
};

export default Add;