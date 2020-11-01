declare module 'next-mdx-remote/render-to-string' {
  export default async function renderToString(source: string, options?: {components?: object, mdxOptions?: object, scope?: object}): Promise<object>
}

declare module 'next-mdx-remote/hydrate' {
  export default function hydrate(source: object, options?: {components?: object}): React.Component
}
