import { Linkedin, Github, Mail } from "lucide-react"
import './App.css'

function App() {

  return (
    <>
    <main className='min-h-screen bg-black relative flex flex-col items-center overflow-hidden'>
    <div className="absolute inset-0"
        style={{
          backgroundImage: 
          `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "25px 25px",
         }}
        />
      <div className="absolute inset-0"
          style={{
          background: `
            radial-gradient(circle at center, 
            transparent 0%, 
            transparent 50%, 
            rgba(0,0,0,0.3) 75%, 
            rgba(0,0,0,0.7) 85%, 
            rgba(0,0,0,0.9) 90%
          )
          `,
          mixBlendMode: "multiply",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center py-10 px-6 text-center md:px-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Heading */}
          <div className="">
            <h1 className="text-[28px] md:text-6xl lg:text-7xl font-black text-white leading-tight">Hey! I'm Pradeep, a</h1>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 md:px-4 py-3 rounded-lg">
              <span className="text-[28px] md:text-6xl lg:text-7xl font-black text-white">FullStack Developer</span>
            </div>
          </div>

          <p className="text-gray-400 text-md md:text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate and skilled Software Developer with strong problem-solving abilities and expertise in full
            stack. I can build and deploy robust backends and responsive UIs. I continuously explore new tools and
            frameworks to craft innovative, scalable, and efficient products.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/pradeepvrm"
              className="bg-slate-800/40 backdrop-blur-xs text-gray-400 hover:text-white transition-colors duration-200 border border-slate-700 hover:border-gray-500 rounded-2xl p-3"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/pradeepvrm"
              className="bg-slate-800/40 backdrop-blur-xs text-gray-400 hover:text-white transition-colors duration-200 border border-slate-700 hover:border-gray-500 rounded-2xl p-3"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:pradeepkv012@gmail.com"
              className="bg-slate-800/40 backdrop-blur-xs text-gray-400 hover:text-white transition-colors duration-200 border border-slate-700 hover:border-gray-500 rounded-2xl p-3"
              aria-label="Mail"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-4">
            <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/testbucket/files/684b07a700394a1e7f9d/view?project=682471bb00399c580b6a&mode=admin"
              className="hover:bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full bg-slate-800/40 backdrop-blur-xs text-lg font-medium transition-all duration-200 border border-slate-700 hover:border-slate-600"
              target="_blank">
                View Resume
            </a>
          </div>

        </div>
      </div>

      {/* skills section */}
      <div className="flex min-h-0 flex-col gap-y-3 py-6 text-center">
        <div className="py-2">
          <h2 className="text-3xl md:text-5xl text-white font-black">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
          <span className="px-2 py-1 bg-lime-500/30 text-lime-300 text-sm rounded">Python</span>
          <span className="px-2 py-1 bg-pink-500/30 text-pink-300 text-sm rounded">Javascript</span>
          <span className="px-2 py-1 bg-indigo-500/30 text-indigo-300 text-sm rounded">Java</span>
          <span className="px-2 py-1 bg-teal-500/30 text-teal-300 text-sm rounded">Bash</span>
          <span className="px-2 py-1 bg-blue-500/30 text-blue-300 text-sm rounded">Flask</span>
          <span className="px-2 py-1 bg-red-500/30 text-red-300 text-sm rounded">Django</span>
          <span className="px-2 py-1 bg-pink-500/30 text-pink-300 text-sm rounded">SQL</span>
          <span className="px-2 py-1 bg-yellow-500/30 text-yellow-300 text-sm rounded">React.js</span>
          <span className="px-2 py-1 bg-purple-500/30 text-purple-300 text-sm rounded">PostgreSQL</span>
          <span className="px-2 py-1 bg-indigo-500/30 text-indigo-300 text-sm rounded">Git</span>
          <span className="px-2 py-1 bg-green-500/30 text-green-300 text-sm rounded">Tailwind CSS</span>
          <span className="px-2 py-1 bg-cyan-500/30 text-cyan-300 text-sm rounded">Firebase</span>
          <span className="px-2 py-1 bg-emerald-500/30 text-emerald-300 text-sm rounded">Azure</span>
          <span className="px-2 py-1 bg-lime-500/30 text-lime-300 text-sm rounded">Github Pages</span>
          <span className="px-2 py-1 bg-green-500/30 text-green-300 text-sm rounded">Postman</span>
          <span className="px-2 py-1 bg-cyan-500/30 text-cyan-300 text-sm rounded">Pandas</span>
          
        </div>

      </div>

      {/* projects section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
              <h2 className="text-3xl py-2 md:text-5xl font-black text-white leading-tight">Checkout My Projects</h2>
              <p className="text-gray-400 text-md md:text-xl max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills in full-stack development
              </p>
            </div>

            {/* projects list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CryptoCharts */}
            <div className="bg-slate-950/20 backdrop-blur-[2px] border border-slate-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-102">
              <div className="mb-4">
                <div className="rounded-2xl mb-4 flex items-center justify-center">
                  <img src="https://raw.githubusercontent.com/pradeepvrm/CryptoCharts/refs/heads/main/assets/example.jpeg" className="rounded-2xl w-full h-48" alt="" srcset="" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CryptoCharts</h3>
                <p className="text-gray-400 text-sm mb-4">
                A cryptocurrency charting web app that displays a TradingView lightweight chart with candlestick data fetched from Polygon API.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Flask</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Polygon API</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Lightweight Charts</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://cryptocharts.pradeep.rocks" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Live Demo
                  </a>
                  <a href="https://github.com/pradeepvrm/cryptocharts" className="text-gray-400 hover:text-white text-sm font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Mines */}
            <div className="bg-slate-950/20 backdrop-blur-[2px] border border-slate-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-102">
              <div className="mb-4">
                <div className="rounded-2xl mb-4 flex items-center justify-center">
                  <img src="mines.png" className="rounded-2xl w-full h-48" alt="" srcset="" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mines</h3>
                <p className="text-gray-400 text-sm mb-4">
                A React-based game with a 5x5 grid where players guess squares to avoid mines. The game includes variable mine counts and a probability-based scoring system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">Github Pages</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://mines-project.web.app" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Live Demo
                  </a>
                  <a href="https://github.com/pradeepvrm/mines" className="text-gray-400 hover:text-white text-sm font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Paperstake */}
            <div className="bg-slate-950/20 backdrop-blur-[2px] border border-slate-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-102">
              <div className="mb-4">
                <div className="rounded-2xl mb-4 flex items-center justify-center">
                  <img src="paperstake.png" className="rounded-2xl w-full h-48" alt="" srcset="" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Paperstake</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A mock gambling web application with a complex betting logic that allows to users to bet their points and a realtime leaderboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Django</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">Firebase</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://paper-stake.web.app" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Live Demo
                  </a>
                  <a href="https://github.com/pradeepvrm/paperstake" className="text-gray-400 hover:text-white text-sm font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
              
          </div>
          <div className="text-center justify-center mt-12">
            <a
              href="https://github.com/pradeepvrm"
              className="text-white px-8 py-3 rounded-full bg-slate-800/40 backdrop-blur-xs text-lg font-medium transition-all duration-200 border border-slate-700 hover:border-slate-600">
              More Projects
            </a>  
          </div>

        </div>
      </div>

    </main>
    </>
  )
}

export default App
