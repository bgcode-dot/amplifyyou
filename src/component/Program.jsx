import React from 'react'
import Image from 'next/image'
import check from '../assets/check.png';
import program from '../assets/program.png';

const Program = () => {
  return (
  <div className="text-center max-w-4xl mx-auto px-4 pb-12">
  <h1 className="text-[32px] font-bold mb-2 text-[#101010]">Meet Brenda Unu</h1>
  <p className="text-[16px] text-gray-600 mb-4 italic">Architect. Author. Amplifier of Women's Voices.</p>
  
  <div className="text-[16px] leading-relaxed text-[#636363CC] space-y-4 mb-8">
    <p>
      Brenda Unuavworho is not just a woman of many titles—she's a woman of deep purpose. A renowned architect with over two decades of experience, Brenda has designed and executed high-impact residential, commercial, and industrial projects—from multi-story apartments to banks and office complexes.
    </p>
    
    <p>
      But while she builds with concrete, she also builds with calling.
    </p>
    
    <p>
      Through her words, wisdom, and witness, Brenda has become a powerful voice for women's transformation.
    </p>
    
    <p>
      She is the author of 12 transformational books—spanning children's stories, adult fiction, architecture made simple, and practical guides for women who are ready to rise.
    </p>
    
    <p>
      Her workbooks, courses, and books are available on Amazon and Selar, and they reflect her heart clearly: she doesn't just write books, she builds legacies.
    </p>
    
    <p>
      As a sought-after book consultant and coach, Brenda helps women and children find their voice and own their story. Through her signature program, The Executive Author, she has guided over 50 women to write, publish, and boldly share their message with the world.
    </p>
    
    <p>
      Now, with the launch of her new flagship program—AmplifyYOU—Brenda is on a mission to impact 10,000 women in the next 10 years, helping them turn lived experiences into legacy and expertise into authority. Her 5-step framework— Clarify • Create • Build • Publish • Amplify —takes women from idea to impact with clarity, confidence, and purpose.
    </p>
    
    <p>
      She is also the Founder of the Women's Growth Academy (WGA), Convener of the annual WGA Conference, and Host of the YouTube podcast, "Women's Matters," where she holds space for faith-filled, real-life conversations for women who desire to grow and thrive.
    </p>
    
    <p>
      Brenda is a mother, mentor, idealist, and kingdom-driven woman who believes that when one woman amplifies her story, generations shift.
    </p>
    
    <p className="font-medium text-[16px] text-[#636363CC]">
      It's your time. Let's amplify YOU.
    </p>
  </div>
  
  <div className="flex justify-center">
    <Image 
      src={program} 
      alt="Brenda Unu" 
      width={700} 
      height={750} 
      className=" "
    />
  </div>
</div>
  )
}

export default Program