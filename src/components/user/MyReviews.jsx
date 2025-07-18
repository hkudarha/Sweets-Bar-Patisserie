import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'

const MyReviews = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4"> My Reviews</h3>
      <div className="bg-gray-100 flex items-center gap-3 p-4 rounded-xl w-full sm:max-w-3xl">
        <div className="relative flex items-center">
          <FaStar
            className="text-4xl text-[#0e4d65]" />
          <MdCancel className="absolute -bottom-1 -right-2 text-red-500 text-lg bg-white rounded-full" />
        </div>
        <p className="text-gray-800 font-medium">There is no review added yet</p>
      </div>
    </div>
  )
}

export default MyReviews