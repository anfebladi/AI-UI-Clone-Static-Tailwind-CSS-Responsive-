
import './App.css'

function App() {


  return (
    <div className="w-full h-screen bg-app-bg text-app-text flex overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 p-4 bg-app-sidebar border-r border-app-border shrink-0 z-10">
        <p className="mt-3 mb-12 text-app-text-muted text-sm shrink-0"> Workspace </p>

        <p className="mb-4 text-app-accent hover:text-app-accent-hover cursor-default shrink-0"> + New chat </p>

        <p className="mb-4 text-app-text-muted text-sm shrink-0"> Scheduled prompts </p>

        <p className="mb-8 text-app-text-muted text-sm shrink-0"> Extensions </p>

        <p className="mb-14 text-app-text-muted text-sm shrink-0"> Library & uploads </p>

        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-app-text-muted shrink-0"> Recent chats </p>

        <div className="flex-1 overflow-y-auto">
          <p className="mb-4 cursor-pointer hover:text-app-text-muted transition-colors"> Hash maps explained </p>
          <p className="mb-4 cursor-pointer hover:text-app-text-muted transition-colors"> Deploying a Node API </p>
          <p className="mb-4 cursor-pointer hover:text-app-text-muted transition-colors"> React hooks debugging </p>
          <p className="mb-4 cursor-pointer hover:text-app-text-muted transition-colors"> SQL vs NoSQL tradeoffs </p>
          <p className="mb-4 cursor-pointer hover:text-app-text-muted transition-colors"> Tailwind layout tips </p>
          <p className="mb-4 cursor-pointer hover:text-app-text-muted transition-colors"> Weekend project ideas </p>
        </div>

        <p className="mt-4 text-app-text-muted text-sm shrink-0"> Settings & help </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <nav className="flex justify-between items-center p-4 border-b border-app-border bg-app-elevated/80 backdrop-blur-sm shrink-0 z-10 relative">
          <div className="text-xl font-bold text-app-accent">GeminiClone</div>

          <div className="w-10 h-10 rounded-full bg-app-chip border border-app-border flex items-center justify-center text-app-accent-soft text-sm font-semibold"> A </div>
        </nav>

        {/* Chat Area */}
        <div className="overflow-y-auto flex-1 px-4 sm:px-8 md:px-12 lg:px-32 xl:px-48 pb-40 pt-8 text-pretty space-y-8">
          
          <div className="flex gap-4 items-start w-full max-w-4xl mx-auto">
            <div className="w-8 h-8 rounded-full bg-app-chip border border-app-border flex items-center justify-center text-app-accent-soft text-sm font-semibold shrink-0 mt-1"> A </div>
            <div className="flex-1 min-w-0">
              <p className="text-app-text-muted mb-1 font-medium">You</p>
              <p className="text-app-text break-words">Can you summarize the best practices for deploying a Node.js API to production? I'm currently using Express and MongoDB. Also, provide a step-by-step generic guide I can follow.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start w-full max-w-4xl mx-auto">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xl shrink-0 mt-1"> ✦ </div>
            <div className="flex-1 min-w-0">
              <p className="text-app-text-muted mb-1 font-medium">GeminiClone</p>
              <div className="space-y-4">
                <p className="text-app-text break-words">Deploying a Node.js API (especially with Express and MongoDB) to production requires careful attention to security, performance, and reliability. Here is a comprehensive overview of best practices, followed by a general deployment strategy.</p>

                <h3 className="text-xl font-semibold text-app-accent mt-6">1. Security Best Practices</h3>
                <ul className="list-disc pl-5 space-y-2 text-app-text-muted break-words">
                  <li><strong className="text-app-text">Use Environment Variables:</strong> Never hardcode sensitive information (like your MongoDB URI, JWT secrets, or API keys). Use a package like <code className="bg-app-bg px-1 rounded text-app-text break-all">dotenv</code> for local development, and configure secrets in your host's dashboard.</li>
                  <li><strong className="text-app-text">Enable CORS and Helmet:</strong> Use <code className="bg-app-bg px-1 rounded text-app-text">helmet</code> to set secure HTTP headers, and configure <code className="bg-app-bg px-1 rounded text-app-text">cors</code> to strictly limit which domains can communicate with your API.</li>
                  <li><strong className="text-app-text">Rate Limiting:</strong> Implement <code className="bg-app-bg px-1 rounded text-app-text">express-rate-limit</code> to prevent brute-force attacks and DDoS by limiting how many requests a given IP can make in a specified window.</li>
                </ul>

                <h3 className="text-xl font-semibold text-app-accent mt-6">2. Performance and Reliability</h3>
                <ul className="list-disc pl-5 space-y-2 text-app-text-muted break-words">
                  <li><strong className="text-app-text">Run in Production Mode:</strong> Set <code className="bg-app-bg px-1 rounded text-app-text">NODE_ENV=production</code>. Express caches views, CSS files, and generates less verbose error messages, speeding up your application.</li>
                  <li><strong className="text-app-text">Process Management:</strong> Node.js is single-threaded. Use a process manager like <strong className="text-app-text">PM2</strong> to automatically restart the app if it crashes, or Docker/Kubernetes if you are using container orchestration.</li>
                  <li><strong className="text-app-text">Reverse Proxy:</strong> Do not expose Node directly on port 80/443. Run Node on a higher port (e.g., 3000) and use <strong className="text-app-text">Nginx</strong> or <strong className="text-app-text">Caddy</strong> as a reverse proxy to handle SSL termination and serve static assets.</li>
                </ul>

                <h3 className="text-xl font-semibold text-app-accent mt-6">3. Step-by-Step Deployment Strategy (VPS approach)</h3>
                <p className="text-app-text break-words">If you are deploying to a standard VPS (like DigitalOcean, Linode, or AWS EC2), follow these standard steps:</p>

                <div className="bg-app-panel border border-app-border p-4 rounded-xl space-y-3 font-mono text-sm text-app-text-muted overflow-x-auto">
                  <p className="whitespace-pre"># 1. Update your server and install Node.js / Git</p>
                  <p className="text-app-text whitespace-pre">sudo apt update && sudo apt install nodejs npm git</p>

                  <p className="pt-2 whitespace-pre"># 2. Clone your repository</p>
                  <p className="text-app-text whitespace-pre">git clone https://github.com/your-username/your-api.git</p>
                  <p className="text-app-text whitespace-pre">cd your-api</p>

                  <p className="pt-2 whitespace-pre"># 3. Install production dependencies</p>
                  <p className="text-app-text whitespace-pre">npm ci --only=production</p>

                  <p className="pt-2 whitespace-pre"># 4. Set environment variables (e.g. in a .env file or system env)</p>
                  <p className="text-app-text whitespace-pre">nano .env</p>

                  <p className="pt-2 whitespace-pre"># 5. Start with PM2</p>
                  <p className="text-app-text whitespace-pre">npm install pm2 -g</p>
                  <p className="text-app-text whitespace-pre">pm2 start server.js --name "node-api"</p>
                  <p className="text-app-text whitespace-pre">pm2 startup && pm2 save</p>
                </div>

                <p className="text-app-text mt-4 break-words">Alternatively, if you prefer Platform-as-a-Service (PaaS) like <strong className="text-app-text">Render</strong>, <strong className="text-app-text">Railway</strong>, or <strong className="text-app-text">Heroku</strong>, you simply connect your GitHub repository, configure your environment variables in their dashboard, and push to your main branch to trigger an automatic build and deployment.</p>

                <p className="text-app-text break-words">Let me know if you want to dive deeper into Nginx configuration, Dockerizing the app, or MongoDB database security!</p>
              </div>
            </div>
          </div>

        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-app-bg via-app-bg shadow-[0_-20px_20px_-10px_rgba(7,10,15,0.8)] z-20">
          <div className="w-full max-w-4xl mx-auto flex justify-center">
            <div className="w-full p-4 bg-app-panel border border-app-border rounded-3xl shadow-lg shadow-black/20 flex flex-col">
              <textarea
                className="w-full bg-transparent outline-none resize-none text-app-text placeholder-app-text-muted"
                rows="3"
                placeholder="Ask anything, or attach a file to get started…"
                defaultValue="static"
              ></textarea>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
