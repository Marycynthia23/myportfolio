import Image from "next/image";

export default function TaskManagement() {
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
            <a href="/work/frontend-projects" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to Frontend Projects
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Task Management App</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A collaborative task management application with real-time updates
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
              <p className="text-white">6 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Technologies</h3>
              <p className="text-white">JavaScript, Bootstrap, WebSocket</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              A collaborative task management application designed for teams to organize, track, and complete projects efficiently. The application features real-time updates, drag-and-drop functionality, team collaboration tools, and advanced filtering options.
            </p>
            <p className="text-white/70 leading-relaxed">
              Built with vanilla JavaScript and Bootstrap, the application demonstrates core web development skills including DOM manipulation, event handling, and WebSocket integration for real-time communication.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-white/60 text-lg">Task Management Preview</p>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. Core Functionality</h4>
              <p className="text-white/70 leading-relaxed">
                Implemented task creation, editing, and deletion with vanilla JavaScript. Built a robust state management system to handle task data and user interactions efficiently.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Drag & Drop Interface</h4>
              <p className="text-white/70 leading-relaxed">
                Created an intuitive drag-and-drop system using the HTML5 Drag and Drop API. Implemented smooth animations and visual feedback for better user experience.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Real-Time Updates</h4>
              <p className="text-white/70 leading-relaxed">
                Integrated WebSocket for real-time synchronization across team members. Ensured instant updates when tasks are created, modified, or completed by any team member.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Responsive Design</h4>
              <p className="text-white/70 leading-relaxed">
                Utilized Bootstrap framework for responsive layouts. Ensured optimal viewing experience across desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Drag & Drop Kanban Board</h4>
              <p className="text-white/70">Visual task organization with intuitive drag-and-drop interface</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Real-Time Collaboration</h4>
              <p className="text-white/70">Instant updates across all team members using WebSocket</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Task Prioritization</h4>
              <p className="text-white/70">Set priority levels and due dates for effective task management</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Advanced Filtering</h4>
              <p className="text-white/70">Filter tasks by status, priority, assignee, and due date</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Team Assignment</h4>
              <p className="text-white/70">Assign tasks to team members with notification system</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Activity Timeline</h4>
              <p className="text-white/70">Track all changes and updates with detailed activity log</p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Highlights</h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Vanilla JavaScript</h4>
              <p className="text-white/70">
                Built entirely with vanilla JavaScript without frameworks, demonstrating strong fundamental programming skills and DOM manipulation expertise.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">WebSocket Integration</h4>
              <p className="text-white/70">
                Implemented real-time communication using WebSocket protocol. Handled connection states, reconnection logic, and message broadcasting efficiently.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Local Storage Persistence</h4>
              <p className="text-white/70">
                Utilized browser's localStorage API to persist task data locally, ensuring users don't lose work even when offline.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Teams Using</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-white/90">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/90">Uptime</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">JavaScript (ES6+)</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Bootstrap</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">WebSocket</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">HTML5</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">CSS3</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Local Storage</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Git</span>
          </div>
        </div>

        {/* Links */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Project Links</h3>
          <div className="flex gap-4">
            <a 
              href="#"
              className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
            >
              View Live Site
            </a>
            <a 
              href="#"
              className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
            >
              View Source Code
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/frontend-projects/atarrodo"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/frontend-projects/weather-dashboard"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Next Project →
          </a>
        </div>
      </div>
    </main>
  );
}

