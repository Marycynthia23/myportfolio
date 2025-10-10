import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      {/* Orange curved shapes for visual design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">

        {/* Main content section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Introduction text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-[#FF6B35]">Hello,</span><br />
                <span className="text-[#FF6B35]">I'm Nneoma Onuoha</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                I'm Nneoma Onuoha, a talented Front end Developer. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I'm skilled at web development.
              </p>
              
              <p className="text-white/90">
                I develop websites with HTML, CSS, JavaScript, React.js and Vue.js. I have top skills in using coding softwares like Git and Github with frameworks like React, Vue, Nuxt, Bootstrap.
              </p>
              
              <p className="text-white/90">
                Being a creative, hardworking and result oriented lady, I always work towards achieving best result on any project.
              </p>
            </div>
          </div>

          {/* Right side - Profile image with orange background */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              {/* Orange curved background */}
              <div className="absolute inset-0 bg-[#FF6B35] rounded-3xl transform rotate-3 scale-105"></div>
              
              {/* Profile image */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <Image
                  src="/myPic.jpg"
                  alt="Nneoma Onuoha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="text-center mt-20 mb-16">
          <h2 className="text-3xl font-bold text-[#FF6B35] mb-6">
            Want to work together?<br/> Get in touch.
          </h2>
          <a 
            href="mailto:onuohanneoma7@gmail.com"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6B35]/80 transition-colors"
          >
            onuohanneoma7@gmail.com
          </a>
        </div>
      </div>

      {/* Footer section with social links */}
      
    </main>
  );
}
