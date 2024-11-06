import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
    const images = [
        assets.about_img,
        assets.about_img_1,
        assets.about_img_2,
        assets.about_img_3,
        assets.about_img_4,
        assets.about_img_5,
        assets.about_img_6,
        assets.about_img_7,
        assets.about_img_8,
        assets.about_img_9,
        assets.about_img_10
    ];

    return (
        <>
            <div>
                <div className="text-2xl text-center mt-3">
                    <Title text1={"ABOUT"} text2={"US"} />
                </div>
                <div className="overflow-hidden">
                    <div className="inline-flex animate-[scroll_20s_linear_infinite] gap-4" style={{ animation: 'scroll 20s linear infinite' }} >
                        {images.concat(images).map((imgSrc, index) => (
                            <img key={index} className="flex-shrink-0 w-[300px] h-[320px] object-cover rounded-lg" src={imgSrc} alt={`About_Image_${index + 1}`} />
                        ))}
                    </div>
                    <div className='flex flex-col text-gray-400 my-5 text-center'>
                        <p>At Luxury.io, we believe in empowering individuality and self-expression through style. Our platform connects fashion enthusiasts with unique brands, offering a curated selection of trendy and timeless pieces to inspire your personal style journey.</p>
                        <b className='text-gray-500 text-3xl mt-4'>Our Mission</b>
                        <p className='mb-3'>Our mission is to create a seamless shopping experience where customers can explore diverse fashion choices and discover new favorites with ease. We value creativity, quality, and customer satisfaction above all, building a community where everyone feels seen, heard, and stylishly represented.</p>
                        <p>To redefine the shopping experience by connecting style-conscious individuals with creative, high-quality brands that celebrate diversity and innovation in fashion.</p>
                    </div>

                    <div className='sm:text-3xl text-xl py-2 text-center'>
                        <Title text1={"WHY"} text2={"CHOOSE US"} />
                    </div>

                    <div className='flex flex-col md:flex-row text-sm text-gray-600 gap-3'>
                        <div className='border rounded-xl px-8 md:px-8 py-3 sm:py-4 flex flex-col gap-2'>
                            <b className='text-2xl'>Quality Assurance :</b>
                            <p className='text-gray-400'>We partner only with brands that prioritize quality, so you can shop confidently knowing each item is crafted with care and precision. Our commitment to quality ensures a lasting addition to your wardrobe.</p>
                        </div>
                        <div className='border rounded-xl px-8 md:px-8 py-3 sm:py-4 flex flex-col gap-2'>
                            <b className='text-2xl'>Convenience :</b>
                            <p className='text-gray-400'>We offer a user-friendly, seamless shopping experience. From curated product selections to an easy checkout process, Luxury.io makes finding your new favorite look both enjoyable and efficient.</p>
                        </div>
                        <div className='border rounded-xl px-8 md:px-8 py-3 sm:py-4 flex flex-col gap-2'>
                            <b className='text-2xl'>Exceptional Customer Service :</b>
                            <p className='text-gray-400'>Our dedicated customer service team is here to assist you every step of the way. We believe in personalized support to ensure each customer feels valued and satisfied with their Luxury.io experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default About;
