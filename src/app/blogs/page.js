"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Blog from "../data/blog"; // Importamos la lista de blogs

export default function BlogPage() {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleBlog = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className="bg-[#E2D9C2] min-h-screen text-[#37352F]">
      <div className="px-6 mb-40">
        {/* Navbar */}
        <nav className="flex justify-between items-center md:px-10 py-6">
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
        
        {/* Hero Section */}
        <section className="mt-10 px-6 md:px-20 lg:px-14">
          <h1 className="text-4xl md:text-6xl font-bold">Building Bachmanity</h1>
          <p className="text-lg text-[#5A5A5A] mt-2">
            Follow our journey to build the best system for organizing 
            <span className="text-[#1F80B9] text-[28px] font-caveat font-bold ml-2">Modern</span> information.
          </p>
        </section>

        {/* Blog List */}
        <section className="mt-10 px-6 md:px-20 lg:px-14">
          <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid Responsivo */}
            {Blog.map((post) => (
              <div key={post.id} className="bg-[#ded8ca] rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-[#37352F]">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.date}</p>
                <p className="mt-4 text-[#37352F]">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block text-[#1F80B9] font-bold"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
