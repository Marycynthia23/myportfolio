import Image from "next/image";

export default function EcommerceDashboard() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-[4%] py-8">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <a href="/work/ui-project" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to UI Projects
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">E-commerce Dashboard</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A comprehensive dashboard interface for e-commerce analytics and management
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
              <p className="text-white">UI/UX Designer, Data Visualization</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Timeline</h3>
              <p className="text-white">6 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Tools</h3>
              <p className="text-white">Figma, Adobe XD, Chart.js</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Designed a comprehensive dashboard interface for an e-commerce platform that needed to present complex business analytics in an accessible and actionable format. The challenge was to balance data density with usability while maintaining visual clarity.
            </p>
            <p className="text-white/70 leading-relaxed">
              The design emphasizes data visualization, user experience, and accessibility. The dashboard provides merchants with real-time insights into sales performance, inventory management, customer behavior, and financial metrics all in one unified interface.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-white/60 text-lg">Dashboard Preview</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. Requirements Analysis</h4>
              <p className="text-white/70 leading-relaxed">
                Worked closely with stakeholders to identify key metrics and KPIs that merchants need to track. Prioritized features based on business impact and user frequency of use.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Information Hierarchy</h4>
              <p className="text-white/70 leading-relaxed">
                Organized complex data sets into logical groupings. Created a flexible grid system that accommodates different data visualization types while maintaining consistency.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Data Visualization</h4>
              <p className="text-white/70 leading-relaxed">
                Designed custom charts and graphs that make complex data easily digestible. Implemented color coding and interactive elements to help users drill down into specific metrics.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Accessibility Focus</h4>
              <p className="text-white/70 leading-relaxed">
                Ensured WCAG 2.1 AA compliance with proper color contrast, keyboard navigation, and screen reader support. Tested with users of varying abilities to ensure inclusive design.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Real-Time Analytics</h4>
              <p className="text-white/70">Live data updates for sales, revenue, and customer activity</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Customizable Widgets</h4>
              <p className="text-white/70">Drag-and-drop interface to personalize dashboard layout</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Advanced Filtering</h4>
              <p className="text-white/70">Multi-parameter filtering for detailed data analysis</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Export Capabilities</h4>
              <p className="text-white/70">One-click export to CSV, PDF, and Excel formats</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Performance Insights</h4>
              <p className="text-white/70">AI-powered recommendations based on sales trends</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Multi-Store View</h4>
              <p className="text-white/70">Aggregate or individual store analytics at a glance</p>
            </div>
          </div>
        </div>

        {/* Design Decisions */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Decisions</h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Color Coding System</h4>
              <p className="text-white/70">
                Implemented a consistent color system where green indicates positive trends, red for negative, and orange for neutral or action-required items. This helps users quickly scan and identify areas needing attention.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Progressive Disclosure</h4>
              <p className="text-white/70">
                Used expandable cards and drill-down functionality to prevent information overload. Users can access detailed data only when needed, keeping the main view clean and focused.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Responsive Grid System</h4>
              <p className="text-white/70">
                Designed a flexible 12-column grid that adapts seamlessly from desktop to tablet to mobile, ensuring data accessibility across all devices without compromising readability.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-white/90">User Adoption Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-white/90">Time Saved on Reporting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-white/90">User Satisfaction Score</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Figma</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Dashboard Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Data Visualization</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Accessibility</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">UX Research</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Responsive Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Chart.js</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/ui-project/zenith-mobile"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/ui-project"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Back to UI Projects
          </a>
        </div>
      </div>
    </main>
  );
}

