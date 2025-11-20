import Image from "next/image";
import waitlist from "../../images/instictWaitlt.png";
import mobileDesign from "../../images/zenMobile.png";
import estateManagement from "../../images/cliqestate.png";
import mybabyMobile from "../../images/mybaby-mobile.png";
import bespokePaint from "../../images/atarrodoHero.png";

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
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 sm:p-4 lg:p-8 shadow-2xl">
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
                  className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
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

          {/* Bespoke Paint Company */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 sm:p-4 lg:p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Bespoke Paint Company Website</h2>
                <p className="text-white/70 leading-relaxed">
                  A strategic website structure for a paint brand that manufactures on demand,
                  offers professional application, and grows via a distributor network. The concept
                  balances storytelling with clear CTAs for “Request Custom Paint” and “Apply as
                  Distributor”.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Website UX</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Service Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Content Strategy</span>
                </div>
                <a
                  href="/work/ui-project/bespoke-paint"
                  className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
                >
                  View Project
                </a>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image src={bespokePaint} alt="Bespoke Paint Company" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Second Project Card */}
          {/* <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 sm:p-4 lg:p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={mobileDesign}
                  alt="Zenith Mobile"
                  fill
                  className="object-cover"
                />
              </div>
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
                  className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"                >
                  View Project
                </a>
              </div>
            </div>
          </div> */}

          {/* Third Project Card */}
          {/* <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 sm:p-4 lg:p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Wecaredrugstores — Pharmacy E-Commerce</h2>
                <p className="text-white/70 leading-relaxed">
                  A comprehensive web-based pharmacy e-commerce application designed to make purchasing medications and healthcare products fast, secure, and convenient. Features dual-module system with customer-facing store and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">E-commerce Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Healthcare UI</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Admin Dashboard</span>
                </div>
                <a 
                  href="/work/ui-project/ecommerce-dashboard"
                  className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"                >
                  View Project
                </a>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <Image
                  src={mobileDesign}
                  alt="Zenith Mobile"
                  fill
                  className="object-cover"
                />
              

              </div>
            </div>
          </div> */}

          {/* Fourth Project Card */}
          {/* <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 sm:p-4 lg:p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image
                  src={estateManagement}
                  alt="Zenith Mobile"
                  fill
                  className="object-cover"
                />
              
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Estate Management System</h2>
                <p className="text-white/70 leading-relaxed">
                  A comprehensive property and estate management platform designed to streamline operations for property managers, residents, and maintenance staff with intuitive multi-role dashboards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Property Management</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Multi-Role Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Dashboard UI</span>
                </div>
                <a 
                  href="/work/ui-project/estate-mgt"
                  className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"                >
                  View Project
                </a>
              </div>
            </div>
          </div> */}

          {/* Fifth Project Card */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-4 sm:p-4 lg:p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">MyBaby – Women&apos;s Reproductive Health</h2>
                <p className="text-white/70 leading-relaxed">
                  A women&apos;s health and wellness application supporting women through fertility tracking, pregnancy care, and postnatal support. Features personalized onboarding, cycle tracking, health education, and gynecologist consultations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Mobile Design</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Women&apos;s Health</span>
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">User Research</span>
                </div>
                <a 
                  href="/work/ui-project/mybaby-mobile"
                  className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"                >
                  View Project
                </a>
              </div>
              {/* Right side - Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={mybabyMobile}
                  alt="MyBaby Mobile"
                  fill
                  className="object-cover"
                />
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
