import Link from 'next/link'

export default function EnAbout(){
  return (
    <div className="container">
      <h1>How it works</h1>
      <p>Simple plan: sign up → follow the guide → run your agent. Everything is explained step by step in the dashboard.</p>

      <h2>What it can do</h2>
      <ul>
        <li>Read email and prepare replies</li>
        <li>Make purchases and book tickets</li>
        <li>Run scheduled tasks and send reminders</li>
      </ul>

      <p>If something fails — contact us and we'll help.</p>
      <p><Link href="/en">← Back to home</Link></p>
    </div>
  )
}
