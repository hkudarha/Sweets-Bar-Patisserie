import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Vaishu",
        rating: 5,
        date: "01/07/2025",
        text: `Rating 5 on 5 Delivery Person Prompt, polite, and handled the package with care great service.
Sweets Bar Patisserie  App Easy to use, smooth navigation, and reliable order tracking.
Customer Service Absolutely on point quick res…`,
    },
    {
        name: "Rachna shariram",
        rating: 5,
        date: "02/07/2025",
        text: `Very impressed with the delivery time, method of delivery and the freshness of the flowers.
Great customer service. Keep it up, guys`,
    },
    {
        name: "Ravi Kant Choudhary",
        rating: 5,
        date: "30/06/2025",
        text: `This chocolate cake was as lovely as it looked, rich, moist, and perfectly sweet.
The pink floral design with gold accents gave it an elegant, romantic vibe,
while the chocolate inside delivered pure comfort. A beauti…`,
    },
];


const Testimonial = () => {

    const handleClick = () => {
        alert("View All Testimonials");
    };

    return (
        <div data-aos="fade-up" className="px-[2rem] sm:px-[4rem] py-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="">Customer Testimonial</h2>
                <button
                    onClick={handleClick}
                >
                    View All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-300 rounded-xl shadow p-6 bg-white flex flex-col justify-between"
                    >
                        <p className="text-gray-500">{item.text}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="font-semibold">
                                {item.name.length > 11 ? item.name.slice(0, 11) + "…" : item.name}
                            </span>

                            <div className="flex items-center gap-2">
                                <span className="flex items-center bg-green-600 text-white text-sm px-2 py-1 rounded">
                                    <FaStar className="text-white mr-1" /> {item.rating}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    Posted On : {item.date}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
