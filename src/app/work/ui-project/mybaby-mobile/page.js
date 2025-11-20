import Image from "next/image";
import mybabyMobile from "../../../images/mybaby-mobile.png";

export default function MyBabyMobile() {
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">MyBaby – A Personal Gynecologist App</h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl">
            Supporting women through fertility, pregnancy, and postnatal care with personalized health insights and consultations with their gynecologists
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
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Scope</h3>
              <p className="text-white">User Research, User Flow Design, Prototyping, Mobile UI Design</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Tools</h3>
              <p className="text-white">Figma</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Duration</h3>
              <p className="text-white">6 Weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">Platform</h3>
              <p className="text-white">Mobile (iOS & Android)</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Background</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              MyBaby is a women&apos;s health and wellness application designed to support women at various stages of reproductive life — from trying to conceive, to pregnancy tracking, and postnatal care. The goal of the MVP version was to simplify access to personalized health insights, fertility tracking, and consultations with gynecologists through a friendly, intuitive mobile experience.
            </p>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative h-90 rounded-xl overflow-hidden">
            <Image
              src={mybabyMobile}
              alt="MyBaby Mobile"
              fill
              className="object-cover h-full"
            />
          </div>
        </div>

        {/* The Challenge */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Many women struggle to find a single, reliable digital solution that helps them monitor fertility, pregnancy progress, and postpartum health. Most available apps cater to only one stage — fertility tracking <span className="font-semibold text-white">or</span> pregnancy monitoring — making it difficult to transition seamlessly between stages.
          </p>
          <p className="text-white/70 leading-relaxed mb-6">
            Our challenge was to <span className="font-semibold text-white">design a unified, user-friendly app</span> that meets the needs of three main user groups:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-white font-semibold">Women <span className="text-[#FF6B35]">trying to conceive</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-white font-semibold">Women who are <span className="text-[#FF6B35]">already pregnant</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-white font-semibold"><span className="text-[#FF6B35]">New mothers</span> seeking postpartum care</p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Objectives</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Create an intuitive onboarding flow that tailors the app experience based on user preference.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Design simple, visually clear tools for tracking menstrual cycles, pregnancy progress, and baby milestones.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Incorporate health education and consultation features that empower users to make informed decisions.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Ensure the MVP version balances functionality with ease of navigation.</p>
            </div>
          </div>
        </div>

        {/* User Research */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">User Research</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            I conducted surveys and informal interviews with 20 women aged 22–38 to understand their current approaches to fertility and pregnancy tracking. Key insights included:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Personalization is critical</h4>
              <p className="text-white/70">Users wanted recommendations based on their stage.</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Privacy and trust matter</h4>
              <p className="text-white/70">Medical and personal data should be handled carefully.</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Education and guidance</h4>
              <p className="text-white/70">Users wanted health tips and expert advice within the same app.</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Simplicity over complexity</h4>
              <p className="text-white/70">Visual calendars and color-coded guides instead of data-heavy analytics.</p>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed mt-6">
            These findings shaped the design direction toward an <span className="font-semibold text-white">empathetic, guided experience</span>.
          </p>
        </div>

        {/* User Types & Flows */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">User Types & Flows</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            The application supports two user types:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Guest Users</h4>
              <p className="text-white/70">Can explore the app and use limited features like BMI calculation and general health tips.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Registered Users</h4>
              <p className="text-white/70">Have full access to personalized cycle tracking, consultation, notes, and premium features.</p>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold text-white mb-4">User Preferences During Onboarding</h4>
          <div className="space-y-3">
            <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 p-4 rounded-lg">
              <p className="text-white font-semibold">1. Trying to Get Pregnant</p>
            </div>
            <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 p-4 rounded-lg">
              <p className="text-white font-semibold">2. Already Pregnant – Track and Care for Pregnancy</p>
            </div>
            <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 p-4 rounded-lg">
              <p className="text-white font-semibold">3. New Mother – Care for My Baby and I</p>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed mt-6">
            Each preference customizes the user&apos;s experience, timeline, and notifications.
          </p>
        </div>

        {/* Example Flow */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Example Flow: &quot;Trying to Get Pregnant&quot;</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-[#FF6B35] font-bold">1.</span>
              <p className="text-white/70">The user selects &quot;Trying to Get Pregnant&quot; during onboarding.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] font-bold">2.</span>
              <div className="flex-1">
                <p className="text-white/70 mb-2">The app collects essential data:</p>
                <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
                  <li>Last period date range</li>
                  <li>Age</li>
                  <li>Contraceptive history</li>
                  <li>Pregnancy history</li>
                  <li>Genotype and blood group</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] font-bold">3.</span>
              <div className="flex-1">
                <p className="text-white/70 mb-2">After sign-up, a <span className="font-semibold text-white">menstrual cycle calendar</span> is displayed with:</p>
                <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
                  <li>High and low fertility days</li>
                  <li>Health tips and video resources integrated along the timeline</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] font-bold">4.</span>
              <p className="text-white/70">Push notifications guide users with personalized tips on fertility improvement and healthy lifestyle choices.</p>
            </div>
          </div>
        </div>

        {/* Core Features of the MVP */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Core Features of the MVP</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Sign Up / Login</h4>
              <p className="text-white/70">Simple, mobile-first authentication via phone number and password</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">BMI Calculator</h4>
              <p className="text-white/70">For both guests and registered users</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Cycle Tracker</h4>
              <p className="text-white/70">Highlights ovulation windows and fertility periods</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Pregnancy Tracker / Calculator</h4>
              <p className="text-white/70">Tracks gestational age and provides weekly care guidance</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Health Tips</h4>
              <p className="text-white/70">Personalized educational content via articles, videos, and notifications</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Notes & Reminders</h4>
              <p className="text-white/70">Allows users to journal, save notes, or set reminders</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Consultation</h4>
              <p className="text-white/70">Video/audio or WhatsApp text consultations for premium users</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">User Timeline</h4>
              <p className="text-white/70">Dynamic updates showing progress, tips, and actions for each day</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Subscription (via Paystack)</h4>
              <p className="text-white/70">Unlocks premium consultation features</p>
            </div>
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h4 className="font-semibold text-white mb-2">Push Notifications</h4>
              <p className="text-white/70">Delivers health tips and important stage-based reminders</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">1. Information Architecture</h4>
              <p className="text-white/70 leading-relaxed">
                I mapped out the app&apos;s structure, grouping features under intuitive sections (Trackers, Health, Consultation, Profile).
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">2. User Flow Diagrams</h4>
              <p className="text-white/70 leading-relaxed">
                Defined paths for each user preference (Conception, Pregnancy, Motherhood).
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">3. Wireframing</h4>
              <p className="text-white/70 leading-relaxed">
                Created low-fidelity sketches to visualize screen relationships.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">4. UI Design</h4>
              <p className="text-white/70 leading-relaxed">
                Designed clean, calming interfaces using soft tones and rounded shapes to reflect the app&apos;s nurturing theme.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">5. Prototyping</h4>
              <p className="text-white/70 leading-relaxed">
                Built interactive prototypes in Figma to test transitions and flows.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-2">6. Usability Testing</h4>
              <p className="text-white/70 leading-relaxed">
                Conducted quick remote testing sessions with 5 participants to refine onboarding clarity and calendar usability.
              </p>
            </div>
          </div>
        </div>

        {/* Design Highlights */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Design Highlights</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Personalized Onboarding</h4>
              <p className="text-white/70">Tailors experience based on reproductive stage.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Visual Cycle Calendar</h4>
              <p className="text-white/70">Color-coded fertility and menstrual phases for easy interpretation.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Timeline View</h4>
              <p className="text-white/70">Displays daily guidance (&quot;You&apos;re 1 month and 14 days pregnant.&quot;).</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Consultation Integration</h4>
              <p className="text-white/70">Seamless link to WhatsApp for direct access to healthcare professionals.</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#FF6B35] rounded-2xl p-8 mb-12 shadow-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 ">
          <h3 className="text-2xl font-bold text-white mb-6">Results & Impact</h3>
          <div className="space-y-4 text-white mb-6">
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">The final MVP design was <span className="font-semibold">approved for development</span> and handed off with annotated Figma components.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">Usability tests showed <span className="font-semibold">92% task completion</span> for the onboarding and cycle tracking flows.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-white text-xl">•</span>
              <p className="text-white/90">Test users praised the app&apos;s <span className="font-semibold">visual simplicity</span>, <span className="font-semibold">clear navigation</span>, and <span className="font-semibold">personalized health content</span>.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Next Steps</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Integrate the <span className="font-semibold text-white">Admin Dashboard</span> for gynecologists to manage consultations and patient timelines.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Refine <span className="font-semibold text-white">data analytics</span> for menstrual and pregnancy tracking.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#FF6B35] text-xl">•</span>
              <p className="text-white/70 leading-relaxed">Expand <span className="font-semibold text-white">community features</span> for peer support among users.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
          <p className="text-white/70 leading-relaxed">
            Designing <span className="font-semibold text-white italic">MyBaby</span> reinforced the importance of empathy in digital health design. By combining functional tracking tools with guided health education, the app provides a holistic experience that empowers women to take charge of their reproductive journey.
          </p>
        </div>

        {/* Technologies Used */}
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Figma</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">User Research</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Mobile Design</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Women&apos;s Health</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Fertility Tracking</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Pregnancy Care</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">User Testing</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full">Prototyping</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <a 
            href="/work/ui-project/estate-mgt"
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

