
import './App.css'

function App() {


  return (
    <>
      <div className="container text-app-text">
        <div className=" h-screen overflow-hidden  md:grid grid-cols-4">
          <div className="hidden md:block md:col-span-1 md:p-4 bg-app-sidebar border-r border-app-border">


            <p className="mt-3 mb-12 text-app-text-muted text-sm"> Workspace </p>



            <p className="col-span-7 mb-4 text-app-accent hover:text-app-accent-hover cursor-default"> + New chat </p>



            <p className="mb-4 text-app-text-muted text-sm"> Scheduled prompts </p>

            <p className="mb-8 text-app-text-muted text-sm"> Extensions </p>

            <p className="mb-14 text-app-text-muted text-sm"> Library & uploads </p>

            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-app-text-muted"> Recent chats </p>

            <p className="mb-4"> Hash maps explained </p>
            <p className="mb-4"> Deploying a Node API </p>
            <p className="mb-4"> React hooks debugging </p>
            <p className="mb-4"> SQL vs NoSQL tradeoffs </p>
            <p className="mb-4"> Tailwind layout tips </p>
            <p className="mb-4"> Weekend project ideas </p>


            <p className="fixed bottom-10 text-app-text-muted text-sm"> Settings & help </p>



          </div>

          <div className="md:col-span-3 bg-app-bg flex flex-col h-screen">

            <nav className="flex justify-between items-center p-4 border-b border-app-border mb-8 bg-app-elevated/80 backdrop-blur-sm">
              <div className="text-xl font-bold text-app-accent">GeminiClone</div>

              <ul className="">
                <li className="text-app-text-muted"> Suggestions: summarize a doc · debug code · plan a trip </li>
              </ul>

              <div className="w-10 h-10 rounded-full bg-app-chip border border-app-border flex items-center justify-center text-app-accent-soft text-sm font-semibold"> A </div>
            </nav>

            <div className="md:px-60 overflow-y-auto flex-1 mx-8 md:mx-0 mb-5 md:mb-15 text-pretty space-y-6">
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-app-chip border border-app-border flex items-center justify-center text-app-accent-soft text-sm font-semibold shrink-0 mt-1"> A </div>
                <div className="flex-1">
                  <p className="text-app-text-muted mb-1 font-medium">You</p>
                  <p className="text-app-text">Can you summarize the best practices for deploying a Node.js API to production? I'm currently using Express and MongoDB. Also, provide a step-by-step generic guide I can follow.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xl shrink-0 mt-1"> ✦ </div>
                <div className="flex-1">
                  <p className="text-app-text-muted mb-1 font-medium">GeminiClone</p>
                  <div className="space-y-4">
                    <p className="text-app-text">Deploying a Node.js API (especially with Express and MongoDB) to production requires careful attention to security, performance, and reliability. Here is a comprehensive overview of best practices, followed by a general deployment strategy.</p>
                    
                    <h3 className="text-xl font-semibold text-app-accent mt-6">1. Security Best Practices</h3>
                    <ul className="list-disc pl-5 space-y-2 text-app-text-muted">
                      <li><strong className="text-app-text">Use Environment Variables:</strong> Never hardcode sensitive information (like your MongoDB URI, JWT secrets, or API keys). Use a package like <code className="bg-app-bg px-1 rounded text-app-text">dotenv</code> for local development, and configure secrets in your host's dashboard.</li>
                      <li><strong className="text-app-text">Enable CORS and Helmet:</strong> Use <code className="bg-app-bg px-1 rounded text-app-text">helmet</code> to set secure HTTP headers, and configure <code className="bg-app-bg px-1 rounded text-app-text">cors</code> to strictly limit which domains can communicate with your API.</li>
                      <li><strong className="text-app-text">Rate Limiting:</strong> Implement <code className="bg-app-bg px-1 rounded text-app-text">express-rate-limit</code> to prevent brute-force attacks and DDoS by limiting how many requests a given IP can make in a specified window.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-app-accent mt-6">2. Performance and Reliability</h3>
                    <ul className="list-disc pl-5 space-y-2 text-app-text-muted">
                      <li><strong className="text-app-text">Run in Production Mode:</strong> Set <code className="bg-app-bg px-1 rounded text-app-text">NODE_ENV=production</code>. Express caches views, CSS files, and generates less verbose error messages, speeding up your application.</li>
                      <li><strong className="text-app-text">Process Management:</strong> Node.js is single-threaded. Use a process manager like <strong className="text-app-text">PM2</strong> to automatically restart the app if it crashes, or Docker/Kubernetes if you are using container orchestration.</li>
                      <li><strong className="text-app-text">Reverse Proxy:</strong> Do not expose Node directly on port 80/443. Run Node on a higher port (e.g., 3000) and use <strong className="text-app-text">Nginx</strong> or <strong className="text-app-text">Caddy</strong> as a reverse proxy to handle SSL termination and serve static assets.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-app-accent mt-6">3. Step-by-Step Deployment Strategy (VPS approach)</h3>
                    <p className="text-app-text">If you are deploying to a standard VPS (like DigitalOcean, Linode, or AWS EC2), follow these standard steps:</p>
                    
                    <div className="bg-app-panel border border-app-border p-4 rounded-xl space-y-3 font-mono text-sm text-app-text-muted">
                      <p># 1. Update your server and install Node.js / Git</p>
                      <p className="text-app-text">sudo apt update && sudo apt install nodejs npm git</p>
                      
                      <p className="pt-2"># 2. Clone your repository</p>
                      <p className="text-app-text">git clone https://github.com/your-username/your-api.git</p>
                      <p className="text-app-text">cd your-api</p>
                      
                      <p className="pt-2"># 3. Install production dependencies</p>
                      <p className="text-app-text">npm ci --only=production</p>
                      
                      <p className="pt-2"># 4. Set environment variables (e.g. in a .env file or system env)</p>
                      <p className="text-app-text">nano .env</p>

                      <p className="pt-2"># 5. Start with PM2</p>
                      <p className="text-app-text">npm install pm2 -g</p>
                      <p className="text-app-text">pm2 start server.js --name "node-api"</p>
                      <p className="text-app-text">pm2 startup && pm2 save</p>
                    </div>

                    <p className="text-app-text mt-4">Alternatively, if you prefer Platform-as-a-Service (PaaS) like <strong className="text-app-text">Render</strong>, <strong className="text-app-text">Railway</strong>, or <strong className="text-app-text">Heroku</strong>, you simply connect your GitHub repository, configure your environment variables in their dashboard, and push to your main branch to trigger an automatic build and deployment.</p>

                    <p className="text-app-text">Let me know if you want to dive deeper into Nginx configuration, Dockerizing the app, or MongoDB database security!</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex justify-center mb-15">
              <div className="w-2/3 p-4 bg-app-panel border border-app-border rounded-3xl shadow-lg shadow-black/20 flex flex-col">
                <textarea
                  className="w-full bg-transparent outline-none resize-none text-app-text placeholder-app-text-muted"
                  rows="3"
                  placeholder="Ask anything, or attach a file to get started…"
                ></textarea>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
