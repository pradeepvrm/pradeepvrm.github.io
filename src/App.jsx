
import './App.css'

function App() {

  return (
    <>
    <div className='min-h-screen bg-black relative overflow-hidden'>
    <div className="absolute inset-0"
        style={{
          backgroundImage: 
          `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "25px 25px",
         }}
        />
      {/* <div className="absolute inset-0"
          style={{
          background: `
            radial-gradient(circle at center, 
            transparent 0%, 
            transparent 30%, 
            rgba(0,0,0,0.3) 60%, 
            rgba(0,0,0,0.7) 80%, 
            rgba(0,0,0,0.9) 100%
          )
          `,
          mixBlendMode: "multiply",
        }}
      /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Hey! I'm Pradeep, a</h1>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg">
              <span className="text-3xl md:text-6xl lg:text-7xl font-bold text-white">FullStack Developer</span>
            </div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate and skilled Software Developer with strong problem-solving abilities and expertise in full
            stack. I can build and deploy robust backends and responsive UIs. I continuously explore new tools and
            frameworks to craft innovative, scalable, and efficient products.
          </p>
          <div className="pt-4">
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 border border-slate-700 hover:border-slate-600">
              <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/testbucket/files/684b07a700394a1e7f9d/view?project=682471bb00399c580b6a&mode=admin" target='_blank'>
                  View Resume</a>
            </button>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}

export default App
