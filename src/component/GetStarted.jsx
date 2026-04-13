import React from 'react'
import Image from 'next/image'
import wyg2 from '../assets/wyg2.png'
import check from '../assets/check.png'

const GetStarted = () => {
  return (
    <div className="bg-white py-16 md:py-10 md:px-10 px-3 md:mt-6">
  <div className="max-w-6xl mx-auto text-center border border-[#DADEE3] rounded-[40px] py-[60px]">
    <h1 className="md:text-[38px] text-[30px] font-bold mb-2 text-[#101010]">Not ready for the program yet?</h1>
    <p className="text-[16px] text-[#636363CC] mb-1">Start here:</p>
    <p className="text-[16px] text-[#636363CC] mb-6">Introducing The AmplifyYOU Manual</p>
    
    <h3 className="md:text-[24px] text-[20px] font-semibold mb-8 text-[#101010]">
      RISE. WRITE. ROAR. — How to Amplify You By Owning Your Story.
    </h3>
    
    <div className="flex justify-center mb-8">
      <Image 
        src={wyg2} 
        alt="RISE WRITE ROAR Book" 
        width={495} 
        height={592} 
        className="rounded-lg"
      />
    </div>
    
    <p className="text-[16px] text-[#636363CC] mb-2">My new book is the perfect place to begin your journey.</p>
    <p className="text-[16px] text-[#636363CC] mb-2">
      Buy NOW
    </p>
    <p className="text-[16px] text-[#636363CC] mb-8">
      and get access to a powerful exclusive bonus! <span className="font-bold text-red-600">FREE MASTERCLASS</span>
    </p>
    
    <h3 className="md:text-[38px] text-[30px] font-bold mb-4 text-[#101010]">Get Started With Your Amplify Journey</h3>
    <p className="text-[16px] text-[#636363CC] mb-8">
      A practical session to kickstart your visibility and voice. This bonus is only available to those who preorder.
    </p>
    
   
    <div className="flex justify-center ">
      <a href="https://selar.com/8g3657" target="_blank" rel="noopener noreferrer">
        <button className=" bg-[#DF3841] drop-shadow-sm text-white rounded-[10px] w-[299px] h-[51px] text-[16px] mb-8">
        BUY NOW and get replay of masterclass
        </button>

      </a>
        
    </div>
    
    <div className="text-center ">
      <h4 className="text-[18px] font-semibold mb-4  text-[#101010]">Inside this book, you'll discover:</h4>
      
      <ul className="space-y-3 mx-auto w-fit text-center">
        <li className="text-[16px] text-[#636363CC]">
          <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
          Why expert women stay stuck and small
        </li>
        
        <li className="text-[16px] text-[#636363CC]">
          <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
          How to break the cycle of perfectionism and procrastination
        </li>
        
        <li className="text-[16px] text-[#636363CC]">
          <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
          How to build clarity and courage to show up
        </li>
        
        <li className="text-[16px] text-[#636363CC]">
          <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
          Your first steps toward legacy and visibility
        </li>
        
        <li className="text-[16px] text-[#636363CC]">
          <Image src={check} alt='check' width={18} height={18} className="inline mr-2" />
          An introduction to the Amplify You Framework
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default GetStarted