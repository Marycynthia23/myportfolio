import Image from "next/image";

export default function Work() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 mx-auto px-[4%] py-8">
        {/* Work Categories Section */}
        <div className="mb-20">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#FAFAFA] mb-4">My Works</h1>
            <div className="w-24 h-1 bg-[#FF6B35]"></div>
          </div>

          {/* Work Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Frontend Projects Card */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">FE</span>
                </div>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">Frontend Projects</h2>
                <p className="text-[#E5E5E5] leading-relaxed">
                  Discover my frontend development projects built with React, Vue.js, JavaScript, and modern web technologies.
                </p>
                <a 
                  href="/work/frontend-projects"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                >
                  View Frontend Projects
                </a>
              </div>
            </div>
            {/* UI Projects Card */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">UI</span>
                </div>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">UI Projects</h2>
                <p className="text-[#E5E5E5] leading-relaxed">
                  Explore my UI/UX design projects including mobile apps, web interfaces, and dashboard designs created with Figma.
                </p>
                <a 
                  href="/work/ui-project"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                >
                  View UI Projects
                </a>
              </div>
            </div>


            {/* No-Code Projects Card */}
            {/* <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">NC</span>
                </div>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">No-Code Projects</h2>
                <p className="text-[#E5E5E5] leading-relaxed">
                  Check out my no-code projects built with platforms like Webflow, Bubble, and other innovative no-code tools.
                </p>
                <a 
                  href="/work/no-code"
                  className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
                >
                  View No-Code Projects
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Featured Projects Section */}
        {/* <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#FAFAFA] mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-[#FF6B35]"></div>
          </div>

          
          <div className="space-y-12">
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#FAFAFA]">Project Name</h2>
                  <p className="text-[#E5E5E5] leading-relaxed">
                    I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                  </p>
                  <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
                    View Project
                  </button>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/food.png"
                    alt="Project Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/skills.png"
                    alt="Project Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#FAFAFA]">Project Name</h2>
                  <p className="text-[#E5E5E5] leading-relaxed">
                    What was your role, your deliverables, if the project was personal, freelancing.
                  </p>
                  <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Call to Action Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#FFffff] mb-6">
            Want to work together?<br />
            Get in touch.
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