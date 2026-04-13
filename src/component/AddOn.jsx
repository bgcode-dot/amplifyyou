import React from 'react'
import Image from 'next/image'
import check from '../assets/check.png';

const AddOn = () => {
  return (
    <div className="py-16 md:py-6 md:px-10 px-3">
  <div className="max-w-6xl mx-auto text-center border border-[#DADEE3] rounded-[40px] py-[60px] md:px-10 px-4">
    <h1 className="md:text-[38px] text-[30px] font-bold mb-4 text-[#101010]">Don't Wait Until It's Perfect. Move While It's Messy.</h1>
    <p className="text-[16px] text-[#636363CC] mb-12 max-w-2xl mx-auto">
      Whether you start with the book, join the program, or sign up for 1-on-1 coaching, this is your time to amplify your voice and legacy. The world needs your story. Your voice is valid. Your time is now.
    </p>
    
    <h3 className="md:text-[30px] text-[24px] font-bold mb-8 text-[#101010]">Add-Ons (Available on Request):</h3>
    
    <div className="mb-12 space-y-4">
      <div className="flex items-start justify-center max-w-2xl mx-auto">
        <div className="mr-2 flex-shrink-0 mt-1 w-5 h-5">
          <Image src={check} alt='check' width={18} height={18} />
        </div>
        <p className="text-[16px] text-[#636363CC] text-left">
          <strong>End-to-End Book Publishing Package:</strong> From editing to design, printing, and listing - your book, done right.
        </p>
      </div>
      
      <div className="flex items-start justify-center max-w-2xl mx-auto">
        <div className="mr-2 flex-shrink-0 mt-1 w-5 h-5">
          <Image src={check} alt='check' width={18} height={18} />
        </div>
        <p className="text-[16px] text-[#636363CC] text-left">
          <strong>Media & Publicity Support:</strong> Get featured. Get seen. From interviews to launch campaigns, we help you shine.
        </p>
      </div>
    </div>
    
    <div className="mb-12 space-y-2 text-[16px] text-[#636363CC]">
      <p className="font-semibold">You're Not Just Writing a Book</p>
      <p>You're stepping into your mantle of influence. This is your moment. Your movement.</p>
      <p><span className="font-bold">AmplifyYOU</span> group coaching starts in September. Early bird offers available now.</p>
    </div>
    
    <h3 className="md:text-[38px] text-[30px] font-bold mb-8 text-[#101010]">Choose your next step</h3>
    
    <div className="mb-8 space-y-4">
      <div className="flex items-start justify-center max-w-2xl mx-auto">
        <div className="mr-2 flex-shrink-0 md:mt-0.5 mt-1 w-5 h-5">
          <Image src={check} alt='check' width={18} height={18} />
        </div>
        <p className="text-[16px] text-[#636363CC] text-left">
          Buy now and access replay to the masterclass
        </p>
      </div>
      
      <div className="flex items-start justify-center max-w-2xl mx-auto">
        <div className="mr-2 flex-shrink-0 md:mt-0.5 mt-1 w-5 h-5">
          <Image src={check} alt='check' width={18} height={18} />
        </div>
        <p className="text-[16px] text-[#636363CC] text-left">
          Sign up for the online course and self pace (start in August)
        </p>
      </div>
      
      <div className="flex items-start justify-center max-w-2xl mx-auto">
        <div className="mr-2 flex-shrink-0 md:mt-0.5 mt-1 w-5 h-5">
          <Image src={check} alt='check' width={18} height={18} />
        </div>
        <p className="text-[16px] text-[#636363CC] text-left">
          Sign up for the Group Coaching: early bird registration on now (starts September)
        </p>
      </div>
      
      <div className="flex items-start justify-center max-w-2xl mx-auto">
        <div className="mr-2 flex-shrink-0 md:mt-0.5 mt-1 w-5 h-5">
          <Image src={check} alt='check' width={18} height={18} />
        </div>
        <p className="text-[16px] text-[#636363CC] text-left">
          Start 1-on-1 Coaching Immediately
        </p>
      </div>
    </div>
    
    <p className="md:text-[24px] text-[20px] font-medium mb-8 text-[#101010]">Let's rise, write, and roar — together.</p>
    
    <div className="flex flex-wrap justify-center gap-4">
      <a href="https://selar.com/8g3657"><button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors">
        Buy Now
      </button></a>
      

      <a href="https://selar.com/2g245247j2">
      <button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors">
        Online Course
      </button>
      </a>
      
      <a href="https://selar.com/z923n9996r"><button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors">
        Group Coaching
      </button></a>

      <a href="https://selar.com/474p373174">
      <button className="bg-[#DF3841] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-red-700 transition-colors">
        One-on-One
      </button></a>
      
    </div>
  </div>
</div>
  )
}

export default AddOn
