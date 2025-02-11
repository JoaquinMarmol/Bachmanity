import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-[#E2D9C2] min-h-screen text-center">
      <div className="px-6">
        {/* Navbar */}
        <nav className="flex justify-between items-center md:px-10 py-6">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <ul className="flex gap-4 md:gap-10 items-center">
            <div>
              <a href="/blogs" className="text-[#37352F] font-extrabold">Blog</a>
              <Image src="/SVG.svg" alt="Logo" width={40} height={10} />
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSduwRil1hjshz9lrA4vTnqdXH8XwTpyPbH57M034L73W8AgEg/viewform?usp=header" target="_blank" className="bg-[#37352F] text-white px-4 py-2 rounded-full">Get early access →</a>
          </ul>
        </nav>
        
        {/* Hero Section */} 
        <section className="lg:mt-10">
          <span className="text-[#1F80B9] text-[28px] lg:text-[4.5rem] font-caveat font-bold ml-12 lg:ml-28">Modern</span> 
          <h1 className="text-3xl lg:text-7xl font-bold flex justify-center gap-3 lg:gap-5">
            <span className="text-[#A2A19D]">Organizing</span> <Image src="/flecha.svg" alt="Logo" width={50} height={30} className="w-[20px] md:w-[45px]"/> <span className="text-[#37352F]">Information</span>
          </h1>
          <p className="text-xl text-[#37352F] mt-2 font-bold">Make Sense of the Chaos, Turn Insights into Action</p>
          <p className="text-sm font-medium text-[#37352F] my-6">Works seamlessly with:</p>
          <div className="flex justify-center md:gap-4 my-4">
            <img src="/youtube.svg" alt="YouTube" className="absolute mr-[260px] md:mr-80 cursor-pointer scale-[0.7]"/>
            <img src="/instagram.png" alt="Instagram" className="absolute ml-[250px] md:ml-80 cursor-pointer scale-[0.7]"/>
            <img src="/twitter.png" alt="Twitter" className="cursor-pointer scale-[0.7]"/>
            <img src="/tiktok.png" alt="TikTok" className="cursor-pointer scale-[0.7]"/>
            <img src="/linkedin.png" alt="LinkedIn" className="cursor-pointer scale-[0.7]"/>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSduwRil1hjshz9lrA4vTnqdXH8XwTpyPbH57M034L73W8AgEg/viewform?usp=header" target="_blank" className="bg-[#37352F] text-white px-6 py-3 rounded-full inline-block">Get early access →</a>
          <p className="mt-2 text-sm text-[#37352F]">Join the waitlist to receive early access</p>
        </section>
        
        {/* Video Section */}
        <section className="mt-10">
          <p className="text-sm text-[#37352F]">Bachmanity in action</p>
          <div className="bg-white rounded-lg p-6 mt-4 inline-block shadow-md">
            <iframe width="560" height="315" className="rounded-lg w-full lg:w-[850px] lg:h-[450px]" src="https://www.youtube.com/embed/zw-XrTmuirg?si=LziZ1lKuEyNeQnoU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mt-10 pb-20">
          <div className="flex flex-col md:flex-row md:items-start justify-center gap-2">
            <p className="text-xl text-[#37352F] flex flex-col items-center justify-start">
              <span className="font-extrabold">faster, easier</span>
              <Image src="/SVG(1).svg" alt="Logo" width={150} height={20}/>
            </p>
            <p className="text-xl font-bold text-[#37352F]">way to grow your business?</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSduwRil1hjshz9lrA4vTnqdXH8XwTpyPbH57M034L73W8AgEg/viewform?usp=header" target="_blank" className="bg-[#37352F] text-white px-6 py-3 rounded-full inline-block mt-4">Get early access →</a>
          <p className="mt-2 text-sm text-[#37352F]">Join the waitlist to receive early access to Day.ai</p>  
        </section>
      </div>
      <Footer />
    </div>
  );
}
