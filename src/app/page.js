"use client"
import Image from "next/image";
import helloImg from "../app/images/VectorTop.png"
import helloImgTwo from "../app/images/VectorBottom.png"
import myPic from "../app/images/myPic.jpg"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import foodImg from "../app/images/food.png"
import skills from "../app/images/skills.png"
import { useState } from "react";
import heroInstict from "../app/images/enhancedInstict.png"
import atarrodoHero from "../app/images/atarrodoHero.png"
import waitlist from "../app/images/instictWaitlt.png"
import mobileDesign from "../app/images/zenithScreen.png"


export default function Home() {
  const [activeTab, setActiveTab] = useState('ui');

  const uiProjects = [
    {
      id: 1,
      title: "Instict Ai",
      category: "UI Concepts",
      description: "A waitlist UI for Instict to get users to sign up for the waitlist",
      image: waitlist,
      alt: "Instict Waitlist"
    },
    {
      id: 2,
      title: "Zenith Mobile",
      category: "UI Concepts",
      description: "A mobile design for Zenith bank",
      image: mobileDesign,
      alt: "Zenith Mobile"
    }
  ];

  const frontendProjects = [
    {
      id: 1,
      title: "Instict Ai",
      category: "Frontend Projects",
      description: "An AI-powered platform for interview preparation",
      image: heroInstict,
      alt: "Instict Project"
    },
    {
      id: 2,
      title: "Atarrodo",
      category: "Frontend Projects",
      description: "A web application for learning and practicing different african languages",
      image: atarrodoHero,
      alt: "Atarrodo Project"
    }
  ];

  const noCodeProjects = [
    {
      id: 1,
      title: "Business Website",
      category: "No-Code Projects",
      description: "Built with Webflow",
      image: foodImg,
      alt: "Webflow Business Website"
    },
    {
      id: 2,
      title: "SaaS Platform",
      category: "No-Code Projects",
      description: "Built with Bubble.io",
      image: foodImg,
      alt: "Bubble SaaS Platform"
    }
  ];

  return (
    <div className="text-white flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-14 sm:py-14 px-4 relative">
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

      <h1 className="relative text-4xl sm:text-4xl md:text-8xl lg:text-[95px] font-bold leading-4xl sm:leading-4xl md:leading-8xl lg:leading-[95px] inline-block text-[#FAFAFA]">
      I&apos;m <span className="text-[#FF6B35]">Nneoma&#44;</span><br/>
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
  <div className="flex flex-col lg:flex-row items-center justify-center py-16 gap-8 lg:gap-12 xl:gap-16 relative w-full max-w-7xl mx-auto px-4">
    
    {/* Quote Section */}
        <div className="relative text-sm text-[#E5E5E5] max-w-xs sm:max-w-sm text-left hidden lg:flex items-center order-2 lg:order-1 h-full lg:flex-1 lg:justify-end lg:pr-4">
      <div className="relative py-4">
        <FaQuoteLeft className="absolute -top-2 -left-6 w-[37px] h-[37px] text-[#FF6B35]" />
        <p className="pl-8 pr-6 leading-relaxed">
          Nneoma&apos;s Exceptional Frontend & product design ensure our website&apos;s success. Highly Recommended
        </p>
        <FaQuoteRight className="absolute -bottom-2 right-0 w-[38px] h-[38px] text-[#FF6B35]" />
      </div>
    </div>

    {/* Profile Image - Centered */}
    <div className="flex justify-center items-center order-1 lg:order-2">
      <div className="relative w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-[#FF6B35] flex-shrink-0 shadow-2xl shadow-[#FF6B35]/20">
        <Image src={myPic} alt="Nneoma" layout="fill" objectFit="cover" />
      </div>
    </div>

    {/* Experience Section */}
    <div className="flex flex-col items-center justify-center hidden lg:flex order-3 h-full lg:flex-1 lg:pl-4">
      <div className="flex items-center gap-1 text-[#FF6B35] text-lg sm:text-xl mb-2">
        {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
      </div>
      <div className="text-center">
        <span className="text-3xl sm:text-4xl md:text-[47px] font-bold block text-[#FAFAFA]">4 Years</span>
        <div className="text-sm sm:text-base md:text-[20px] text-[#B8B8B8] mt-1">Experience</div>
      </div>
    </div>
  </div>
</section>


      {/* Skills */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B35] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-[#FF6B35] font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
              Tech Stack
            </span>
                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4">
              Skills & Expertise
            </h2>
            <p className="text-[#E5E5E5] text-base sm:text-lg max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Display */}
                 <div className="bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center items-center">
              <Image 
                src={skills} 
                alt="Technical Skills" 
                width={1025} 
                height={210} 
                className="w-full max-w-full h-auto transition-transform duration-300 hover:scale-105" 
              /> 
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
             <section className="bg-[#111] py-8 sm:py-12 px-[3%]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold mb-6 sm:mb-8 text-center lg:text-center text-[#FAFAFA]">
          Lets have a look at my <span className="text-[#FF6B35]">Projects.</span>
        </h2>
        
        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
                 <div className="bg-[#181818] rounded-lg p-1 flex flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('ui')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                activeTab === 'ui'
                  ? 'bg-[#FF6B35] text-white'
                         : 'text-white/70 hover:text-white'
              }`}
            >
              UI
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                activeTab === 'frontend'
                  ? 'bg-[#FF6B35] text-white'
                         : 'text-white/70 hover:text-white'
              }`}
            >
              Frontend 
            </button>
            <button
              onClick={() => setActiveTab('nocode')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                activeTab === 'nocode'
                  ? 'bg-[#FF6B35] text-white'
                         : 'text-white/70 hover:text-white'
              }`}
            >
              No-Code
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
          {(activeTab === 'ui' ? uiProjects : activeTab === 'frontend' ? frontendProjects : noCodeProjects).map((project) => (
                   <div key={project.id} className="bg-[#181818] rounded-lg p-4 w-full md:w-1/2 lg:w-1/2 hover:bg-[#222] transition-colors duration-300">
              <Image 
                src={project.image} 
                alt={project.alt} 
                width={350} 
                height={200} 
                className="rounded w-full h-auto" 
              />
              <div className="mt-4">
                <div className="text-[#FF6B35] font-semibold text-sm">{project.category}</div>
                       <div className="text-base sm:text-lg font-bold text-[#FAFAFA]">{project.title}</div>
                <div className="text-xs text-[#B8B8B8]">{project.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <a 
            href={activeTab === 'ui' ? '/work/ui-project' : activeTab === 'frontend' ? '/work/frontend-projects' : '/work/no-code'}
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            View All {activeTab === 'ui' ? 'UI' : activeTab === 'frontend' ? 'Frontend' : 'No-Code'} Projects
          </a>
        </div>
      </section>
     <section className="py-12">
     <div className="flex items-center justify-center gap-2.5 p-2.5 py-0 mb-8 w-full">
            <h2 className="font-['Inter'] font-bold text-white text-[24px] sm:text-[24px] md:text-5xl lg:text-[38px] leading-tight sm:leading-tight md:leading-tight lg:leading-[52px] text-center">
            Want to work together?<br />
            Get in touch.
            </h2>
          </div>
            <div className="flex items-center justify-center gap-2.5 px-8 lg:px-16 py-2 w-full mb-8">
            <a href="mailto:onuohanneoma7@gmail.com" className="w-full  sm:w-[232px] h-[50px] flex justify-center items-center bg-[#FF6B35] text-white text-[14px] sm:text-[16px] rounded-md px-8">
            onuohanneoma7@gmail.com
            </a>
            </div>
     </section>
    </div>
  );
}
