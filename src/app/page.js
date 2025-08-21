"use client"
import Image from "next/image";
import helloImg from "../app/images/VectorTop.png"
import helloImgTwo from "../app/images/VectorBottom.png"
import myPic from "../app/images/myPic.jpg"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import foodImg from "../app/images/food.png"
import skills from "../app/images/skills.png"


export default function Home() {
  return (
    <div className="text-white flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-8 sm:py-12 px-4 relative">
  {/* Intro Section */}
  <div className="flex flex-col items-center gap-2">
    <div className="relative inline-block">
      <span className="bg-[#222] px-4 py-1 rounded-full text-sm mb-2 inline-block">Hello!</span>
      <Image
        src={helloImg}
        alt="hello-mockup"
        className="absolute -top-6 right-0 w-6 h-6 sm:w-8 sm:h-8"
      />
    </div>

    <h1 className="relative text-4xl sm:text-4xl md:text-8xl lg:text-[95px] font-bold leading-none inline-block">
      I&apos;m <span className="text-[#FD853A]">Nneoma&#44;</span><br/>
      <span className="relative inline-block">
        <span className="inline-block">F</span>rontend Developer
        <Image
          src={helloImgTwo}
          alt="hello-mockup-bottom"
          className="absolute left-0 top-full mt-[-8px] sm:mt-[-12px] md:mt-[-15px] ml-[-30px] sm:ml-[-45px] md:ml-[-60px] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </span>
    </h1>
  </div>

  {/* Profile + Quote + Experience */}
  <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center py-16 gap-8 lg:gap-14 relative w-full">
    
    {/* Quote Section */}
    <div className="relative text-sm text-white/70 max-w-xs sm:max-w-sm text-left hidden sm:block order-2 lg:order-1">
      <FaQuoteLeft className="absolute -top-4 -left-6 w-[37px] h-[37px] text-[#FD853A]" />
      <p className="pl-8 pr-6 leading-relaxed">
        Nneoma&apos;s Exceptional Frontend & product design ensure our website&apos;s success. Highly Recommended
      </p>
      <FaQuoteRight className="absolute -bottom-4 right-0 w-[38px] h-[38px] text-[#FD853A]" />
    </div>

    {/* Profile Image */}
    <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-[#FD853A] order-1 lg:order-2 flex-shrink-0">
      <Image src={myPic} alt="Nneoma" layout="fill" objectFit="cover" />
    </div>

    {/* Experience Section */}
    <div className="flex flex-col items-center hidden sm:flex order-3">
      <div className="flex items-center gap-1 text-[#FD853A] text-lg sm:text-xl mb-1">
        {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
      </div>
      <div className="text-center">
        <span className="text-2xl sm:text-3xl md:text-[47px] font-bold">4 Years</span>
        <div className="text-sm sm:text-base md:text-[20px] text-white/70">Experience</div>
      </div>
    </div>
  </div>
</section>


      {/* Skills */}
      <section className="py-8 flex flex-col items-center px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-orange-400 mb-4">Skills</h2>
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
          {/* Add your skill icons here, assuming they are in public folder */}
          <Image src={skills} alt="React" width={1025} height={210} className="w-full max-w-full h-auto" /> 
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#111] py-8 sm:py-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold mb-6 sm:mb-8 text-center lg:text-center">
          Lets have a look at my <span className="text-[#FD853A]">Projects.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
          {/* Project 1 */}
          <div className="bg-[#181818] rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
            <Image src={foodImg} alt="Food Delivery Menu Design" width={500} height={350} className="rounded w-full h-auto" />
            <div className="mt-4">
              <div className="text-[#FD853A] font-semibold text-sm">UI Concepts</div>
              <div className="text-base sm:text-lg font-bold">Food Delivery Menu Design</div>
              <div className="text-xs text-white/70">Daily UI works</div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-[#181818] rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
            <Image src={foodImg} alt="Frontend Development" width={500} height={350} className="rounded w-full h-auto" />
            <div className="mt-4">
              <div className="text-[#FD853A] font-semibold text-sm">Frontend Development</div>
              <div className="text-base sm:text-lg font-bold">Glocally</div>
              <div className="text-xs text-white/70">Selected frontend projects</div>
            </div>
          </div>
        </div>
      </section>
     <section>
     <div className="flex items-center justify-center gap-2.5 p-2.5 py-6 w-full">
            <h2 className="font-['Inter'] font-bold text-white text-[24px] sm:text-[24px] md:text-5xl lg:text-[38px] leading-tight sm:leading-tight md:leading-tight lg:leading-[72px] text-center">
            Want to work together?<br />
            Get in touch.
            </h2>
          </div>
            <div className="flex items-center justify-center gap-2.5 p-2.5 w-full">
            <a href="mailto:onuohanneoma7@gmail.com" className="w-full  sm:w-[232px] h-[50px] flex justify-center items-center bg-[#FD853A] text-white text-[14px] sm:text-[16px] rounded-md">
            onuohanneoma7@gmail.com
            </a>
            </div>
     </section>
    </div>
  );
}
