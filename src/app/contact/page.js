import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#181818] text-white">
        <section className="py-12 text-center">
            <h2 className="text-xl font-bold text-orange-400 mb-4">Want to work together? <br />Get in touch.</h2>
            <a href="mailto:onuohanneoma7@gmail.com" className="bg-orange-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition">onuohanneoma7@gmail.com</a>
        </section>
    </main>
  );
}