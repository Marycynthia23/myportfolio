import Image from "next/image";
import waitlist from "../../images/instictWaitlt.png";
import mobileDesign from "../../images/zenMobile.png";

export default function UIProject() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 px-[4%] mx-auto py-8">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <a href="/work" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to Work
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">UI Projects</h1>
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
                  A waitlist UI for Instict to get users to sign up for the waitlist. This project demonstrates my skills in UI/UX design, creating engaging and conversion-focused interfaces that capture user interest.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">UI Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Waitlist Design</span>
                </div>
                <a 
                  href="/work/ui-project/instict-waitlist"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                >
                  View Project
                </a>
              </div>
              {/* Right side - Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={waitlist}
                  alt="Instict Waitlist"
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
                  src={mobileDesign}
                  alt="Zenith Mobile"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Right side - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Zenith Mobile</h2>
                <p className="text-white/70 leading-relaxed">
                  A mobile design for Zenith bank featuring modern UI patterns, intuitive navigation, and engaging user interactions. This project showcases my ability to create user-centered financial application designs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Mobile Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Banking UI</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Figma</span>
                </div>
                <a 
                  href="/work/ui-project/zenith-mobile"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Third Project Card */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">E-commerce Dashboard</h2>
                <p className="text-white/70 leading-relaxed">
                  Designed a comprehensive dashboard interface for an e-commerce platform with focus on data visualization, user experience, and accessibility. The design emphasizes clarity and efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Dashboard Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Data Visualization</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Accessibility</span>
                </div>
                <a 
                  href="/work/ui-project/ecommerce-dashboard"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                >
                  View Project
                </a>
              </div>
              {/* Right side - Image */}
              <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Dashboard Preview</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20 mb-16">
          <h2 className="text-3xl font-bold text-[#FFffff] mb-6">
            Interested in my UI work?<br />
            Let&apos;s collaborate!
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
