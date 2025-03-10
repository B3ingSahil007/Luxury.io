import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
import { toast } from 'react-toastify'
import axios from 'axios'

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '₹';
    const delivery_fee = 80;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size")
            return;
        }

        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                        // toast.success("Item Is Added To Cart")
                    }
                } catch (error) {
                    toast.error("Cart Count Error")
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
        // if (quantity === 0) {
        // const confirmRemoval = window.confirm("Are you sure you want to remove this item ?");
        // if (confirmRemoval) {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
        // }
        // }
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            if (!itemInfo) continue;
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    toast.error("Error In Tracking Order Price !!")
                }
            }
        }
        return totalAmount
    }

    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            // console.log("Response From Backend:", response.data);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log("Error Fetching Product Data:", error.message);
            toast.error("Error Fetching Product Data.");
        }
    };

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }

        } catch (error) {
            console.log("Error Fetching User Cart Data :", error.message);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'))
        }
    }, [])

    const value = { products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart, cartItems, setCartItems, getCartCount, updateQuantity, getCartAmount, backendUrl, token, setToken };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext };
export default ShopContextProvider
