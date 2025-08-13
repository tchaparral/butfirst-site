// src/app/blog/page.tsx

import { allPosts } from ".contentlayer/generated";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";

export const metadata = {
  title: "Blog da But First Coffee",
  description: "Automação, Bots e IA na prática para escalar o seu negócio enquanto você toma seu café.",
};

export default function BlogPage() {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <main className="bg-white pb-24">
      {/* Hero visual */}
      <header className="relative h-[400px] md:h-[500px] lg:h-[400px] bg-[#3031A3] text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/blog-hero.png"
          alt="Equipe trabalhando com IA e Bots"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#3031A3]/60 z-10" />
        <div className="relative z-20 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Blog da But First Coffee
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Insights práticos sobre automação, IA e crescimento de negócios.
          </p>
        </div>
      </header>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* Botão carregar mais */}
        <div className="flex justify-center mt-16">
          <button
            className="bg-[#3031A3] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#e60051] transition-colors"
            disabled // só visual por enquanto
          >
            Carregar mais posts
          </button>
        </div>
      </section>
    </main>
  );
}
