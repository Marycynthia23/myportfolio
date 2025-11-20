import Image from "next/image";
import paintTexture from "../../../images/landpic.png";

const projectDetails = [
  { label: "Role", value: "Product Designer" },
  { label: "Scope", value: "Information Architecture, UX Writing, Website UI" },
  { label: "Timeline", value: "2 Weeks" },
  { label: "Deliverables", value: "Site map, copy deck, hi-fi desktop concepts" },
  { label: "Tools", value: "Figma, FigJam, Notion" },
  { label: "Industry", value: "Manufacturing & Home Improvement" },
];

const objectives = [
  "Tell a compelling brand story that highlights bespoke manufacturing.",
  "Guide homeowners toward requesting custom paints and application services.",
  "Provide a business-ready path for distributors to join the network.",
  "Surface social proof and operational strengths to build immediate trust.",
];

const sitePages = [
  {
    title: "Home",
    goal: "Spotlight bespoke production and guide visitors to take action.",
    highlights: [
      "Hero: “Your Imagination, Our Paint.” with dual CTAs",
      "About blurb positioning the brand as a creative partner",
      "What We Offer + Why Choose Us strip",
      "Closing CTA for Custom Paint or Distributor application",
    ],
  },
  {
    title: "Custom Paint",
    goal: "Collect detailed requests for made-to-order paints and application services.",
    highlights: [
      "Three-step explainer (Share inspiration → Pick type/finish → Add application)",
      "Form fields for contact, address, paint specs, reference upload",
      "Checkbox to request professional application",
      "Friendly confirmation message to set expectations",
    ],
  },
  {
    title: "Become a Distributor",
    goal: "Recruit partners who can extend the brand’s reach across regions.",
    highlights: [
      "Benefits grid covering quality, pricing, marketing, logistics",
      "Requirements list detailing registration and storage needs",
      "Application form capturing business type and motivation",
      "Response promise within 3–5 working days",
    ],
  },
  {
    title: "About Us",
    goal: "Build trust with the brand story, mission, vision, and values.",
    highlights: [
      "Narrative on crafting each bucket to order",
      "Mission, Vision, and Core Values listed clearly",
      "Reassurance that formulation through application is handled in-house",
    ],
  },
  {
    title: "Services",
    goal: "Show every service stream at a glance.",
    highlights: [
      "Custom Paint Production for multiple environments",
      "Professional Paint Application from prep to finish",
      "Color Consultation expertise",
      "Distribution Support for partners",
    ],
  },
  {
    title: "Contact",
    goal: "Offer multiple touchpoints for quick conversations.",
    highlights: [
      "Address, email, phone, working hours block",
      "“Let’s Talk Color!” headline with supportive copy",
      "Simple contact form and call-to-action reminder",
    ],
  },
  {
    title: "FAQs",
    goal: "Reduce friction with direct answers.",
    highlights: [
      "Production timelines and delivery reach",
      "Minimum/maximum order handling",
      "Ability to bundle paint and application",
      "Distributor onboarding steps",
    ],
  },
];

const forms = [
  {
    name: "Custom Paint Request",
    description:
      "Captures everything needed to mix the perfect batch and schedule optional application services.",
    fields: [
      "Full Name, Email, Phone Number",
      "Address (optional)",
      "Paint description (color, quantity, finish, use-case)",
      "Upload reference photo (optional)",
      "Checkbox: “I’d like your team to apply the paint for me.”",
    ],
    button: "Request My Custom Paint",
    confirmation:
      "Thanks! Our color experts will contact you soon to confirm your custom paint details and give you a quote.",
  },
  {
    name: "Distributor Application",
    description:
      "Qualifies retailers, wholesalers, and contractors before onboarding them into the network.",
    fields: [
      "Full Name / Business Name",
      "Email & Phone Number",
      "Location + Type of Business (Retailer / Wholesaler / Contractor)",
      "Short paragraph: Why you’d like to be a distributor",
    ],
    button: "Apply to Become a Distributor",
    confirmation:
      "Your application has been received. Our team will contact you within 3–5 working days.",
  },
  {
    name: "General Contact",
    description: "A simple touchpoint for consultations, support, or partnership inquiries.",
    fields: ["Name", "Email", "Phone", "Message"],
    button: "Send Message",
    confirmation: "Prefer a call? Reach us directly at the hotline.",
  },
];

export default function BespokePaintProject() {
  return (
    <main className="min-h-screen bg-[#181818] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 mx-auto px-[4%] py-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <a href="/work/ui-project" className="text-[#FF6B35] hover:text-white transition-colors">
              ← Back to UI Projects
            </a>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Bespoke Paint Company Website
          </h1>
          <div className="w-24 h-1 bg-[#FF6B35] mb-6"></div>
          <p className="text-xl text-white/80 max-w-4xl">
            A conversion-focused site concept for a bespoke paint brand that manufactures on demand,
            manages professional application, and grows through a distributor network. Friendly,
            professional, trustworthy.
          </p>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {projectDetails.map((detail) => (
              <div key={detail.label}>
                <h3 className="text-sm font-semibold text-white/60 uppercase mb-2">{detail.label}</h3>
                <p className="text-white">{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              The bespoke paint company needed a website that balances storytelling with rigorous
              conversion paths. Beyond showcasing color craftsmanship, the experience had to collect
              detailed paint briefs, sell professional application services, and recruit regional
              distributors.
            </p>
            <p className="text-white/70 leading-relaxed">
              The solution pairs expressive copy with clear IA, giving homeowners and business
              partners obvious next steps while highlighting the brand’s eco-friendly production and
              on-time delivery promise.
            </p>
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={paintTexture}
              alt="Bespoke paint website mockup"
              fill
              className="object-cover h-full"
            />
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Objectives</h2>
          <div className="space-y-4">
            {objectives.map((objective) => (
              <div key={objective} className="flex gap-3">
                <span className="text-[#FF6B35] text-xl">•</span>
                <p className="text-white/70 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Brand Pillars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Made-On-Demand Quality",
                copy:
                  "Freshly mixed pigments for every order keep colors vibrant and timelines reliable.",
              },
              {
                title: "Eco-Friendly Craftsmanship",
                copy:
                  "Low-VOC formulations and durable finishes serve both residential and commercial clients.",
              },
              {
                title: "Creative Partnership",
                copy:
                  "Expert consultations guide homeowners, architects, and facility managers to the right palette.",
              },
              {
                title: "Distributor-Ready",
                copy:
                  "Marketing kits and logistics support make it easy for partners to sell locally.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-white/70 leading-relaxed">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Site Architecture</h2>
          <div className="space-y-6">
            {sitePages.map((page) => (
              <div key={page.title} className="border border-white/10 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <p className="uppercase text-white/50 text-sm tracking-wide">{page.title} Page</p>
                    <h3 className="text-2xl font-semibold text-white">{page.title}</h3>
                  </div>
                  <span className="inline-flex text-sm text-white/80 bg-white/5 px-4 py-2 rounded-full">
                    {page.goal}
                  </span>
                </div>
                <ul className="list-disc ml-5 text-white/70 space-y-2">
                  {page.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Form-First Conversion Strategy</h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Every major pathway is supported by a conversational form paired with expectation-setting
            confirmations so prospects always know the next touchpoint.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {forms.map((form) => (
              <div key={form.name} className="bg-[#FF6B35]/5 border border-[#FF6B35]/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{form.name}</h3>
                <p className="text-white/70 text-sm mb-4">{form.description}</p>
                <ul className="space-y-2 text-white/70 mb-4">
                  {form.fields.map((field) => (
                    <li key={field} className="flex gap-2">
                      <span className="text-[#FF6B35]">•</span>
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white font-semibold mb-1">Button: {form.button}</p>
                <p className="text-white/60 text-sm">{form.confirmation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Why the Experience Converts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Localized Manufacturing",
                copy:
                  "Emphasizing fresh, made-to-order batches reassures clients about quality and delivery speed.",
              },
              {
                title: "Process Transparency",
                copy:
                  "Step-by-step explanations show how inspiration becomes finished paint, reducing uncertainty.",
              },
              {
                title: "Dual Audience Journeys",
                copy:
                  "Homeowners flow toward “Request Custom Paint” while businesses see immediate distributor CTAs.",
              },
              {
                title: "Always-On Support",
                copy:
                  "Contact blocks and CTA reminders appear throughout the experience, keeping help within reach.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
          <div className="space-y-4">
            {[
              "Translate the IA into full desktop + mobile mockups with swatch-inspired UI details.",
              "Prototype the forms with inline validation and success modals for a polished experience.",
              "Layer in photography that captures the people, textures, and spaces behind the brand.",
              "Prepare CMS-ready blocks so marketing teams can update FAQs and services without dev support.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-[#FF6B35] text-xl">•</span>
                <p className="text-white/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <a
            href="/work/ui-project/instict-waitlist"
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


