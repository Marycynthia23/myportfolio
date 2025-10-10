import Image from "next/image";

export default function WeatherDashboard() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Weather Dashboard</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            A responsive weather application with location-based forecasts and interactive maps
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
              <p className="text-white">4 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Technologies</h3>
              <p className="text-white">HTML, CSS, JavaScript, API Integration</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              A comprehensive weather dashboard application that provides real-time weather data, forecasts, and detailed weather analytics. The application uses geolocation to provide location-based weather information and features interactive maps for visual weather tracking.
            </p>
            <p className="text-white/70 leading-relaxed">
              Built with clean, modern code using HTML, CSS, and JavaScript, the application demonstrates proficiency in API integration, asynchronous programming, and creating responsive, performant web applications.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌤️</div>
              <p className="text-white/60 text-lg">Weather Dashboard Preview</p>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Development Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. API Integration</h4>
              <p className="text-white/70 leading-relaxed">
                Integrated multiple weather APIs including OpenWeatherMap and Mapbox for comprehensive weather data and map visualization. Implemented error handling and fallback mechanisms for reliable data fetching.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. Geolocation Features</h4>
              <p className="text-white/70 leading-relaxed">
                Utilized the browser's Geolocation API to automatically detect user location. Implemented location search functionality allowing users to check weather for any city worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Data Visualization</h4>
              <p className="text-white/70 leading-relaxed">
                Created custom weather charts and graphs using Chart.js to visualize temperature trends, precipitation, and wind patterns. Designed intuitive weather icons and animations for better user experience.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. Performance Optimization</h4>
              <p className="text-white/70 leading-relaxed">
                Implemented caching strategies to reduce API calls and improve load times. Optimized images and assets for fast page rendering across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Real-Time Weather Data</h4>
              <p className="text-white/70">Current conditions, temperature, humidity, and wind speed</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">7-Day Forecast</h4>
              <p className="text-white/70">Extended weather predictions with detailed daily breakdowns</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Interactive Maps</h4>
              <p className="text-white/70">Visual weather layers showing precipitation, clouds, and temperature</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Location Search</h4>
              <p className="text-white/70">Search weather for any city with autocomplete suggestions</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Hourly Forecast</h4>
              <p className="text-white/70">Hour-by-hour weather predictions for the next 24 hours</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Weather Alerts</h4>
              <p className="text-white/70">Notifications for severe weather conditions and warnings</p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Highlights</h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Async/Await Pattern</h4>
              <p className="text-white/70">
                Implemented modern JavaScript async/await for clean, readable asynchronous code. Handled multiple API calls efficiently with Promise.all() for parallel data fetching.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">CSS Grid & Flexbox</h4>
              <p className="text-white/70">
                Utilized CSS Grid and Flexbox for responsive layouts that adapt seamlessly to different screen sizes. Implemented custom CSS animations for smooth transitions.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">API Rate Limiting</h4>
              <p className="text-white/70">
                Implemented request throttling and caching to stay within API rate limits. Built an efficient data refresh system that updates weather information at optimal intervals.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-white/90">Daily Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt;2s</div>
              <div className="text-white/90">Average Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.7/5</div>
              <div className="text-white/90">User Rating</div>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">HTML5</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">CSS3</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">JavaScript (ES6+)</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">OpenWeatherMap API</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Geolocation API</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Chart.js</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Mapbox</span>
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
            href="/work/frontend-projects/task-management"
            className="inline-block border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
          >
            ← Previous Project
          </a>
          <a 
            href="/work/frontend-projects"
            className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            Back to Frontend Projects
          </a>
        </div>
      </div>
    </main>
  );
}

