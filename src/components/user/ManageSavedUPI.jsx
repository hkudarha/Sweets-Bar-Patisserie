import React from 'react'
import { BsBank2 } from 'react-icons/bs'
import {  MdCancel } from 'react-icons/md'

const ManageSavedUPI = () => {
  return (
    
    <div className="p-4">
          <h3 className=" mb-4"> Manage Saved UPI</h3>
          <div className="bg-gray-100 flex items-center gap-3 p-4 rounded-xl w-full sm:max-w-3xl">
            <div className="relative flex items-center">
              <BsBank2
               className="text-4xl text-[#0e4d65]" />
              <MdCancel className="absolute -bottom-1 -right-2 text-red-500 text-lg bg-white rounded-full" />
            </div>
            <p className="text-gray-800 font-medium">There is no UPI ID added</p>
          </div>
        </div>
  )
}

export default ManageSavedUPI