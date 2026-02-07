import Link from "next/link";

import { MDXRemoteProps } from "next-mdx-remote/rsc";

type MDXComponentsType = MDXRemoteProps["components"];

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-neutral-200">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

import { ContentCTA } from "@/components/mdx/ContentCTA";

// Map HTML elements to custom components
export const MDXComponents: MDXComponentsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: CustomLink as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: TableWrapper as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ContentCTA: ContentCTA as any,
};
