"use client"
import Image from "next/image";
import aboutPic from "../images/nnepix.png";

const expertise = [
  {
    title: "Product Design",
    skills: [
      "Product Strategy",
      "UX Research",
      "UI/UX Design",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "Responsive UI",
      "API Integration",
    ],
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#181818] text-white">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#FF6B35]">
              About me
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#F5F3EF] sm:text-5xl">
              Hello, I&apos;m Nneoma Onuoha.
            </h1>
            <p className="mt-4 text-xl font-medium leading-snug text-[#FF6B35] sm:text-2xl">
              Senior Product Designer &amp; Frontend Engineer
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              <p>
                I transform complex problems into intuitive, scalable digital
                experiences. I bring product design and frontend engineering
                together to connect business goals with user needs and
                production-ready implementation.
              </p>
              <p>
                My experience spans fintech, enterprise software, AI-powered
                products, and consumer applications. I work across the product
                lifecycle—from understanding problems and shaping product
                strategy to mapping user journeys, designing interfaces, and
                building responsive experiences.
              </p>
              <p>
                I value clear thinking, thoughtful collaboration, and design
                systems that help teams deliver consistent products. Whether
                I&apos;m prototyping an idea or implementing a frontend
                experience, I focus on making useful technology feel clear and
                human.
              </p>
            </div>

            <section className="mt-10" aria-labelledby="expertise-heading">
              <h2
                id="expertise-heading"
                className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/45"
              >
                Areas of expertise
              </h2>
              <div className="grid gap-6 border-t border-white/10 pt-5 sm:grid-cols-2">
                {expertise.map((area) => (
                  <div key={area.title}>
                    <h3 className="mb-3 text-sm font-semibold text-[#F5F3EF]">
                      {area.title}
                    </h3>
                    <ul className="space-y-2 text-sm leading-6 text-white/65">
                      {area.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/5] max-h-[720px] overflow-hidden rounded-3xl bg-[#222]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl border border-[#FF6B35]/50"
              />
              <div className="absolute inset-3 overflow-hidden rounded-[1.25rem] sm:inset-4 sm:rounded-2xl">
                <Image
                  src={aboutPic}
                  alt="Nneoma Onuoha"
                  fill
                  sizes="(max-width: 1023px) min(100vw - 2.5rem, 36rem), 45vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-16 text-center sm:mt-20">
          <h2 className="mb-6 text-2xl font-bold text-[#F5F3EF] sm:text-3xl">
            Want to work together?
            <br />
            <span className="text-[#FF6B35]">Get in touch.</span>
          </h2>
          <a
            href="mailto:onuohanneoma7@gmail.com"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF6B35] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FF6B35]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B35] sm:text-base"
          >
            onuohanneoma7@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
