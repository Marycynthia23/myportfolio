import Image from "next/image";
import heroInstict from "../../images/enhancedInstict.png";
import atarrodoHero from "../../images/atarrodoHero.png";

export default function FrontendProjects() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 mx-auto px-[4%] py-8">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <a href="/work" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to Work
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Frontend Projects</h1>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {/* First Project Card */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Instict Ai</h2>
                <p className="text-white/70 leading-relaxed">
                  An AI-powered platform for interview preparation built with React.js, featuring modern animations, smooth transitions, and optimized performance. This project demonstrates my expertise in React development and integrating AI technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">React.js</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">AI Integration</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="/work/frontend-projects/instict-ai"
                    className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                  >
                    View Project
                  </a>
                    <a href="https://instict.ai/" target="_blank" className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
                    View Live Site
                  </a>
                </div>
              </div>
              {/* Right side - Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={heroInstict}
                  alt="Instict Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Project Card */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={atarrodoHero}
                  alt="Atarrodo Project"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right side - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Atarrodo</h2>
                <p className="text-white/70 leading-relaxed">
                  A web application for learning and practicing different African languages. Built with modern web technologies featuring interactive lessons, user authentication, and progress tracking. This project showcases my full-stack development capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">React.js</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">CSS3</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Endpoint Integration</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="/work/frontend-projects/atarrodo"
                    className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                  >
                    View Project
                  </a>
                  <a href="https://atarrodo.com/" target="_blank" className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
                    View Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20 mb-16">
          <h2 className="text-3xl font-bold text-[#FF6B35] mb-6">
            Like what you see?<br />
            Let's build something amazing together!
          </h2>
          <a 
            href="mailto:onuohanneoma7@gmail.com"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            onuohanneoma7@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
