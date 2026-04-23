import fs from 'fs'
import path from 'path'
import { MDXProvider } from '@mdx-js/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export async function getStaticPaths(){
  const dir = path.join(process.cwd(),'content/modules')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.mdx'))
  const slugs = files.map(f=>f.replace(/\.(ru|en)\.mdx$/,''))
  const uniq = [...new Set(slugs)]
  return { paths: uniq.map(s=>({params:{slug:s}})), fallback:false }
}

export async function getStaticProps({params}){
  const dir = path.join(process.cwd(),'content/modules')
  const localePriority = [process.env.NEXT_PUBLIC_LOCALE || 'ru','en']
  const candidates = [
    `${params.slug}.${localePriority[0]}.mdx`,
    `${params.slug}.${localePriority[1]}.mdx`,
  ]
  let file
  for(const c of candidates){
    const p = path.join(dir,c)
    if(fs.existsSync(p)){ file = p; break }
  }
  if(!file) return { notFound:true }
  const source = fs.readFileSync(file,'utf8')
  const mdxSource = await serialize(source)
  return { props: { mdxSource } }
}

export default function ModulePage({mdxSource}){
  return (
    <main className="container">
      <article className="module">
        <MDXProvider>
          <MDXRemote {...mdxSource} />
        </MDXProvider>
      </article>
      <style jsx>{`
        .module{max-width:820px;margin:18px auto;padding:0 18px}
      `}</style>
    </main>
  )
}
