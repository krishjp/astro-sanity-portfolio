import React from 'react';
import { PortableText } from '@portabletext/react';

// This component defines how different elements of your rich text will be styled.
const components = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-4 text-neutral-900 dark:text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-4 text-neutral-900 dark:text-white">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-orange-400 pl-4 my-6 italic text-neutral-600 dark:text-neutral-400">{children}</blockquote>,
    normal: ({ children }) => <p className="leading-relaxed my-6">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-6 space-y-2 pl-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-6 space-y-2 pl-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-orange-400 hover:underline">
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextRenderer({ value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
      <PortableText value={value} components={components} />
    </div>
  );
}
