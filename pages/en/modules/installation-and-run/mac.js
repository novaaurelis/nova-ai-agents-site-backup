import React from 'react'
import Header from 'components/Header'
import CodeBlock from 'components/CodeBlock'

export default function MacInstallEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Install OpenClaw on macOS</h1>
            <p className="muted">Step-by-step guide to installing the digital assistant on your Mac.<br/>We recommend doing everything from the terminal. All commands are ready to copy.</p>
          </header>

          <section className="steps">
            <div className="step">
              <div className="step-header"><h3>Step 1. Check whether our system requirements<br/>are suitable for installing the digital assistant</h3></div>
              <ul>
                <li>macOS 11+ (recommended)</li>
                <li>Homebrew package manager installed</li>
                <li>Git dependencies and Node.js installed</li>
                <li>Enough free disk space (300–500 MB) and the required permissions</li>
                <li>If you plan to download and run local language models, you should have at least 8 GB of RAM (the more, the better). The absolute minimum is 2 GB. The most desirable setup is 16 GB of RAM or more and a discrete graphics card.</li>
              </ul>

              <p>⚠️ If you do not have Homebrew and other dependencies yet, we will install them next.</p>

              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Step 2. Install Homebrew</h3></div>

              <p>The Homebrew package manager makes it easier to install many tools.<br/>Official website: <a href="https://brew.sh">https://brew.sh/</a></p>

              <p>Open the Terminal window. To do this, click the magnifying glass icon in the top-right toolbar of your desktop (we will add an image of the magnifying glass for better clarity). Then type Terminal in search and press Enter.</p>

              <p>First way. To install the package manager, copy this command into the terminal:</p>
              <CodeBlock>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</CodeBlock>

              <p className="with-gap">Second way. Download the .pkg installer. You can get it in the <a href="https://github.com/Homebrew/brew/releases/latest">latest release</a> of Homebrew on GitHub.</p>
              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Step 3. Install Node Version Manager and Node.js</h3></div>

              <p>Official repository: <a href="https://github.com/nvm-sh/nvm">https://github.com/nvm-sh/nvm</a><br/>Official Node.js website: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a></p>

              <p>Install NVM and Node.js. Copy the command into the terminal</p>

              <CodeBlock>{`# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.15.0".

# Verify npm version:
npm -v # Should print "11.12.1".
`}</CodeBlock>

              <p>Alternative way: download the <a href="https://nodejs.org/dist/v24.15.0/node-v24.15.0.pkg">.pkg</a> installer</p>

              <div className="note" role="note" aria-label="Note">
                ⚠️ If for any reason the commands or download links become outdated or are changed by the developers, please visit the official sites to get the latest information.
              </div>
              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Step 4. (Optional) Install Bun</h3></div>

              <p>Bun is a modern, ultra-fast JavaScript and TypeScript runtime, created as a direct and more efficient alternative to Node.js.<br/>Official Bun website: <a href="https://bun.com/">https://bun.com/</a></p>

              <p>Install Bun. Copy the command into the terminal</p>

              <CodeBlock>{`curl -fsSL https://bun.com/install | bash`}</CodeBlock>

              <p>Or an alternative command via Homebrew:</p>
              <CodeBlock>{`brew install oven-sh/bun/bun`}</CodeBlock>

              <p>You can also download installers for your machine’s architecture on the <a href="https://bun.com/">official website</a> for either ARM or Intel processors.</p>

              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Step 5. Install Ollama</h3></div>

              <p>Ollama is a free and open-source platform that lets you use your agent with cloud and local models while keeping your data private.<br/>For integration and installation see the <a href="/en/modules/installation-and-run/ollama">Ollama installation section</a>.</p>

              <p style={{margin:0,height:'14px'}}></p>

              <p>⚠️ If you already have a subscription to another AI provider, or an AI aggregator with API key access, you can skip this step. Use your existing keys to get OpenClaw running correctly during setup.</p>

              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Step 6. Install OpenClaw</h3></div>

              <p>Official repository on GitHub: <a href="https://github.com/openclaw/openclaw">https://github.com/openclaw/openclaw</a><br/>Official documentation: <a href="https://docs.openclaw.ai/">https://docs.openclaw.ai/</a></p>

              <p>Install OpenClaw. Choose one of the commands and copy it into the terminal</p>

              <CodeBlock>{`curl -fsSL https://openclaw.ai/install.sh | bash`}</CodeBlock>

              <p>Install via npm</p>
              <CodeBlock>{`npm install -g openclaw@latest
openclaw onboard --install-daemon`}</CodeBlock>

              <p>Install via pnpm</p>
              <CodeBlock>{`pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon`}</CodeBlock>

              <p>Install via bun (if you installed Bun in Step 4)</p>
              <CodeBlock>{`bun add -g openclaw@latest
openclaw onboard --install-daemon`}</CodeBlock>

              <p>⚠️ If any errors occur during installation, use the official documentation.</p>

              <p style={{margin:0,height:'14px'}}></p>

              <p>During file copying, the installer checks the required components (Homebrew, Node.js, Git) and installs anything that is missing or not set up correctly.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure"><img src="/images/install-script.svg" alt="Install script" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Step 7. Launch the onboarding wizard — the setup assistant for our agent</h3></div>

              <p>If the setup wizard does not start automatically, run it from the terminal with:</p>
              <CodeBlock>{`openclaw onboard --install-daemon`}</CodeBlock>

              <p>The <code>--install-daemon</code> flag automatically registers OpenClaw as a system service: on macOS this is launchd, and on Linux — systemd. After that, the Gateway will start automatically when the system boots.</p>

              <ol>
                <li>We are asked whether we are doing everything at our own risk, and here we answer “Yes”.</li>
                <li>Onboarding Mode. Choose QuickStart (automatic/simplified setup).</li>
              </ol>

              <p>In this mode, the wizard handles the basic configuration, minimizes the number of questions, and is suitable for standard use cases. Manual mode is intended for advanced users and fine-tuning. Choose it when you need to adjust specific network parameters, installation paths, or integrate OpenClaw into a more complex existing infrastructure.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure"><img src="/images/intro.avif" alt="Intro" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>3. Choose the language model that you will use and that you configured through Ollama. On the next step, when choosing the provider, select Ollama.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/ollama_window.png" alt="Ollama window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Press Enter and choose the language model. By default it is Kimi K2.5 (or maybe the more advanced Kimi K2.6 is available). After selecting the model, paste the API keys you generated when registering with Ollama. Press Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>

              <p>4. Connect our bot in a messenger.</p>

              <p>The next step asks which channel you want to use to communicate with OpenClaw. There are many options: Telegram, WhatsApp, Discord, Slack, Signal, LINE, iMessage, Google Chat, Microsoft Teams, Twitch, and more. Even though Telegram is restricted or slowed down in some regions, I recommend choosing it first because setup is simple and the interface is familiar to most users.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegram_window.png" alt="Telegram window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Press Enter. After that, the setup wizard will ask you to register a new Telegram bot and will provide all the necessary instructions. We explain how to create a Telegram bot in a separate section.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegrambot_setup.png" alt="Telegram bot setup" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>On the next step, choose to paste the bot token into the terminal.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegram_token_window.png" alt="Telegram token window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Paste our token and press Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegram_token_window2.png" alt="Telegram token window 2" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>The setup wizard will report that the bot was connected successfully.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>5. The next step is choosing a search provider. It lets OpenClaw find up-to-date information on the internet when you ask questions that require fresh data. Most services require paid API keys, so at first choose free options such as DuckDuckGo.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/search_provider_window.png" alt="Search provider window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Finally, press Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>6. Bot skills are the next step in the installation. During the first setup it makes no sense to install skills, so on the next step choose NO (“No”).</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/skills_window.png" alt="Skills window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>7. Another important OpenClaw setting is hooks. These are triggers that automatically run certain actions in response to events in the system. They let you automate routine tasks and integrate OpenClaw into your workflow without manual command input.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/hooks_window.png" alt="Hooks window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Here we recommend using the Space key to select all four hooks and then pressing Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/hooks_window2.png" alt="Hooks window 2" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Hooks are small scripts that run when certain events happen. In OpenClaw they are used to automate workflows: they can save session history, log agent actions, launch background tasks at startup and shutdown, and interact with external APIs. In practice, they are a set of “auto rules” that simplify setup and capture important events without manual intervention. You can learn more about configuration in the <a href="https://docs.openclaw.ai/automation/hooks">documentation</a>.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>In OpenClaw, hooks can be enabled during the initial setup or through a configuration file. The available options are:</p>

              <ul>
                <li><strong>boot-md</strong> (system hook)<br/>Automatically creates and updates the boot.md file in the working directory. It is basically a cheat sheet for the agent: a file with instructions that always lives in the project and helps the AI understand context without extra prompts.<br/><br/>When the agent starts or the session is reset, boot.md stores:<br/><br/>- a short project description from the settings;<br/>- working rules (for example, coding style or behavior);<br/>- current state (where the agent stopped earlier).<br/><br/>Because of this, the agent does not need to reread the entire conversation every time — it just consults boot.md. This reduces token usage and helps avoid confusion when working across multiple projects.</li>
                <li><strong>bootstrap-extra-files</strong> (loading extra files)<br/>This hook loads additional instructions or configurations into the agent’s workspace before work begins. For example, if there is a .claws-rules file, the agent will automatically read it right after startup.</li>
                <li><strong>command-logger</strong> (command logging)<br/>Logs all commands the agent executes in the terminal, as well as the system responses. This is useful for debugging and analysis: you can see exactly which actions led to an error. It also improves safety because the full action log is preserved.</li>
                <li><strong>session-memory</strong> (session memory)<br/>Responsible for preserving context between launches and during long conversations. Without it, the agent may lose track of the work. The hook helps keep project state current and avoids repeating the same actions.</li>
              </ul>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>8. On the next step, the setup wizard will ask you to choose the interface where you want to communicate with the AI agent right after installation.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/hatch_window.png" alt="Interface selection window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <ul>
                <li><strong>Hatch in TUI</strong> — a text interface right inside your terminal. This is the fastest option: no browser needed, everything happens where you already type setup commands;</li>
                <li><strong>Open the Web UI</strong> — launch a full graphical browser interface (like ChatGPT or Claude, but local). This is better for working with file structure, it has a sidebar with logs and a clear view of how the agent “thinks” and changes code;</li>
                <li><strong>Do this later</strong> — skip this step and choose later.</li>
              </ul>

              <p>Choose Hatch in TUI and you can immediately ask it a question in the terminal to check whether everything was connected correctly.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/openclaw_start.png" alt="OpenClaw start" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Step 7. Launch the digital assistant in the web session and in Telegram.</p>

              <p>Before we exit the installer in the terminal, I recommend finding the token of our installed assistant and copying it. To do that, scroll a little up, find the Control UI section and this line:</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/openclaw_token.png" alt="OpenClaw token" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>This is our token (highlighted in red). Copy it and keep it in a safe place. The gateway address is highlighted in green — this is where our assistant will run. After copying the token, you can exit the installer by pressing Ctrl+C twice.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Next, open any browser you like.</p>
              <p>Paste our gateway address: <a href="http://127.0.0.1:18789/">http://127.0.0.1:18789/</a> and watch as the interface for entering the web session with our agent appears.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/b3huwmir.jpg" alt="OpenClaw web session" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Paste our token into the Gateway Token field and start the agent. Immediately, a chat window appears where you can communicate with your agent. Hooray! You can also talk to your agent through the bot we created in Telegram.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Step 8. (If needed) Uninstall OpenClaw.</p>

              <p>If you need to remove all files of the digital assistant, use the command in the terminal</p>
              <CodeBlock>{`openclaw uninstall`}</CodeBlock>

              <p>If you encounter errors or leftover installation traces, use the <a href="https://docs.openclaw.ai/install/uninstall">official uninstall guide</a>.</p>
            </div>

          </section>

        </article>

        <style jsx>{`\n          .module{--step-highlight-width:650px;max-width:720px !important;box-sizing:border-box;margin:12px auto;padding:0 18px 100px;overflow-wrap:break-word}
          @media (max-width:720px){.module{padding-bottom:60px}}
          @media (max-width:700px){
            .module-header, .steps { max-width:100%; margin:0 12px }
            .module { padding:0 12px 60px }
          }\n          .module-header{margin-bottom:0;text-align:center}
          /* align header and steps to the same visual guide (green lines) */
          .module-header, .steps{max-width:var(--step-highlight-width);margin:0 18px;box-sizing:border-box}\n          .module-header h1{margin:0;font-size:28px;line-height:1}\n          .module-header p{margin:0;padding:0;line-height:1.25;margin-top:-6px} .module-header h1 + p{margin-top:-6px;padding-top:0}\n          .steps{display:flex;flex-direction:column;align-items:center;padding-left:0}
          .step{background:var(--surface);border-radius:10px;padding:12px;margin:12px 0;border:1px solid rgba(15,23,42,0.04);box-shadow:0 4px 12px rgba(2,6,23,0.03);width:100%;max-width:100%;box-sizing:border-box;overflow:hidden}
          /* prevent overflow and long‑word breaks */
          .step p, .step h3, .step li{overflow-wrap:break-word;word-break:break-word}
          /* ensure images inside steps follow the step width */
          .step .responsive, .step .image-grid img{max-width:100%;height:auto;display:block;margin:8px auto}\n          .step h3{margin:0 0 6px;color:#000;font-weight:700}
          .step-header{display:block;width:100%;box-sizing:border-box;padding:8px 12px;border-left:4px solid var(--accent);border-right:6px solid var(--accent);background:rgba(2,6,23,0.02);border-radius:6px;text-align:left;overflow:hidden}
          .step > ul, .step > p, .step pre, .step .responsive, .step .image-grid img{max-width:100%;width:100%;margin:0;padding:0;box-sizing:border-box}
          .step > ul{padding-left:18px;list-style-position:inside;margin:8px 0}
          .step li{margin-bottom:6px;word-break:break-word}
          .step li:last-child{margin-bottom:14px}\n          pre{background:rgba(0,0,0,0.03);padding:8px;border-radius:6px;overflow:auto}\n          .figure{margin:8px 0}\n          .responsive{max-width:720px !important;width:100%;height:auto;display:block;margin:8px auto;border-radius:6px;object-fit:contain}\n          .image-grid{display:flex;flex-direction:column;align-items:center;gap:8px;margin:8px 0}
          .figure.small img{max-width:480px;margin:0 auto;display:block}
          .image-grid img{width:100%;max-width:720px;margin:0 auto;display:block;border-radius:6px;object-fit:contain}\n\n
          .note{background:rgba(255,249,230,1);border-left:4px solid var(--accent);padding:10px 12px;border-radius:6px;margin:8px 0;display:flex;align-items:center;gap:8px}
          .note .icon{margin-right:8px;font-size:18px;line-height:1}
          .note span{display:inline-block}
          .step > p.with-gap{margin-bottom:14px !important}
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:6px 12px;border-radius:6px;text-decoration:none;font-weight:600}\n        `}</style>
      </main>
    </div>
  )
}
