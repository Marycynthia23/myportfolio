const metadata = [
  ["Role", "Lead UI/UX Designer"],
  ["Industry", "FinTech / Business Software"],
  ["Platform", "Mobile Application"],
  [
    "Scope",
    "Product Design, UX Strategy, User Flows, UI Design, Prototyping",
  ],
  ["Tools", "Figma, Claude Design"],
  ["Status", "MVP Design & Development"],
];

const responsibilities = [
  "Product workflow definition",
  "UX strategy and information architecture",
  "Onboarding experience",
  "Dashboard design",
  "Invoice management",
  "Stock and inventory management",
  "Interactive prototyping",
  "Stakeholder feedback and design iteration",
];

const businessTasks = [
  "Add an item",
  "Record a sale",
  "Generate an invoice",
  "Add stock",
  "Release goods",
  "Record a payment",
  "Review business performance",
];

const principles = [
  {
    title: "Clarity over complexity",
    description:
      "Use understandable language while keeping accounting logic behind the scenes.",
  },
  {
    title: "Connected workflows",
    description:
      "Ensure related activities work together rather than existing as disconnected features.",
  },
  {
    title: "Progressive disclosure",
    description: "Present relevant information at the right moment.",
  },
];

const decisions = [
  {
    number: "01",
    title: "A more actionable dashboard",
    description:
      "The dashboard was redesigned to prioritize immediate business actions and essential financial information. Detailed analytics were moved into a dedicated Reports section, creating more room for operational information and quick actions.",
  },
  {
    number: "02",
    title: "Connecting inventory to accounting",
    description:
      "Inventory management was introduced following stakeholder feedback. The workflow supports purchases, sales, stock releases, and payments while maintaining accurate accounting records.",
  },
  {
    number: "03",
    title: "Simplifying business onboarding",
    description:
      'The opening balances experience was reframed around the question, “Where does my business stand today?” This makes the purpose of setup more approachable. Onboarding was also refined to collect essential business information without introducing unnecessary features.',
  },
  {
    number: "04",
    title: "Connected invoice management",
    description:
      "The invoicing experience supports creating, editing, and updating invoices while maintaining relationships between sales, customer balances, and payments. VAT is automatically calculated using configured settings.",
  },
  {
    number: "05",
    title: "Simplifying settings",
    description:
      "Settings were organized into Personal Settings and Business Settings. Nonessential features were removed from the initial MVP structure to reduce navigation complexity.",
  },
];

const accountingEntries = [
  ["Purchase stock", "Stock", "Bank"],
  ["Record sale / invoice", "Customer", "Sales"],
  ["Release goods", "Cost of Goods Sold", "Stock"],
  ["Receive payment", "Bank", "Customer"],
];

const iterationHighlights = [
  "Adding stock management",
  "Simplifying dashboard quick actions",
  "Moving analytics to Reports",
  "Refining invoicing workflows",
  "Improving onboarding language",
  "Simplifying settings",
];

const deliverables = [
  "Mobile-first product interfaces",
  "Connected accounting and inventory workflows",
  "Interactive stakeholder prototypes",
  "Refined information architecture",
  "Consistent reusable interface patterns",
];

function CaseStudySection({ number, label, title, children }) {
  return (
    <section className="border-t border-[#333] py-10 sm:py-14">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#D97745]">
        Section {number} — {label}
      </p>
      <h2 className="mb-6 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-[#F5F3EF] sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-5 text-sm leading-7 text-[#A3A3A3] sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

function ProjectMetadata() {
  return (
    <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
      {metadata.map(([label, value]) => (
        <div
          key={label}
          className="border-t border-[#333] py-4 first:border-t-0 sm:first:border-t"
        >
          <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A3A3A3]">
            {label}
          </dt>
          <dd className="mt-2 text-sm leading-6 text-[#F5F3EF]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function WorkflowIllustration() {
  return (
    <div className="grid grid-cols-2 gap-px border border-[#333] bg-[#333] sm:grid-cols-4">
      {accountingEntries.map(([activity, debit, credit]) => (
        <div key={activity} className="bg-[#1B1B1B] p-4">
          <p className="text-xs font-medium text-[#F5F3EF]">{activity}</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-[#A3A3A3]">
            Debit
          </p>
          <p className="text-xs text-[#D97745]">{debit}</p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#A3A3A3]">
            Credit
          </p>
          <p className="text-xs text-[#D97745]">{credit}</p>
        </div>
      ))}
    </div>
  );
}

function DesignDecision({ decision }) {
  return (
    <article className="border-t border-[#333] pt-7 first:border-t-0 first:pt-0">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D97745]">
        Decision {decision.number}
      </p>
      <h3 className="mb-3 text-lg font-semibold text-[#F5F3EF]">
        {decision.title}
      </h3>
      <p className="mb-6 text-sm leading-7 text-[#A3A3A3]">
        {decision.description}
      </p>
    </article>
  );
}

export default function KoboBooksCaseStudy() {
  return (
    <article className="min-w-0 text-[#F5F3EF]">
      <header className="pb-10 sm:pb-14">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#D97745]">
          Product design case study
        </p>
        <h1 className="text-4xl font-semibold tracking-[0.08em] text-[#F5F3EF] sm:text-5xl">
          KOBOBOOKS
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-[#F5F3EF] sm:text-3xl">
          Simplifying business accounting for everyday entrepreneurs.
        </p>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-[#A3A3A3] sm:text-[15px]">
          <p>
            KoboBooks is a mobile-first accounting and inventory management
            solution designed to help small and medium-sized businesses manage
            their financial operations.
          </p>
          <p>
            My role was to translate complex accounting requirements into
            intuitive experiences that business owners could understand and use
            without extensive accounting knowledge.
          </p>
        </div>
        <div className="mt-8 border-y border-[#333] py-2">
          <ProjectMetadata />
        </div>
      </header>

      <CaseStudySection
        number="01"
        label="The Challenge"
        title="Making complex accounting workflows feel simple."
      >
        <p>
          Business owners need to manage sales, invoices, stock, payments, and
          financial records, often without specialized accounting knowledge.
        </p>
        <p>
          The design challenge was to create a connected experience that
          supports these operations without exposing unnecessary accounting
          complexity.
        </p>
        <ol className="grid list-inside list-decimal gap-3 pt-2 text-[#F5F3EF] sm:grid-cols-3">
          <li className="border-l border-[#D97745] pl-3">
            Complex accounting processes
          </li>
          <li className="border-l border-[#D97745] pl-3">
            Disconnected financial and inventory activities
          </li>
          <li className="border-l border-[#D97745] pl-3">
            Different levels of accounting knowledge among users
          </li>
        </ol>
        <blockquote className="border-l-2 border-[#D97745] bg-[#1B1B1B] px-5 py-5 text-base font-medium leading-7 text-[#F5F3EF] sm:px-7 sm:text-lg">
          How might we make accounting software approachable without
          compromising the accuracy businesses depend on?
        </blockquote>
      </CaseStudySection>

      <CaseStudySection
        number="02"
        label="My Role"
        title="From business requirements to intuitive product experiences."
      >
        <p>
          As Lead UI/UX Designer, I was responsible for translating stakeholder
          requirements into product workflows, information architecture,
          mobile interfaces, and interactive prototypes.
        </p>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="border-t border-[#333] py-3 text-[#F5F3EF]"
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        number="03"
        label="Design Approach"
        title="Designing around business tasks, not accounting terminology."
      >
        <p>
          The experience was structured around recognizable business
          activities:
        </p>
        <div className="flex flex-wrap gap-2">
          {businessTasks.map((task) => (
            <span
              key={task}
              className="border border-[#333] px-3 py-2 text-xs text-[#F5F3EF]"
            >
              {task}
            </span>
          ))}
        </div>
        <div className="grid gap-6 pt-3 sm:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-[#333] pt-4">
              <h3 className="mb-2 text-sm font-semibold text-[#F5F3EF]">
                {principle.title}
              </h3>
              <p className="text-xs leading-6 text-[#A3A3A3]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        number="04"
        label="Key Design Decisions"
        title="Turning business needs into connected product experiences."
      >
        <div className="space-y-10">
          {decisions.map((decision) => (
            <DesignDecision key={decision.number} decision={decision} />
          ))}
        </div>
        <div className="pt-8">
          <h3 className="mb-4 text-sm font-semibold text-[#F5F3EF]">
            Accounting relationships behind everyday actions
          </h3>
          <p className="mb-5 text-sm leading-7 text-[#A3A3A3]">
            People select familiar actions in the interface—such as purchasing
            stock or recording a payment—instead of manually creating debit and
            credit entries. KoboBooks maintains the accounting relationships
            behind those actions.
          </p>
          <WorkflowIllustration />
        </div>
      </CaseStudySection>

      <CaseStudySection
        number="05"
        label="Iteration & Collaboration"
        title="Turning stakeholder feedback into better product decisions."
      >
        <p>
          Figma and Claude Design were used to create interactive prototypes
          for stakeholder reviews. Feedback informed refinements across
          inventory, dashboards, invoicing, onboarding, and settings.
        </p>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {iterationHighlights.map((highlight) => (
            <li
              key={highlight}
              className="border-t border-[#333] py-3 text-[#F5F3EF]"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        number="06"
        label="Outcome"
        title="A connected design foundation for the KoboBooks MVP."
      >
        <p>
          The design work produced mobile experiences for onboarding,
          invoicing, inventory management, reporting, and settings.
        </p>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="border-t border-[#333] py-3 text-[#F5F3EF]"
            >
              {deliverable}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        number="07"
        label="Reflection"
        title="Simplicity comes from understanding complexity."
      >
        <p>
          Designing KoboBooks reinforced that simplifying a product does not
          mean removing the complexity that makes it functional. It means
          understanding business rules well enough to translate them into
          interactions users can navigate confidently.
        </p>
        <p>
          The project strengthened my approach to product design, particularly
          in balancing business requirements, technical constraints, usability,
          and MVP prioritization.
        </p>
      </CaseStudySection>
    </article>
  );
}
