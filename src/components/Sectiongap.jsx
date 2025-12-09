import React from 'react'

const Sectiongap = () => {
  return (
    // FIX: 
    // 1. 'w-auto' এবং 'mx-4' ব্যবহার করা হয়েছে যাতে মোবাইলে বর্ডার দেখা যায়।
    // 2. 'lg:w-full' এবং 'lg:mx-auto' দেওয়া হয়েছে যাতে বড় স্ক্রিনে আগের মতো থাকে।
    <div className='max-w-[1184px] w-auto  mx-[13px] lg:w-full lg:mx-auto border-l border-r border-gray-800 h-36'>
      
    </div>
  )
}

export default Sectiongap
