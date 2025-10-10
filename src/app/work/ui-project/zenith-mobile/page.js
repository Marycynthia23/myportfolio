import Image from "next/image";
import mobileDesign from "../../../images/zenMobile.png";

export default function ZenithMobile() {
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
            <a href="/work/ui-project" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to UI Projects
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Zenith Mobile Banking</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A modern mobile banking interface for Zenith Bank
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
              <p className="text-white">UI/UX Designer</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Timeline</h3>
              <p className="text-white">4 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Tools</h3>
              <p className="text-white">Figma, Sketch</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Zenith Bank required a comprehensive redesign of their mobile banking application to improve user experience and align with modern banking standards. The challenge was to create an intuitive interface that simplifies complex financial operations while maintaining the highest security standards.
            </p>
            <p className="text-white/70 leading-relaxed">
              The design focuses on user-centered navigation, clear visual hierarchy, and accessibility. Special attention was given to making financial data easily digestible and transactions seamless across different banking services.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={mobileDesign}
              alt="Zenith Mobile Banking Design"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. User Research</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted in-depth interviews with Zenith Bank customers to understand their pain points with the current mobile app. Identified key frustrations around navigation complexity and transaction clarity.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Information Architecture</h4>
              <p className="text-white/70 leading-relaxed">
                Restructured the app's navigation based on user mental models and task frequency analysis. Created a logical flow that prioritizes the most common banking operations.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Visual Design</h4>
              <p className="text-white/70 leading-relaxed">
                Developed a clean, modern interface that balances professionalism with approachability. Used Zenith's brand colors strategically to guide user attention and create a cohesive brand experience.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Usability Testing</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted multiple rounds of usability testing with diverse user groups. Refined interactions based on feedback to ensure accessibility and ease of use across all age groups.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Quick Actions Dashboard</h4>
              <p className="text-white/70">One-tap access to frequently used banking operations</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Intuitive Transfers</h4>
              <p className="text-white/70">Simplified money transfer flow with clear confirmation steps</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Transaction History</h4>
              <p className="text-white/70">Enhanced filtering and search capabilities for better tracking</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Biometric Security</h4>
              <p className="text-white/70">Modern authentication methods with fingerprint and face ID</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Card Management</h4>
              <p className="text-white/70">Easy card controls including freeze, limits, and virtual cards</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Bill Payments</h4>
              <p className="text-white/70">Streamlined bill payment with saved billers and reminders</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/90">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-white/90">Faster Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-white/90">Reduced Support Calls</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Figma</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Mobile Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Banking UI</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Prototyping</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">User Testing</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Accessibility</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/ui-project/instict-waitlist"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/ui-project/ecommerce-dashboard"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Next Project →
          </a>
        </div>
      </div>
    </main>
  );
}

