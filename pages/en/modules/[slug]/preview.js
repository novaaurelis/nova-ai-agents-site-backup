import fs from 'fs'
import path from 'path'
import Header from 'components/Header'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export async function getStaticPaths(){
  const dir = path.join(process.cwd(),'content/modules')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.en.mdx'))
  const slugs = files.map(f=>f.replace(/\.en\.mdx$/,''))
  return { paths: slugs.map(s=>({params:{slug:s}})), fallback:false }
}

export async function getStaticProps({params}){
  const dir = path.join(process.cwd(),'content/modules')
  const file = path.join(dir, `${params.slug}.en.mdx`)
  if(!fs.existsSync(file)) return { notFound:true }
  let source = fs.readFileSync(file,'utf8')
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
          {/* Note: preview copy intentionally has no 'Start for free' CTA */}

          <div style={{marginTop:20,textAlign:'center'}}>
            <a href="/en/modules" className="button secondary">Back to dashboard</a>
          </div>
        </article>

        <style jsx>{`
          .module{max-width:820px;margin:18px auto;padding:0 18px;text-align:justify;text-justify:inter-word}
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600}
        `}</style>
      </main>
    </div>
  )
}
