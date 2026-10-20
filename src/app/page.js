"use client";

import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import helloImg from "../app/images/VectorTop.png";
import helloImgTwo from "../app/images/VectorBottom.png";
import myPic from "../app/images/myPic.jpg";
import AnimatedBackground from "@/components/AnimatedBackground";
import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function Home() {
  return (
    <div className="flex flex-col font-sans text-white">
      <section className="relative flex flex-col items-center overflow-hidden px-4 py-14 text-center sm:py-14">
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="relative inline-block">
            <span className="mb-2 inline-block rounded-full bg-[#222] px-4 py-1 text-sm">
              Hello!
            </span>
            <Image
              src={helloImg}
              alt="Decorative greeting accent"
              className="absolute -top-6 right-0 h-6 w-6 sm:h-8 sm:w-8"
            />
          </div>

          <h1 className="relative inline-block font-bold leading-[1.2] text-[#F5F3EF] lg:leading-[1.15]">
            <span className="block text-[clamp(1.6rem,7vw,4rem)]">
              I&apos;m <span className="text-[#FF6B35]">Nneoma,</span>
            </span>
            <span className="block text-[clamp(1.5rem,6vw,4rem)]">
              Product Designer
            </span>
            <span className="relative block text-[clamp(1.5rem,6vw,4rem)]">
              &amp; Frontend Engineer.
              <Image
                src={helloImgTwo}
                alt="Decorative accent"
                className="absolute -left-10 top-[55%] h-9 w-9 -translate-y-1/2 sm:-left-9 sm:h-12 sm:w-12 md:-left-12 md:h-16 md:w-16"
              />
            </span>
          </h1>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-8 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_420px_minmax(0,1fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_480px_minmax(0,1fr)] xl:gap-12">
          <div className="relative hidden h-full max-w-sm items-center justify-self-end text-left text-sm text-[#E5E5E5] lg:flex">
            <div className="relative py-4">
              <FaQuoteLeft className="absolute -left-6 -top-2 h-[37px] w-[37px] text-[#FF6B35]" />
              <p className="pl-8 pr-6 leading-relaxed">
                Nneoma&apos;s exceptional product design skills and frontend
                 engineering expertise played a key role in our website&apos;s
                   success. Highly recommended!
              </p>
              <FaQuoteRight className="absolute -bottom-2 right-0 h-[38px] w-[38px] text-[#FF6B35]" />
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-start-2 lg:row-start-1">
            <div className="relative h-[350px] w-[350px] flex-shrink-0 overflow-hidden rounded-full border-4 border-[#FF6B35] shadow-2xl shadow-[#FF6B35]/20 sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] lg:h-[420px] lg:w-[420px] lg:border-8 xl:h-[480px] xl:w-[480px]">
              <Image
                src={myPic}
                alt="Nneoma"
                fill
                sizes="(max-width: 639px) 350px, (max-width: 767px) 450px, (max-width: 1279px) 420px, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="hidden h-full flex-col items-center justify-center justify-self-start lg:flex">
            <div className="mb-2 flex items-center gap-1 text-lg text-[#FF6B35] sm:text-xl">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>★</span>
                ))}
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-[#FAFAFA] sm:text-4xl md:text-[47px]">
                5+ Years
              </span>
              <div className="mt-1 text-sm text-[#B8B8B8] sm:text-base md:text-[20px]">
                Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioShowcase />

      <section className="py-16 sm:py-20">
        <div className="mb-8 flex w-full items-center justify-center gap-2.5 p-2.5 py-0">
          <h2 className="text-center font-['Inter'] text-[24px] font-bold leading-tight text-white sm:text-[24px] md:text-5xl lg:text-[38px] lg:leading-[52px]">
            Have something meaningful in mind?
            <br />
            <span className="text-[#D97745]">
              Let&apos;s design and build something exceptional.
            </span>
          </h2>
        </div>
        <div className="mb-8 flex w-full items-center justify-center gap-2.5 px-8 py-2 lg:px-16">
          <a
            href="mailto:onuohanneoma7@gmail.com"
            className="flex h-[50px] w-full items-center justify-center rounded-md bg-[#FF6B35] px-8 text-[14px] text-white sm:w-[232px] sm:text-[16px]"
          >
            onuohanneoma7@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
