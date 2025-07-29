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
    <div className="bg-[#181818] text-white flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-12 px-4 relative">
        <div className="flex flex-col items-center gap-2">
          <div className="relative inline-block">
            <span className="bg-[#222] px-4 py-1 rounded-full text-sm mb-2 inline-block">Hello!</span>
            <Image src={helloImg} alt="hello-mockup" className="absolute -top-6 right-0 left-15 w-8 h-8" />
          </div>
          <h1 className="relative text-[95px] sm:text-[95px] font-bold leading-none inline-block">
            I’m <span className="text-orange-400">Nneoma</span>,<br />
            <span className="relative inline-block">
              <span className="inline-block">F</span>rontend Developer
              <Image
                src={helloImgTwo}
                alt="hello-mockup-bottom"
                className="absolute left-0 top-full mt-[-15px] ml-[-60px] w-20 h-20"
              />
            </span>
          </h1>
        </div>
        
        
        <div className="flex items-center py-6 justify-center gap-10">
        <div className=" text-sm text-white/70 max-w-xs text-left hidden md:block">
          <span className="text-3xl">
          </span>
          <FaQuoteLeft className="absolute w-[37px] h-[37px] left-4"/>
          <div>
            Nneoma’s Exceptional Frontend & product design ensure our website’s success. Highly Recommended
          </div>
            <FaQuoteRight className="absolute w-[38px] h-[38px]" />
         </div>

          <div className="relative w-[510px] h-[500px] mx-auto rounded-full overflow-hidden border-8 border-orange-400">
            <Image src={myPic} alt="Nneoma" layout="fill" objectFit="cover" />
          </div>

          <div className="flex-col items-center hidden md:flex">
          <div className="flex items-center gap-1 text-orange-400 text-xl mb-1">
            {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
          </div>
          <div>
            <span className="text-[47px] font-bold">4 Years</span>
            <div className="text-[20px] text-white/70">Experience</div>
          </div>
                
        </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Skills</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {/* Add your skill icons here, assuming they are in public folder */}
          <Image src={skills} alt="React" width={1025} height={210} /> 
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#111] py-12 px-4">
        <h2 className="text-[50px] font-bold mb-8 pl-58
         text-left">
          Lets have a look at my <span className="text-orange-400">Projects.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Project 1 */}
          <div className="bg-[#181818] rounded-lg p-4 w-full md:w-1/3">
            <Image src={foodImg} alt="Food Delivery Menu Design" width={500} height={350} className="rounded" />
            <div className="mt-4">
              <div className="text-orange-400 font-semibold text-sm">UI Concepts</div>
              <div className="text-lg font-bold">Food Delivery Menu Design</div>
              <div className="text-xs text-white/70">Daily UI works</div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-[#181818] rounded-lg p-4 w-full md:w-1/3">
            <Image src={foodImg} alt="Frontend Development" width={500} height={350} className="rounded" />
            <div className="mt-4">
              <div className="text-orange-400 font-semibold text-sm">Frontend Development</div>
              <div className="text-lg font-bold">Glocally</div>
              <div className="text-xs text-white/70">Selected frontend projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
