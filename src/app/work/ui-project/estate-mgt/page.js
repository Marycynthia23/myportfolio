import Image from "next/image";

export default function EstateManagement() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Estate Management System</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A comprehensive property and estate management platform
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
              <p className="text-white">8 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Tools</h3>
              <p className="text-white">Figma, Adobe XD</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Designed a comprehensive estate management system that streamlines property operations, resident communications, and facility management. The platform needed to serve multiple user types including property managers, residents, and maintenance staff.
            </p>
            <p className="text-white/70 leading-relaxed">
              The design focuses on creating an intuitive multi-dashboard experience that adapts to different user roles while maintaining consistent design language. Special attention was given to mobile responsiveness as many users access the system on-the-go.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏢</div>
              <p className="text-white/60 text-lg">Estate Management Preview</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. User Research & Personas</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted extensive interviews with property managers, residents, and maintenance staff to understand their unique needs and pain points. Created detailed personas to guide design decisions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Multi-Role Dashboard Design</h4>
              <p className="text-white/70 leading-relaxed">
                Developed separate but cohesive dashboards for each user type, ensuring role-appropriate access to features and information while maintaining a unified brand experience.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Mobile-First Approach</h4>
              <p className="text-white/70 leading-relaxed">
                Designed with mobile users in mind, creating touch-friendly interfaces and streamlined workflows perfect for on-site property management and resident access.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Iterative Testing</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted multiple rounds of usability testing with real property managers and residents, refining the interface based on actual usage patterns and feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Property Management Dashboard</h4>
              <p className="text-white/70">Comprehensive overview of all properties, units, and occupancy rates</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Resident Portal</h4>
              <p className="text-white/70">Self-service platform for payments, maintenance requests, and communications</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Maintenance Tracking</h4>
              <p className="text-white/70">Real-time work order management with priority levels and status updates</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Financial Management</h4>
              <p className="text-white/70">Rent collection, expense tracking, and financial reporting tools</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Communication Hub</h4>
              <p className="text-white/70">In-app messaging, announcements, and notification system</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Document Management</h4>
              <p className="text-white/70">Centralized storage for leases, documents, and important files</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-white/90">Reduction in Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-white/90">User Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-white/90">Faster Payment Processing</div>
            </div>
          </div> 
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Figma</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Property Management</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Multi-Role Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Mobile-First</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Dashboard UI</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">User Research</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/ui-project/ecommerce-dashboard"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/ui-project/mybaby-mobile"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Next Project →
          </a>
        </div>
      </div>
    </main>
  );
}

