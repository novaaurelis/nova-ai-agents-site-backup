import React, {useState} from 'react'

export default function CodeBlock({children}){
  const [copied, setCopied] = useState(false)
  const text = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : String(children)
  const handleCopy = async () => {
    try{
      await navigator.clipboard.writeText(text.trim())
      setCopied(true)
      setTimeout(()=>setCopied(false),1500)
    }catch(e){console.error('copy failed', e)}
  }
  return (
    <div style={{position:'relative',margin:'12px 0'}}>
      <pre style={{background:'var(--code-bg, #f6f7fa)',color:'var(--text, #0f1724)',padding:12,borderRadius:8,overflow:'auto',border:'1px solid rgba(15,23,42,0.06)',fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,monospace',fontSize:13}}><code>{text}</code></pre>

      <button onClick={handleCopy} aria-label={copied? 'Copied' : 'Copy code'}
        style={{position:'absolute',right:10,top:10,padding:'6px 8px',borderRadius:8,background: copied? 'var(--accent)' : 'rgba(0,0,0,0.04)',color: copied? 'white' : 'var(--accent)',border:'1px solid rgba(15,23,42,0.06)',cursor:'pointer',display:'flex',alignItems:'center',gap:8}}>
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M16 21H8a2 2 0 0 1-2-2V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="12" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        <span style={{fontSize:13,fontWeight:600}}>{copied? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  )
}
