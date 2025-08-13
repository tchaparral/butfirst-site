// src/app/blog/[slug]/page.tsx

import { allPosts } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import Image from "next/image";
import MdxRenderer from "@/components/MdxRenderer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/").pop(),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = allPosts.find((p) =>
    p._raw.flattenedPath.split("/").pop() === slug
  );

  if (!post) return notFound();

  return (
    <main className="bg-white text-gray-900">
      {/* Hero com imagem de fundo e título */}
      {post.image && (
        <section className="relative h-[400px] md:h-[500px] lg:h-[350px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
              {post.title}
            </h1>
            <p className="text-sm text-gray-200">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </section>
      )}

      {/* Conteúdo do artigo */}
      <article className="max-w-3xl mx-auto px-4 py-16 text-center">
        <section className="prose prose-lg prose-p:text-gray-800 prose-h2:text-[#3031A3] prose-img:rounded-lg">
          <MdxRenderer code={post.body.code} />
        </section>
      </article>
    </main>
  );
}
