// src/components/BlogCard.tsx

import Link from "next/link";
import Image from "next/image";
import { Post } from ".contentlayer/generated";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post._raw.flattenedPath}`} className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
      {post.image && (
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-[#3031A3] mb-1">{post.title}</h2>
        <p className="text-gray-700 text-sm">{post.description}</p>
        <p className="text-gray-400 text-xs mt-2">{new Date(post.date).toLocaleDateString("pt-BR")}</p>
      </div>
    </Link>
  );
}
