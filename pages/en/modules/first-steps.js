import Link from 'next/link'

export default function EnFirstSteps(){
  return (
    <div className="container">
      <h1>Module — First steps</h1>

      <p>Short and simple — what you need to do to run your first agent.</p>

      <h2>What is OpenClaw (in simple words)</h2>
      <p>OpenClaw is more than a chatbot. It's a helper that can do tasks: read email, open websites, fill forms, remind you, and even buy tickets if you tell it to. Each agent runs separately and keeps its memory.</p>

      <h2>Quick plan — 5 steps</h2>
      <ol>
        <li><strong>Sign up</strong> on the site — it's free.</li>
        <li><strong>Create a Telegram bot</strong> via @BotFather and paste the token in your dashboard (Settings).</li>
        <li><strong>Open the dashboard</strong> — there's a quick "2 minute start" guide with ready scripts.</li>
        <li><strong>Run the agent</strong> — locally on your Mac (we'll provide step-by-step) or use our hosting.</li>
        <li><strong>Try a command</strong>: say/type something simple like "check email" or "find tickets" and watch the agent work.</li>
      </ol>

      <h2>What you need</h2>
      <ul>
        <li>An account (email)</li>
        <li>Telegram — create bot via @BotFather</li>
        <li>If running locally — a computer with internet (we'll give run commands)</li>
      </ul>

      <h2>Safety and simple rules</h2>
      <ul>
        <li>The agent acts on your commands — don't allow critical operations without checking.</li>
        <li>For payments/banks test with small actions first.</li>
        <li>Store tokens securely in your dashboard.</li>
      </ul>

      <p>If you want, I can auto-add a step-by-step install guide into the dashboard after signup — say "make guide" and I'll add a full how-to.</p>

      <p><Link href="/en/modules">← Back to modules</Link></p>
    </div>
  )
}
