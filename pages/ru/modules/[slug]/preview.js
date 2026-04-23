import fs from 'fs'
import path from 'path'
import Header from '../../../../components/Header'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export async function getStaticPaths(){
  const dir = path.join(process.cwd(),'content/modules')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.ru.mdx'))
  const slugs = files.map(f=>f.replace(/\.ru\.mdx$/,''))
  return { paths: slugs.map(s=>({params:{slug:s}})), fallback:false }
}

export async function getStaticProps({params}){
  const dir = path.join(process.cwd(),'content/modules')
  const file = path.join(dir, `${params.slug}.ru.mdx`)
  if(!fs.existsSync(file)) return { notFound:true }
  let source = fs.readFileSync(file,'utf8')
  // Remove YAML frontmatter if present so it doesn't render as content (--- ... ---)
  source = source.replace(/^---[\s\S]*?---\s*/,'')
  const mdxSource = await serialize(source)
  return { props: { mdxSource } }
}

export default function ModulePreview({mdxSource}){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <MDXRemote {...mdxSource} />
          {/* Note: preview copy intentionally has no 'Начать бесплатно' CTA */}
        </article>

        <style jsx>{`
          .module{max-width:820px;margin:18px auto;padding:0 18px}
        `}</style>
      </main>
    </div>
  )
}
