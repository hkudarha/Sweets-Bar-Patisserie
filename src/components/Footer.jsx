import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaXTwitter, FaYoutube, FaPinterestP, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='px-[2rem] sm:px-[4rem] py-[2rem]'>
            <div className="bg-[#f4f7f8] px-[2rem] sm:px-[4rem] rounded-2xl py-[1rem] sm:py-[4rem]">
                <div className="flex flex-col lg:flex-row justify-between gap-8">

                    <div className="grid gap-[4rem] text-[1rem]  text-sm text-gray-800
                grid-cols-1 md:grid-cols-3">

                        {/* First: Always full width on mobile */}
                        <div className="flex flex-col sm:gap-[0.5rem]">
                            <Link to="about-us">About Us</Link>
                            <Link to="sell-with-us">Sell With Us</Link>
                            <Link to="coupons-deals">Coupons & Deals</Link>
                            <Link to="cancellation-refund">Cancellation & Refund</Link>
                            <Link to="retail-stores">Retails Stores</Link>
                        </div>

                        {/* Wrapper for second and third side by side */}
                        <div className="grid grid-cols-2 gap-[4rem] md:contents">
                            <div className="flex flex-col sm:gap-[0.5rem]">
                                <Link to="media">Media</Link>
                                <Link to="privacy-policy">Privacy Policy</Link>
                                <Link to="reviews">Reviews</Link>
                                <Link to="blog">Blog</Link>


                            </div>

                            <div className="flex flex-col sm:gap-[0.5rem]">
                                <Link to="inr">INR ▼</Link>
                                <Link to="franchise">Franchise</Link>
                                <Link to="faq">FAQ</Link>
                                <Link to="contact">Contact Us</Link>
                                <Link to="whatsapp">WhatsApp</Link>

                            </div>
                        </div>
                    </div>




                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                        <span className="font-semibold">Simplify your gifting experience with our app.</span>
                        <div className="flex items-center gap-4">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://Sweets Bar Patisserie .com"
                                alt="QR Code"
                                className="w-20 h-20"
                            />
                            <div className="space-y-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    className="h-10"
                                />
                                <img
                                    src="https://imgcdn.Sweets Bar Patisserie .com/fa-media/app_store.svg?tr=w-150,h-44,dpr-1.5,q-70"
                                    alt="App Store"
                                    className="h-10"
                                />
                            </div>
                        </div>

                        <span className="font-semibold mt-4">Spread The Love On Social Media</span>
                        <div className="flex flex-wrap gap-3 text-white text-lg justify-center sm:justify-start max-w-xs sm:max-w-none">
                            <Link
                                to="#"
                                className="bg-blue-700 rounded-full p-3 cursor-pointer transition-transform duration-200 shadow-none hover:-translate-y-1 hover:shadow-md hover:shadow-black/50"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                to="#"
                                className="bg-black rounded-full p-3 cursor-pointer transition-transform duration-200 shadow-none hover:-translate-y-1 hover:shadow-md hover:shadow-black/50"
                            >
                                <FaXTwitter />
                            </Link>
                            <Link
                                to="#"
                                className="bg-red-600 rounded-full p-3 cursor-pointer transition-transform duration-200 shadow-none hover:-translate-y-1 hover:shadow-md hover:shadow-black/50"
                            >
                                <FaYoutube />
                            </Link>
                            <Link
                                to="#"
                                className="bg-red-500 rounded-full p-3 cursor-pointer transition-transform duration-200 shadow-none hover:-translate-y-1 hover:shadow-md hover:shadow-black/50"
                            >
                                <FaPinterestP />
                            </Link>
                            <Link
                                to="#"
                                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-3 cursor-pointer transition-transform duration-200 shadow-none hover:-translate-y-1 hover:shadow-md hover:shadow-black/50"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                to="#"
                                className="bg-blue-800 rounded-full p-3 cursor-pointer transition-transform duration-200 shadow-none hover:-translate-y-1 hover:shadow-md hover:shadow-black/50"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
