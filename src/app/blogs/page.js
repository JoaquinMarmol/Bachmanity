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
          <ul className="flex gap-10 items-center">
            <div className="relative">
              <a href="/" className="font-extrabold">Home</a>
              <Image src="/SVG.svg" alt="Underline" width={45} height={10} className="absolute left-0 -bottom-2" />
            </div>
            <a href="#" className="bg-[#37352F] text-white px-4 py-2 rounded-full flex items-center gap-2">
              Get early access →
            </a>
          </ul>
        </nav>
        
        {/* Hero Section */}
        <section className="mt-10 px-6 md:px-20 lg:px-14">
          <h1 className="text-4xl md:text-6xl font-bold">Building Bachmanity</h1>
          <p className="text-lg text-[#5A5A5A] mt-2">
            Follow our journey to build the best system for organizing 
            <span className="text-blue-500 text-[28px] font-caveat font-bold ml-2">Modern</span> information.
          </p>
        </section>

        {/* Blog List */}
        <section className="mt-10 px-6 md:px-20 lg:px-14">
          <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid Responsivo */}
            {Blog.map((post) => (
              <div 
                key={post.id} 
                className="bg-gray-400/40 rounded-lg p-6 cursor-pointer hover:bg-gray-500/40 transition"
                onClick={() => toggleBlog(post.id)}
              >
                <p className="text-sm text-gray-600">{post.date}</p>
                <h3 className="text-xl font-bold mt-2">{post.title}</h3>
                {expandedBlog === post.id ? (
                  <p className="text-sm text-gray-700 mt-1">{post.content}</p>
                ) : (
                  <p className="text-sm text-gray-700 mt-1">{post.excerpt}</p>
                )}
                <span className="text-blue-500 font-medium block mt-2">
                  {expandedBlog === post.id ? "Read less ▲" : "Read more ▼"}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
