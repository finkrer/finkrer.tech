import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { Post, PostFrontMatter, PostInfo } from 'lib/data'

export const getPostList = (): PostInfo[] => {
  const postDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postDirectory)

  const posts = filenames.filter(n => n.endsWith('.mdx')).map(filename => {
    const filePath = path.join(postDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const {data} = matter(fileContents)
    const slug = path.basename(filename, '.mdx')

    return {
      slug,
      frontMatter: data as PostFrontMatter
    }
  })

  return posts
}

export const getPost = async (slug: string): Promise<Post> => {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf-8')

  const {content, data} = matter(fileContents)

  const mdxSource = await serialize(content)
  
  return {source: mdxSource, frontMatter: data as PostFrontMatter}
}