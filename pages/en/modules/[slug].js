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
  const staticSlugs = new Set(['first-steps','installation-and-run','deep-configuration','updates-and-support','practical-cases','skills-and-personas'])
  const paths = uniq.filter(s=>!staticSlugs.has(s)).map(s=>({params:{slug:s}}))
  return { paths, fallback:false }
}

export async function getStaticProps({params}){
  const dir = path.join(process.cwd(),'content/modules')
  const en = path.join(dir, `${params.slug}.en.mdx`)
  const ru = path.join(dir, `${params.slug}.ru.mdx`)
  let file = null
  if (fs.existsSync(en)) file = en
  else if (fs.existsSync(ru)) file = ru
  if(!file) return { notFound:true }
  let source = fs.readFileSync(file,'utf8')
  source = source.replace(/^---[\s\S]*?---\s*/,'')
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
        .module{max-width:820px;margin:18px auto;padding:0 18px;text-align:justify;text-justify:inter-word}
      `}</style>
    </main>
  )
}
