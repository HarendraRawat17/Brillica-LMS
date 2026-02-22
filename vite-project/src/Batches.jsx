import React from 'react'

function Batches() {
  return (
    <div className=' bg-indigo-500 text-center grid gap-1 md:grid-cols-2 md:text-5xl lg:text-2xl  lg:grid-cols-3 xl:grid-cols-4 w-full h-screen p-1'>
      <div className=' bg-yellow-400 xl:col-span-4'>Responsive Design</div>
      <div className='bg-red-500 sm:bg-amber-200 md:bg-amber-500 lg:bg-amber-700'>One</div>
      <div className='bg-green-400'>Two</div>
      <div className='bg-red-500'>Three</div>
      <div className='bg-orange-400'>Four</div>
      <div className='bg-gray-500'>Five</div>
      <div className='bg-pink-600'>Six</div>
    </div>
  )
}

export default Batches