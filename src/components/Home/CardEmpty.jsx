import React from 'react'
import emptycardimg from "../../assets/Home/newEmptyCart.07e8b5a3.svg"
import { Link } from "react-router-dom";


const CardEmpty = () => {
  return (
     <div className="flex flex-col md:flex-row justify-center items-center min-h-[70vh] gap-8 px-4 text-center md:text-left">
                    <div>
                        <img
                            src={emptycardimg}
                            alt="Empty Cart"
                            className="w-48 md:w-64"
                        />
                    </div>
    
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">
                            Hey, cart bag seems to be empty,
                        </h2>
                        <p className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
                            Let's add some items.
                        </p>
                        <Link to="/">
                            <button className="bg-slate-800 text-white px-6 py-3 rounded-md hover:bg-slate-700 transition">
                                CONTINUE SHOPPING
                            </button>
                        </Link>
    
                    </div>
                </div>
  )
}

export default CardEmpty