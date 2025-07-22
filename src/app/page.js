import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#181818] text-white flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-12 px-4 relative">
        <div className="flex flex-col items-center gap-2">
          <span className="bg-[#222] px-4 py-1 rounded-full text-[20px] mb-2">Hello!</span>
          <h1 className="text-[96px] sm:text-[96px] font-bold">
            I’m <span className="text-orange-400">Nneoma</span>,<br />
            Frontend Developer
          </h1>
        </div>
        
        <div className="flex items-center justify-center gap-10">
        <div className="absolute left-8 top-20 text-sm text-white/70 max-w-xs text-left hidden md:block">
          <span className="text-3xl">“</span>
          <div>
            Nneoma’s Exceptional Frontend & product design ensure our website’s success. Highly Recommended
          </div>
         </div>

          <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden border-8 border-orange-400">
            <Image src="/your-photo.jpg" alt="Nneoma" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute right-8 top-40 flex-col items-center hidden md:flex">
          <div className="flex items-center gap-1 text-orange-400 text-xl mb-1">
            {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
          </div>
          <div>
            <span className="text-[47px] font-bold">4 Years</span>
            <div className="text-[20px] text-white/70">Experience</div>
          </div>
        </div>
        </div>
        
      </section>

      {/* Skills */}
      <section className="py-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Skills</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {/* Add your skill icons here, assuming they are in public folder */}
          {/* <Image src="/react.svg" alt="React" width={64} height={64} /> ... */}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#111] py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Lets have a look at my <span className="text-orange-400">Projects.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Project 1 */}
          <div className="bg-[#181818] rounded-lg p-4 w-full md:w-1/3">
            {/* <Image src="/project1.png" alt="Food Delivery Menu Design" width={400} height={250} className="rounded" /> */}
            <div className="mt-4">
              <div className="text-orange-400 font-semibold text-sm">UI Concepts</div>
              <div className="text-lg font-bold">Food Delivery Menu Design</div>
              <div className="text-xs text-white/70">Daily UI works</div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-[#181818] rounded-lg p-4 w-full md:w-1/3">
            {/* <Image src="/project2.png" alt="Frontend Development" width={400} height={250} className="rounded" /> */}
            <div className="mt-4">
              <div className="text-orange-400 font-semibold text-sm">Frontend Development</div>
              <div className="text-lg font-bold">Glocally</div>
              <div className="text-xs text-white/70">Selected frontend projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
