import React from 'react'
import SalingCards from './SalingCards';

const BestsellerCakesOnline = () => {


    const handleClick = () => {};

    return (
        <div  data-aos="fade-up" className='px-[2rem] sm:px-[4rem] py-[2rem]'>
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div >
                    <h2>Best Selling Flowers & Gifts</h2>
                    <p>
                        Surprise Your Loved Ones
                    </p>
                </div>
                <button onClick={handleClick}>
                    View All
                </button>
            </div>

            <SalingCards />
        </div>
    )
}

export default BestsellerCakesOnline