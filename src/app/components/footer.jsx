import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#37352F] text-white py-10 text-center flex justify-center flex-col items-center">
      <Image src="/bachmanity.svg" alt="Logo" width={206} height={100} className="my-8" />
      <div className="flex justify-center items-center gap-12 mt-4">
        <a href="#" aria-label="YouTube">
          <img src="/youtubeF.svg" alt="YouTube" width={20} height={20} />
        </a>
        <a href="#" aria-label="Twitter">
          <img src="/twitter.svg" alt="Twitter" width={20} height={20} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src="/linkedinF.png" alt="LinkedIn" width={20} height={20} />
        </a>
      </div>

      {/* Políticas */}
      <div className="flex justify-center gap-6 text-sm text-[#E2D9C2] my-8">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and conditions</a>
      </div>

      <p className="text-sm text-[#E2D9C2]">© 2025 All rights reserved</p>
    </footer>
  );
}
