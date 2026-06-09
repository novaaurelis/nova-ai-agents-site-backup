import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'
import Header from 'components/Header'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

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
  const ru = path.join(dir, `${params.slug}.ru.mdx`)
  const en = path.join(dir, `${params.slug}.en.mdx`)
  let file = null
  if (fs.existsSync(ru)) file = ru
  else if (fs.existsSync(en)) file = en
  if(!file) return { notFound:true }
  let source = fs.readFileSync(file,'utf8')
  // Strip YAML frontmatter if present (to avoid rendering it as content)
  source = source.replace(/^---[\s\S]*?---\s*/,'')
  const mdxSource = await serialize(source)
  return { props: { mdxSource } }
}

export default function ModulePage({mdxSource}){
  const router = useRouter()
  const hideCTA = router.query && (router.query.hideCTA === '1' || router.query.hideCTA === 'true')

  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <MDXRemote {...mdxSource} />

          {!hideCTA && (
            <div style={{marginTop:24, textAlign:'center'}}>
              <a href="/ru/dashboard" className="button">Начать бесплатно</a>
            </div>
          )}
        </article>

        <style jsx>{`
          .module{max-width:820px;margin:18px auto;padding:0 18px}
          .button{display:inline-block;padding:10px 14px;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;border-radius:10px;text-decoration:none;font-weight:700}
        `}</style>
      </main>
    </div>
  )
}
