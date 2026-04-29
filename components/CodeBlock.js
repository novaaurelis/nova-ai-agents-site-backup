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
      <pre style={{background:'#0f1724',color:'#e6edf3',padding:12,borderRadius:8,overflow:'auto',fontFamily:'SFMono-Regular,Menlo,Monaco,Consolas,monospace',fontSize:13}}><code>{text}</code></pre>
      <button onClick={handleCopy} style={{position:'absolute',right:10,top:10,padding:'6px 8px',borderRadius:6,background: copied? 'var(--accent)' : 'rgba(255,255,255,0.06)',color: copied? 'white' : 'var(--accent)',border:'1px solid rgba(255,255,255,0.06)',cursor:'pointer'}}>{copied? 'Copied':'Copy'}</button>
    </div>
  )
}
