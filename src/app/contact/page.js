import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#181818] text-white">
        <section className="py-12 text-center">
            <h2 className="text-xl font-bold text-[#FAFAFA] mb-4">Want to work together? <br /><span className="text-[#FF6B35]">Get in touch.</span></h2>
            <a href="mailto:onuohanneoma7@gmail.com" className="bg-[#FF6B35] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#FF6B35]/80 transition">onuohanneoma7@gmail.com</a>
        </section>
    </main>
  );
}