import Image from "next/image";

export default function NoCodeProjects() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      <div className="relative z-10 mx-auto px-[4%] py-8">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
           <a href="/work" className="text-[#FF6B35] hover:text-white transition-colors">
             ← Back to Work
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">No-Code Projects</h1>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>
      </div>
    <div className="text-6xl mx-auto text-center font-bold text-[#FF6B35] mb-6">
      <h1>No-Code Projects Coming Soon</h1>
    </div>
    </main>
    // <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
    //   {/* Orange curved shapes for visual design */}
    //   <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    //   <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
    //   {/* Main content container */}
    //   <div className="relative z-10 mx-auto px-[4%] py-8">
    //     {/* Header section */}
    //     <div className="mb-16">
    //       <div className="flex items-center gap-4 mb-8">
    //         <a href="/work" className="text-[#FF6B35] hover:text-white transition-colors">
    //           ← Back to Work
    //         </a>
    //       </div>
    //       <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">No-Code Projects</h1>
    //       <div className="w-24 h-1 bg-[#FF6B35]"></div>
    //     </div>

    //     {/* Project Cards */}
    //     <div className="space-y-12">
    //       {/* First Project Card */}
    //       <div className="bg-white rounded-2xl p-8 shadow-2xl">
    //         <div className="grid lg:grid-cols-2 gap-8 items-center">
    //           {/* Left side - Text */}
    //           <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">Business Website - Webflow</h2>
    //             <p className="text-gray-600 leading-relaxed">
    //               A fully responsive business website built with Webflow, featuring custom animations, CMS integration, and SEO optimization. This project showcases my ability to create professional websites without writing code.
    //             </p>
    //             <div className="flex flex-wrap gap-2">
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Webflow</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">CMS</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Responsive Design</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">SEO</span>
    //             </div>
    //             <div className="flex gap-4">
    //               <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
    //                 View Live
    //               </button>
    //               <button className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
    //                 View Details
    //               </button>
    //             </div>
    //           </div>
    //           {/* Right side - Image */}
    //           <div className="relative h-80 rounded-xl overflow-hidden">
    //             <Image
    //               src="/food.png"
    //               alt="Webflow Business Website"
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       {/* Second Project Card */}
    //       <div className="bg-white rounded-2xl p-8 shadow-2xl">
    //         <div className="grid lg:grid-cols-2 gap-8 items-center">
    //           {/* Left side - Image */}
    //           <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
    //             <span className="text-gray-500 text-lg">Bubble App Preview</span>
    //           </div>
    //           {/* Right side - Text */}
    //           <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">SaaS Application - Bubble</h2>
    //             <p className="text-gray-600 leading-relaxed">
    //               A complete SaaS platform built with Bubble.io featuring user authentication, payment processing, database management, and custom workflows. This project demonstrates my expertise in no-code app development.
    //             </p>
    //             <div className="flex flex-wrap gap-2">
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Bubble.io</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Payments</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Database</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Workflows</span>
    //             </div>
    //             <div className="flex gap-4">
    //               <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
    //                 View Live
    //               </button>
    //               <button className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
    //                 View Details
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Third Project Card */}
    //       <div className="bg-white rounded-2xl p-8 shadow-2xl">
    //         <div className="grid lg:grid-cols-2 gap-8 items-center">
    //           {/* Left side - Text */}
    //           <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">Automation System - Airtable & Zapier</h2>
    //             <p className="text-gray-600 leading-relaxed">
    //               An automated workflow system integrating Airtable, Zapier, and multiple third-party services. This project streamlines business processes and demonstrates my ability to create efficient automation solutions.
    //             </p>
    //             <div className="flex flex-wrap gap-2">
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Airtable</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Zapier</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Integration</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Automation</span>
    //             </div>
    //             <div className="flex gap-4">
    //               <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
    //                 View Live
    //               </button>
    //               <button className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
    //                 View Details
    //               </button>
    //             </div>
    //           </div>
    //           {/* Right side - Image */}
    //           <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
    //             <span className="text-gray-500 text-lg">Automation System Preview</span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Fourth Project Card */}
    //       <div className="bg-white rounded-2xl p-8 shadow-2xl">
    //         <div className="grid lg:grid-cols-2 gap-8 items-center">
    //           {/* Left side - Image */}
    //           <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
    //             <span className="text-gray-500 text-lg">Landing Page Preview</span>
    //           </div>
    //           {/* Right side - Text */}
    //           <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">Product Landing Page - Framer</h2>
    //             <p className="text-gray-600 leading-relaxed">
    //               A high-converting product landing page built with Framer, featuring smooth animations, interactive elements, and optimized conversion funnels. Perfect example of modern no-code web design.
    //             </p>
    //             <div className="flex flex-wrap gap-2">
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Framer</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Animations</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Conversion Optimization</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Interactive Design</span>
    //             </div>
    //             <div className="flex gap-4">
    //               <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
    //                 View Live
    //               </button>
    //               <button className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
    //                 View Details
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Fifth Project Card */}
    //       <div className="bg-white rounded-2xl p-8 shadow-2xl">
    //         <div className="grid lg:grid-cols-2 gap-8 items-center">
    //           {/* Left side - Text */}
    //           <div className="space-y-6">
    //             <h2 className="text-2xl font-bold text-gray-800">Membership Platform - Memberstack</h2>
    //             <p className="text-gray-600 leading-relaxed">
    //               A complete membership platform with gated content, subscription management, and user dashboards. Built using Memberstack integration with Webflow to create a seamless member experience.
    //             </p>
    //             <div className="flex flex-wrap gap-2">
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Memberstack</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Subscriptions</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">User Management</span>
    //               <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm">Content Gating</span>
    //             </div>
    //             <div className="flex gap-4">
    //               <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
    //                 View Live
    //               </button>
    //               <button className="border border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors">
    //                 View Details
    //               </button>
    //             </div>
    //           </div>
    //           {/* Right side - Image */}
    //           <div className="relative h-80 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
    //             <span className="text-gray-500 text-lg">Membership Platform Preview</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Call to Action Section */}
    //     <div className="text-center mt-20 mb-16">
    //       <h2 className="text-3xl font-bold text-[#FF6B35] mb-6">
    //         Interested in no-code solutions?<br />
    //         Let's create something amazing together!
    //       </h2>
    //       <a 
    //         href="mailto:onuohanneoma7@gmail.com"
    //         className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
    //       >
    //         onuohanneoma7@gmail.com
    //       </a>
    //     </div>
    //   </div>
    // </main>
  );
}

