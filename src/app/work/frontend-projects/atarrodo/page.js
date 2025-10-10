import Image from "next/image";
import atarrodoHero from "../../../images/atarrodoHero.png";

export default function Atarrodo() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Atarrodo</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A web application for learning and practicing different African languages
          </p>
        </div>

        {/* Project Details */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Role</h3>
              <p className="text-white">Full-Stack Developer</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Timeline</h3>
              <p className="text-white">12 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Technologies</h3>
              <p className="text-white">React.js, Next.js, TypeScript, Firebase</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Atarrodo is an innovative language learning platform focused on preserving and teaching African languages. The application provides interactive lessons, pronunciation guides, and cultural context to help learners master languages like Yoruba, Igbo, Swahili, and more.
            </p>
            <p className="text-white/70 leading-relaxed">
              Built with modern web technologies, the platform features interactive lessons, user authentication, progress tracking, and a community forum. The application emphasizes cultural preservation while providing an engaging learning experience.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={atarrodoHero}
              alt="Atarrodo Language Platform"
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
              <h4 className="text-xl font-semibold text-white mb-2">1. Research & Planning</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted extensive research on language learning methodologies and African linguistic patterns. Collaborated with native speakers and linguists to ensure cultural accuracy and effective teaching methods.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Frontend Development</h4>
              <p className="text-white/70 leading-relaxed">
                Built the user interface with React and Next.js, implementing TypeScript for type safety. Created interactive lesson components with audio playback, visual aids, and progress indicators.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Backend & Database</h4>
              <p className="text-white/70 leading-relaxed">
                Integrated Firebase for authentication, real-time database, and cloud storage. Implemented user progress tracking, lesson management system, and community features.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Testing & Iteration</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted user testing with language learners and native speakers. Iteratively improved the learning flow based on feedback and analytics data.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Interactive Lessons</h4>
              <p className="text-white/70">Engaging lessons with audio, video, and interactive exercises</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Pronunciation Guide</h4>
              <p className="text-white/70">Audio recordings from native speakers with phonetic breakdowns</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Progress Tracking</h4>
              <p className="text-white/70">Personalized dashboard showing learning milestones and achievements</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Cultural Context</h4>
              <p className="text-white/70">Learn about traditions, proverbs, and cultural significance</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Community Forum</h4>
              <p className="text-white/70">Connect with other learners and native speakers</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Offline Mode</h4>
              <p className="text-white/70">Download lessons for learning without internet connection</p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Highlights</h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">TypeScript Implementation</h4>
              <p className="text-white/70">
                Full TypeScript implementation ensuring type safety across the application. Custom types and interfaces for lesson data, user progress, and API responses.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Firebase Integration</h4>
              <p className="text-white/70">
                Utilized Firebase Authentication for secure user management, Firestore for real-time data synchronization, and Cloud Storage for audio and media files.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Progressive Web App</h4>
              <p className="text-white/70">
                Implemented PWA features including offline support, push notifications, and app-like experience on mobile devices.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-white/90">African Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/90">User Rating</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">React.js</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Next.js</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">TypeScript</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Firebase</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">PWA</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Audio API</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Git</span>
          </div>
        </div>

        {/* Links */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Project Links</h3>
          <div className="flex gap-4">
            <a 
              href="https://atarrodo.com/"
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
            href="/work/frontend-projects/instict-ai"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/frontend-projects/task-management"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Next Project →
          </a>
        </div>
      </div>
    </main>
  );
}

