"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  caseStudies,
  frontendProjects,
  professionalProjects,
  sideProjects,
} from "@/data/portfolioProjects";
import KoboBooksCaseStudy from "@/components/portfolio/KoboBooksCaseStudy";

function ProjectMedia({ image, imageAlt, title, video, framed = false }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);
  const frameClassName = framed
    ? "group relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-xl border border-[#2C2C2C] bg-[#1D1D1D] transition-colors duration-300 hover:border-[#454545] motion-reduce:transition-none"
    : "relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#1b1b1b]";
  const mediaClassName = framed
    ? "h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
    : "h-full w-full object-contain";

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pauseForReducedMotion = () => {
      if (reducedMotion.matches) videoRef.current?.pause();
    };

    pauseForReducedMotion();
    reducedMotion.addEventListener("change", pauseForReducedMotion);
    return () => reducedMotion.removeEventListener("change", pauseForReducedMotion);
  }, []);

  if (video && !videoFailed) {
    return (
      <div className={frameClassName}>
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${title} stock management showcase`}
          onError={() => setVideoFailed(true)}
          className={mediaClassName}
        />
      </div>
    );
  }

  if (!image) {
    return (
      <div
        className={
          framed
            ? `${frameClassName} px-6 py-8 text-center`
            : "flex min-h-36 items-center justify-center border-y border-white/10 bg-white/[0.02] px-6 py-8 text-center sm:min-h-40"
        }
      >
        <div className="max-w-sm">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/55">
            {videoFailed ? "Video not available" : "Visual not available"}
          </p>
          <p className="mt-2 text-sm leading-6 text-white/40">
            {videoFailed
              ? `The video for ${title} could not be loaded.`
              : `No project image for ${title} has been provided yet.`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={frameClassName}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) 58vw, min(65vw, 900px)"
        className={mediaClassName}
        unoptimized={typeof image === "string"}
      />
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="border-t border-white/10 py-4 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-5">
      <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-6 text-white/75 sm:mt-0">{value}</p>
    </div>
  );
}

function ProjectEntry({ project, index, professional = false }) {
  return (
    <article
      className={`border-b border-white/10 pb-9 pt-9 first:pt-0 sm:pb-12 sm:pt-12 ${
        professional ? "last:border-b-0" : ""
      }`}
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
        <div className="flex items-baseline gap-3 sm:gap-4">
          <span className="text-xs tabular-nums text-white/35">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-[#FAFAFA] sm:text-3xl">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          {project.category && (
            <p className="text-xs text-white/45 sm:text-sm">{project.category}</p>
          )}
          {project.role && (
            <p className="text-xs text-white/45">Role · {project.role}</p>
          )}
        </div>
        {project.href && (
          <Link
            href={project.href}
            className="shrink-0 rounded-sm text-xs text-[#FF6B35] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B35] sm:text-sm"
            aria-label={`View ${project.title} project details`}
          >
            View project <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <p className="mb-5 max-w-2xl text-sm leading-6 text-white/65 sm:mb-6 sm:text-base sm:leading-7">
        {project.description || "Project description has not been provided yet."}
      </p>
      <ProjectMedia
        image={project.image}
        imageAlt={project.imageAlt}
        title={project.title}
        video={project.video}
        framed={professional}
      />
    </article>
  );
}

function CaseStudyEntry({ study }) {
  const rows = [
    ["Project context", study.context],
    ["Problem", study.problem],
    ["Role", study.role],
    ["Design approach", study.approach],
    ["Outcomes", study.outcomes],
  ];

  return (
    <article className="border-b border-white/10 pb-10 pt-8 first:pt-0 sm:pb-14 sm:pt-12">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#FF6B35]">
        Case study
      </p>
      <h3 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] sm:text-4xl">
        {study.title}
      </h3>
      <p className="mt-2 text-sm text-white/50">{study.subtitle}</p>
      <div className="my-7">
        <ProjectMedia
          image={study.image}
          imageAlt={study.imageAlt}
          title={study.title}
        />
      </div>
      <div>
        {rows.map(([label, value]) => (
          <DetailRow key={label} label={label} value={value} />
        ))}
      </div>
      {study.href && (
        <Link
          href={study.href}
          className="mt-6 inline-flex rounded-sm text-sm text-[#FF6B35] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B35]"
        >
          View existing project page <span className="ml-2" aria-hidden="true">↗</span>
        </Link>
      )}
    </article>
  );
}

function FrontendProjectEntry({ project }) {
  return (
    <article className="min-w-0 border-b border-white/10 pb-10 pt-8 first:pt-0 sm:pb-14 sm:pt-12">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#D97745]">
        {project.category}
      </p>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-[#F5F3EF] sm:text-4xl">
          {project.title}
        </h2>
        <p className="text-sm text-white/50">Role · {project.role}</p>
      </div>

      <div className="my-7">
        <ProjectMedia
          image={project.image}
          imageAlt={project.imageAlt}
          title={project.title}
        />
      </div>

      <div className="space-y-4 text-sm leading-7 text-white/65 sm:text-base">
        <p>{project.description}</p>
        <p>{project.overview}</p>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
          Key frontend contributions
        </h3>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {project.contributions.map((contribution) => (
            <li
              key={contribution}
              className="border-t border-white/10 py-3 text-sm leading-6 text-white/75"
            >
              {contribution}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t border-white/10 pt-5">
        <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
          Technology stack
        </h3>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((technology) => (
            <li key={technology} className="text-sm text-white/70">
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href={project.href}
          className="rounded-sm text-sm text-[#D97745] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D97745]"
        >
          Project details <span aria-hidden="true">↗</span>
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-sm text-[#D97745] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D97745]"
          >
            Visit live site <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function PortfolioShowcase() {
  const [activeView, setActiveView] = useState({ type: "all", id: null });
  const contentRef = useRef(null);
  const activeProject =
    activeView.type === "sideProject"
      ? sideProjects.find((project) => project.id === activeView.id)
      : null;
  const activeFrontendProject =
    activeView.type === "frontendProject"
      ? frontendProjects.find((project) => project.id === activeView.id)
      : null;
  const activeCaseStudy =
    activeView.type === "caseStudy"
      ? caseStudies.find((study) => study.id === activeView.id)
      : null;

  function selectView(view) {
    setActiveView(view);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  function renderNavigationItems(items, type) {
    return items.map((item) => {
      const selected = activeView.type === type && activeView.id === item.id;

      return (
        <button
          key={item.id}
          type="button"
          aria-pressed={selected}
          onClick={() => selectView({ type, id: item.id })}
          className={`portfolio-navigation-item group flex min-h-14 w-full items-center justify-between gap-4 border-b border-[#333333] py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B35] ${
            selected
              ? "text-[#FF6B35]"
              : "text-white/55 hover:text-white"
          }`}
        >
          <span className="min-w-0 flex-1">
            {item.navigationLabel && item.navigationLabel !== item.title && (
              <span className="block text-[11px] leading-4 text-white/40">
                {item.title}
              </span>
            )}
            <span className="mt-0.5 block text-sm leading-5 sm:text-[15px] sm:leading-6">
              {item.navigationLabel ||
                item.navigationTitle ||
                item.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`text-base transition-opacity ${
              selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            ↗
          </span>
        </button>
      );
    });
  }

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 border-t border-white/10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-9 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-8 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-12">
        <aside className="min-w-0 border-b border-white/10 pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-8 lg:pr-12">
          <div className="portfolio-sidebar">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FF6B35]">
              A little about me
            </p>
            <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#FAFAFA] sm:text-3xl">
              Senior Product Designer &amp; Frontend Engineer
            </h2>
            <div className="space-y-4 text-sm leading-[1.7] text-white/65">
              <p>
                I help startups and product-led companies design and build
                intuitive web and mobile experiences across FinTech,
                Banking, AI, Healthcare, EdTech, and Enterprise Software.
              </p>
              <p>
                Currently, I lead UI/UX Design at{" "}
                <strong className="font-medium text-white">IE-Tech</strong>,
                working on digital banking platforms for Zenith Bank in The
                Gambia and Sierra Leone, and business management products like{" "}
                <strong className="font-medium text-white">KoboBooks</strong>.
              </p>
              <p>
                Previously, I worked as a Frontend Developer at{" "}
                <strong className="font-medium text-white">AiBanc</strong>,
                contributing to digital lending experiences that increased loan
                applications by{" "}
                <strong className="font-medium text-white">30%</strong> and user
                acquisition by{" "}
                <strong className="font-medium text-white">33%</strong>. I also
                collaborated with international startup teams at{" "}
                <strong className="font-medium text-white">
                  XPLORE, UnternehmerTUM in Germany
                </strong>
                .
              </p>
              <p>
                Beyond design, I built the frontend of{" "}
                <strong className="font-medium text-white">Instict.ai</strong>,
                an AI-powered interview preparation platform, from initial
                implementation through launch.
              </p>
              <p>
                I work across{" "}
                <strong className="font-medium text-white">
                  Product Strategy, UX Research, Interaction Design, Design
                  Systems, Prototyping, and Frontend Engineering
                </strong>
                .
              </p>
            </div>
            <Link
              href="/about"
              className="mt-4 inline-flex rounded-sm text-sm text-[#D97745] underline decoration-[#D97745]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D97745]"
            >
              More about me <span className="ml-2" aria-hidden="true">↗</span>
            </Link>
            <p className="mt-4 text-xs leading-6 text-white/50">
              Find me on{" "}
              <a
                href="https://www.linkedin.com/in/nneoma-onuoha-14b064197/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97745] underline decoration-[#D97745]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97745]"
              >
                LinkedIn
              </a>
              {" or "}
              <a
                href="https://github.com/Marycynthia23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97745] underline decoration-[#D97745]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97745]"
              >
                GitHub
              </a>
              , or reach me by{" "}
              <a
                href="mailto:onuohanneoma7@gmail.com"
                className="text-[#D97745] underline decoration-[#D97745]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97745]"
              >
                email
              </a>
              .
            </p>

            <div className="mt-6 border-t border-white/10 py-1">
              <button
                type="button"
                aria-pressed={activeView.type === "all"}
                onClick={() => selectView({ type: "all", id: null })}
                className={`group flex min-h-14 w-full items-center justify-between gap-4 text-left text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B35] ${
                  activeView.type === "all"
                    ? "text-[#FF6B35]"
                    : "text-white hover:text-[#FF6B35]"
                }`}
              >
                All Professional Work
                <span aria-hidden="true">↗</span>
              </button>
            </div>

            <nav className="mt-5 border-t border-white/10 pt-4" aria-label="Side projects">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Side Projects
              </h3>
              {renderNavigationItems(sideProjects, "sideProject")}
            </nav>

            <nav className="mt-5 border-t border-white/10 pt-4" aria-label="Case studies">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Case Studies
              </h3>
              {renderNavigationItems(caseStudies, "caseStudy")}
            </nav>

            <nav className="mt-5 border-t border-white/10 pt-4" aria-label="Frontend projects">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Frontend Projects
              </h3>
              {renderNavigationItems(frontendProjects, "frontendProject")}
            </nav>
          </div>
        </aside>

        <div
          ref={contentRef}
          className="min-w-0 scroll-mt-28"
          aria-live="polite"
        >
          {activeView.type === "all" && (
            <>
              <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                    Selected work
                  </p>
                  <h2 className="text-xl font-semibold text-[#FAFAFA] sm:text-2xl">
                    Professional Work
                  </h2>
                </div>
                <p className="pb-1 text-sm text-white/40">01—06</p>
              </div>
              {professionalProjects.map((project, index) => (
                <ProjectEntry
                  key={project.id}
                  project={project}
                  index={index}
                  professional
                />
              ))}
            </>
          )}

          {activeProject && (
            <ProjectEntry project={activeProject} index={0} />
          )}

          {activeFrontendProject && (
            <FrontendProjectEntry project={activeFrontendProject} />
          )}

          {activeCaseStudy?.id === "kobobooks" && <KoboBooksCaseStudy />}
          {activeCaseStudy && activeCaseStudy.id !== "kobobooks" && (
            <CaseStudyEntry study={activeCaseStudy} />
          )}
        </div>
      </div>
    </section>
  );
}
