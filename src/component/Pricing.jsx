import React from 'react'
import Image from 'next/image'
import check from '../assets/check.png'

const Pricing = () => {
  return (
    <section className="px-4" id="pricing">
      <div className='items-center justify-center py-[75px] px-10 border border-[#DADEE3] rounded-[25px] mt-[40px] md:mx-[80px] mx-[20px]'>
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-[32px] md:text-[38px] font-semibold mb-4">Choose your path with Brenda</h1>
          <p className="text-[#636363CC] opacity-80">
            Free and transparent pricing, get started today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* AmplifyYOU Group Coaching */}
          <div className="border border-[#E0E8E3] rounded-[22.5px] p-[14px]">
            <div className="mb-4 border border-[#E0E8E3] rounded-[10.5px] p-[14px]">
              <h3 className="font-medium text-lg">AmplifyYOU Group Coaching</h3>
              <div className="mt-4 mb-[14px]">
                <span className="text-3xl font-bold">₦250,000</span>
              </div>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80'>Starts April 2026</span>
              <a href="https://selar.com/z923n9996r" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-2 border border-[#DF3841] text-[#DF3841] rounded-md mt-[14px] hover:bg-[#DF3841] hover:text-white transition-colors">
                  Get Started
                </button>
              </a>
            </div>
            <div className="space-y-3 mt-6">
              <div className='flex-shrink-0'>
                <span className='text-[#5D5D5DCC] text-[14px] opacity-80 font-semibold'>Group coaching includes:</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Full access to the AmplifyYOU framework: Clarify, Create, Brand, Publish, Amplify</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">6 weeks of live group coaching</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">6 weeks of implementation + feedback</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Tools and templates to get your book ready</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Accountability</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Your book completed in 12 weeks</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">A community of like-minded authors to cheer you on</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Access to coach in a Whatsapp group for 12 weeks</span>
              </div>
            </div>
          </div>

          {/* AmplifyYOU 1-on-1 Coaching */}
          <div className="border border-[#DF3841] rounded-[22.5px] p-[14px] pb-[30px] bg-white">
            <div className="mb-4 border border-white bg-[#DF38410D] rounded-[10.5px] p-[14px]">
              <h3 className="font-medium text-lg">AmplifyYOU 1-on-1 Coaching</h3>
              <div className="mt-4 mb-[14px]">
                <span className="text-3xl font-bold">₦650,000</span>
              </div>
              <div className='w-[250px]'>
                <span className='text-[#5D5D5DCC] text-[14px] opacity-80'>Immediate start</span>
              </div>
              <a href="https://selar.com/474p373174" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-2 bg-[#DF3841] text-white rounded-md mt-[14px] hover:bg-red-700 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
            <div className="space-y-3 mt-6">
              <div className='flex-shrink-0'>
                <span className='text-[#5D5D5DCC] text-[14px] opacity-80 font-semibold'>1-on-1 coaching program includes:</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Full access to the AmplifyYOU framework: Clarify, Create, Brand, Publish, Amplify</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">6 weeks of live group coaching</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">6 weeks of implementation + feedback</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Tools and templates to get your book ready</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Accountability</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Your book completed in 12 weeks</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Dedicated support during publishing</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Personalized plan for writing schedule and classes at your convenience</span>
              </div>
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={check} alt='check'/></div>
                <span className="text-sm mt-1">Access to coach's personalized review of your book</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
