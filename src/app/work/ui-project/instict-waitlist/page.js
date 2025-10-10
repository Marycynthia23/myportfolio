import Image from "next/image";
import waitlist from "../../../images/instictWaitlt.png";

export default function InstictWaitlist() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Instict Ai Waitlist</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A waitlist UI for Instict to get users to sign up for the waitlist
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-[#181818] rounded-2xl p-8 mb-12 shadow-2xl border border-white/10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
              <p className="text-white">UI/UX Designer</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Timeline</h3>
              <p className="text-white">1 Day</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Tools</h3>
              <p className="text-white">Figma, Tally Forms</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Instict AI needed a compelling waitlist page to capture early adopter interest for their AI-powered interview preparation platform. The goal was to create a conversion-focused design that communicates the product&apos;s value proposition while collecting user information efficiently.
            </p>
            <p className="text-white/70 leading-relaxed">
              The design emphasizes clarity, trust-building elements, and a seamless sign-up flow. Special attention was given to the visual hierarchy to guide users naturally through the value proposition to the call-to-action.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] rounded-2xl p-8 mb-12 shadow-2xl border border-white/10">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={waitlist}
              alt="Instict Waitlist Design"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-[#181818] rounded-2xl p-8 mb-12 shadow-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. Research & Discovery</h4>
              <p className="text-white/70 leading-relaxed">
                Analyzed successful waitlist pages from leading SaaS companies and identified key elements that drive conversions. Conducted user research to understand what information matters most to potential users when joining a waitlist.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Wireframing</h4>
              <p className="text-white/70 leading-relaxed">
                Created low-fidelity wireframes focusing on content hierarchy and user flow. Tested multiple layouts to find the optimal balance between information density and visual appeal.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Visual Design</h4>
              <p className="text-white/70 leading-relaxed">
                Developed a modern, professional aesthetic that conveys innovation and trustworthiness. Used strategic color psychology with the primary orange accent to create urgency and encourage action.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Prototyping & Testing</h4>
              <p className="text-white/70 leading-relaxed">
                Built interactive prototypes and conducted usability testing with target users. Iterated based on feedback to optimize the sign-up flow and reduce friction points.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] rounded-2xl p-8 mb-12 shadow-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Clear Value Proposition</h4>
              <p className="text-white/70">Immediately communicates the product&apos;s benefits above the fold</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Minimal Form Fields</h4>
              <p className="text-white/70">Streamlined sign-up process asking only for essential information</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Social Proof</h4>
              <p className="text-white/70">Strategic placement of testimonials and user count to build trust</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Mobile Responsive</h4>
              <p className="text-white/70">Fully optimized experience across all device sizes</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-white/90">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/90">Waitlist Signups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">45s</div>
              <div className="text-white/90">Avg. Time on Page</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] rounded-2xl p-8 mb-12 shadow-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Figma</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">UI Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Waitlist Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Prototyping</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">User Research</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">A/B Testing</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/ui-project"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Back to UI Projects
          </a>
          <a 
            href="/work/ui-project/zenith-mobile"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Next Project →
          </a>
        </div>
      </div>
    </main>
  );
}

