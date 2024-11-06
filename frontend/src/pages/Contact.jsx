import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
    return (
        <>
            <div>
                <div className="text-center text-2xl pt-3">
                    <Title text1={"CONTACT"} text2={"US"} />
                </div>
                <div className="mb-12 flex flex-col justify-center md:flex-row gap-10">
                    <img className="w-full md:max-w-[480px] rounded-lg shadow-2xl" src={assets.contact_img} alt="Contact_Image" />
                    <div className="flex flex-col justify-center items-start gap-4">
                        <p className="font-semibold text-xl text-gray-600">Our Store</p>
                        <p className="text-gray-500 -mt-5">758, Ravadiavas, Panch Pipli, Jamalpur, Ahmedabad, Gujarat, India</p>
                        <p className="text-gray-600">
                            Phone: <a href="tel:+919638473047" className="hover:underline text-gray-500">9638473047</a><br />
                            Email: <a href="mailto:chhipasahil163@gmail.com" className="hover:underline text-gray-500">chhipasahil163@gmail.com</a>
                        </p>
                        <p className="font-semibold text-xl text-gray-600">Careers</p>
                        <p className="text-gray-500">Learn more about our teams and job openings.</p>
                        <button className="btn bg-black border-gray-500 border-1 text-white px-8 text-sm mr-2 py-2"> Explore Jobs </button>
                        <p className="font-semibold text-xl text-gray-600">Follow Us</p>
                        <div className="flex flex-wrap gap-4 -mt-5 justify-center md:justify-start text-center md:text-left">
                            <a href="https://www.facebook.com" target="_blank" className="text-gray-500 hover:text-gray-400 text-sm sm:text-base">Facebook</a>
                            <a href="https://www.twitter.com" target="_blank" className="text-gray-500 hover:text-gray-400 text-sm sm:text-base">Twitter</a>
                            <a href="https://www.instagram.com" target="_blank" className="text-gray-500 hover:text-gray-400 text-sm sm:text-base">Instagram</a>
                            <a href="https://www.linkedin.com" target="_blank" className="text-gray-500 hover:text-gray-400 text-sm sm:text-base">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <NewsLetterBox />
                {/* Send Message */}
                <div className="bg-gray-700 p-3 lg:p-4 rounded-lg shadow-md mb-10">
                    <h3 className="text-xl font-semibold text-gray-500 mb-3">Send Us A Message :</h3>
                    <form className="flex flex-col gap-3 text-black">
                        <input type="text" placeholder="Your Name" className="border border-gray-300 bg-gray-500 rounded p-2 w-full focus:border-black" />
                        <input type="email" placeholder="Your Email" className="border border-gray-300 bg-gray-500 rounded p-2 w-full focus:border-black" />
                        <textarea placeholder="Your Message" className="border border-gray-300 bg-gray-500 rounded p-2 w-full focus:border-black h-32" ></textarea>
                        <button type="submit" className="btn bg-black border-gray-500 border-1 w-48 text-white text-sm py-2 self-end"> Send Message </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
