import React, { useEffect, useState } from 'react';
import { backendURL, currency } from '../App';
import { toast } from 'react-toastify';
import axios from "axios";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + '/api/product/list', { headers: { token } });
      // console.log(response.data.products);
      if (response.data.products) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message, "Unable To Display The Product. Please Try Again.");
      }
    } catch (error) {
      console.error("Error :", error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    if (window.confirm("Are You Sure You Want To Delete This Product ?")) {
      setLoading(true);
      try {
        const response = await axios.post(backendURL + '/api/product/remove', { id }, { headers: { token } });
        if (response.data.success) {
          toast.success(response.data.message);
          await fetchList();
        } else {
          toast.error(response.data.message, "Product Not Deleted. Please Try Again.");
        }
      } catch (error) {
        console.error("Error :", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const totalPages = Math.ceil(list.length / productsPerPage);
  const currentProducts = list.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <div className='p-6 bg-gradient-to-r from-gray-900 to-gray-600 text-gray-200 rounded-lg shadow-lg flex flex-col w-full items-start gap-6'>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-xl">All Products List</h2>
          <h2 className="text-xl">Total Products : {list.length}</h2>
        </div>
        <div className='flex flex-col gap-2'>
          {/* List Table Title */}
          <div className='hidden md:grid grid-cols-[5fr_10fr_4fr_3fr_1fr] items-center py-1 px-2 border text-sm rounded'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          <p type="submit" className={`${loading ? "opacity-50 cursor-not-allowed" : ""} text-sm sm:text-base text-white shadow-x`} >
            {loading ? "Deleting Product..." : ""}
          </p>
          {/* Product List */}
          {currentProducts.map((item, index) => (
            <div key={index}>
              <div className='grid grid-cols-[2fr_5fr_1fr] md:grid-cols-[5fr_10fr_4fr_3fr_1fr] items-center gap-2 py-1 px-2 text-sm hover:bg-gradient-to-r from-gray-600 to-gray-900 rounded'>
                <img className='w-12' src={item.image[0]} alt="Product_Image" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency} {item.price}</p>
                <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg hover:text-red-700 transition duration-200' > X </p>
              </div>
              <hr className='mt-1' />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 ${currentPage === i + 1 ? "bg-purple-700" : "bg-gray-700"} hover:bg-gray-800 text-white rounded`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-800 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </>
  );
};

export default List;
