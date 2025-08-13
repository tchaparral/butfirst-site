// src/components/MdxRenderer.tsx

'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';
import React from 'react';
import emojiRegex from 'emoji-regex';

const EMOJI_AT_START = new RegExp(`^(?:${emojiRegex().source})`);

const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 text-base leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-none space-y-2 mb-6">{children}</ul>
  ),
  li: ({ children }) => {
    const childArray = React.Children.toArray(children);
    const first = childArray[0];
    const isEmoji =
      typeof first === "string" && EMOJI_AT_START.test(first.trim());

    const emoji = isEmoji ? first : null;
    const text = isEmoji ? childArray.slice(1) : childArray;

    return (
      <li className="flex items-start gap-3">
        {emoji && <span className="text-xl pt-1">{emoji}</span>}
        <span className="text-gray-700 leading-relaxed">{text}</span>
      </li>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#3031A3] underline underline-offset-2 hover:text-[#1e1f70] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};

export default function MdxRenderer({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
}
