"use client"
import Image from "next/image";
import aboutPic from "../images/nnepix.png";

export default function About() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-[4%] mx-auto py-16">

        {/* Main content section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Introduction text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="text-[#FF6B35] mb-4">Hello,</span><br />
                <span className="text-[#FF6B35]">I&apos;m Nneoma Onuoha</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                A Software Engineer-(Frontend), passionate about crafting intuitive, and user-focused web experiences.
                My journey into tech started with a curiosity for how design and logic meet to create products people love. That curiosity grew into a career built around turning ideas into beautiful, functional interfaces using React.js, Next.js, Angular, and JavaScript.
              </p>
              
              <p className="text-white/90">
              I&apos;ve had the pleasure of working on projects across FinTech, EduTech, HealthTech, and B2B software, and even collaborating internationally with teams at XPLORE-UnternehmerTUM in Germany; an experience that deepened my love for teamwork, creativity,Startups and diverse perspectives.
              </p>
              
              <p className="text-white/90">
              Beyond coding, I&apos;m driven by curiosity and design thinking. I love learning new tools, exploring innovative solutions, and creating digital experiences that connect with people in meaningful ways.
              </p>
              <p className="text-white/90">
              Let&apos;s build something amazing together. 🚀
              </p>
            </div>
          </div>

          {/* Right side - Profile image with orange background */}
          <div className="relative">
            <div className="relative w-full h-[800px] rounded-3xl overflow-hidden">
              {/* Orange curved background */}
              <div className="absolute inset-0 bg-[#FFffff] rounded-3xl transform rotate-3 scale-115"></div>
              
              {/* Profile image */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <Image
                  src={aboutPic}
                  alt="Nneoma-Onuoha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="text-center mt-20 mb-16">
          <h2 className="text-3xl font-bold text-[#FFffff] mb-6">
            Want to work together?<br/> Get in touch.
          </h2>
          <a 
            href="mailto:onuohanneoma7@gmail.com"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            onuohanneoma7@gmail.com
          </a>
        </div>
      </div>

      {/* Footer section with social links */}
      
    </main>
  );
}
