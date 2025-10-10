import Image from "next/image";
import heroInstict from "../../../images/enhancedInstict.png";

export default function InstictAi() {
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
            <a href="/work/frontend-projects" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to Frontend Projects
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Instict Ai</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            An AI-powered platform for interview preparation
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
              <p className="text-white">Frontend Developer</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Timeline</h3>
              <p className="text-white">8 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Technologies</h3>
              <p className="text-white">React.js, Next.js, Tailwind CSS</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Instict AI is a cutting-edge platform designed to help job seekers prepare for interviews using artificial intelligence. The platform provides personalized interview questions, real-time feedback, and comprehensive analytics to improve interview performance.
            </p>
            <p className="text-white/70 leading-relaxed">
              Built with React.js and Next.js, the application features modern animations, smooth transitions, and optimized performance. The integration with AI services provides users with realistic interview scenarios and intelligent feedback mechanisms.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={heroInstict}
              alt="Instict AI Platform"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. Planning & Architecture</h4>
              <p className="text-white/70 leading-relaxed">
                Designed a scalable component architecture using React best practices. Implemented Next.js for server-side rendering and optimal SEO performance. Planned the state management strategy using React Context and custom hooks.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. AI Integration</h4>
              <p className="text-white/70 leading-relaxed">
                Integrated OpenAI's GPT API to generate contextual interview questions and provide intelligent feedback. Implemented real-time response analysis and scoring algorithms to evaluate user performance.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. UI/UX Implementation</h4>
              <p className="text-white/70 leading-relaxed">
                Built a responsive, accessible interface using Tailwind CSS. Implemented smooth animations and transitions for enhanced user experience. Created reusable component library for consistent design across the application.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Performance Optimization</h4>
              <p className="text-white/70 leading-relaxed">
                Optimized bundle size through code splitting and lazy loading. Implemented image optimization and caching strategies. Achieved excellent Core Web Vitals scores for optimal user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">AI-Powered Questions</h4>
              <p className="text-white/70">Dynamic interview questions tailored to specific job roles and industries</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Real-Time Feedback</h4>
              <p className="text-white/70">Instant analysis and suggestions to improve interview responses</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Practice Sessions</h4>
              <p className="text-white/70">Unlimited mock interviews with voice and text input options</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Progress Tracking</h4>
              <p className="text-white/70">Comprehensive analytics dashboard showing improvement over time</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Industry-Specific Content</h4>
              <p className="text-white/70">Curated questions for different sectors and experience levels</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Mobile Responsive</h4>
              <p className="text-white/70">Fully optimized experience across all devices and screen sizes</p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Highlights</h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Next.js App Router</h4>
              <p className="text-white/70">
                Utilized Next.js 15+ App Router for improved performance and developer experience. Implemented server components and streaming for faster page loads.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Custom Hooks & State Management</h4>
              <p className="text-white/70">
                Developed custom React hooks for API integration, form validation, and user authentication. Implemented Redux Toolkit for efficient data fetching, caching, and global state management across the application.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Tailwind CSS & Animations</h4>
              <p className="text-white/70">
                Designed with Tailwind CSS utility classes for rapid development. Added Framer Motion for smooth, performant animations.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        {/* <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/90">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-white/90">Interview Success Rate</div>
            </div>
          </div>
        </div> */}

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Next.js</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">React.js</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Javascript</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">API Integration</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">OpenAI API</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Framer Motion</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Git</span>
          </div>
        </div>

        {/* Links */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Project Links</h3>
          <div className="flex gap-4">
            <a 
              href="https://instict.ai/"
              className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
            >
              View Live Site
            </a>
            {/* <a 
              href="#"
              className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
            >
              View Source Code
            </a> */}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/frontend-projects"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Back to Frontend Projects
          </a>
          <a 
            href="/work/frontend-projects/atarrodo"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Next Project →
          </a>
        </div>
      </div>
    </main>
  );
}

