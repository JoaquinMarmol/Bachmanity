"use client";
import Blog from "../../data/blog";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../../components/footer";

export default function BlogPost({ params }) {
  const router = useRouter();
  const { id } = React.use(params); // Utilizando React.use para resolver la promesa de params

  const blogPost = Blog.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="bg-[#E2D9C2] min-h-screen text-[#37352F]">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <ul className="flex gap-4 md:gap-10 items-center">
          <div className="relative">
            <a href="/" className="font-extrabold">Home</a>
            <Image src="/SVG.svg" alt="Underline" width={45} height={10} className="absolute left-0 -bottom-2" />
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSduwRil1hjshz9lrA4vTnqdXH8XwTpyPbH57M034L73W8AgEg/viewform?usp=header" target="_blank" className="bg-[#37352F] text-white px-4 py-2 rounded-full flex items-center gap-2">
            Get early access →
          </a>
        </ul>
      </nav>
      <button
        onClick={() => router.back()}
        className="text-[#37352F] flex items-center mb-4 text-5xl md:pl-16 pl-6z"
      >
        ←
      </button>
      <div className="pb-20 px-6 md:px-32">
        <h1 className="text-4xl font-bold text-[#333]">{blogPost.title}</h1>
        <p className="text-sm text-gray-600 mb-8">{blogPost.date}</p>
        <div className="space-y-6 2xl:pr-[35%]">
          {blogPost.sections.map((section, index) => {
            switch (section.type) {
              case "title":
                return <h2 key={index} className="text-3xl font-bold text-[#333]">{section.content}</h2>;
              case "subtitle":
                return <h3 key={index} className="text-2xl font-semibold text-[#555]">{section.content}</h3>;
              case "text":
                return <p key={index} className="text-[#333] leading-relaxed">{section.content}</p>;
              case "image":
                return (
                  <img
                    key={index}
                    src={section.src}
                    alt={section.alt}
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
