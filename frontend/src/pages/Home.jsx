function Home() {
  return (
    <div className="text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <img
          src="lung.jpg"
          alt="Pharma Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mt-2">Welcome to Pulmonary AI</h1>
          <h2 className="text-sm uppercase tracking-wider">AN AUTOMATED XRAY AI TOOL</h2>

          <a href="/check" className="mt-4 px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-black rounded-full inline-block">
            CHECK NOW
          </a>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-4">

        {/* Card 1 */}
        <div className="bg-cyan-100 p-6 rounded-xl shadow text-left">
          <h3 className="text-xl font-bold mb-3">⚡ Speed and Accuracy</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Analyzes X-ray images in seconds</li>
            <li>Minimizes diagnostic delay</li>
            <li>Improves consistency across cases</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-100 p-6 rounded-xl shadow text-left">
          <h3 className="text-xl font-bold mb-3 ">❌ Lower Misdiagnosis Risk</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Reduces human error and fatigue</li>
            <li>Minimizes false diagnoses</li>
            <li>Protects patient health and safety</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-100 p-6 rounded-xl shadow text-left">
          <h3 className="text-xl font-bold mb-3 ">🤖 AI-Powered Diagnosis</h3>
          <ul className="list-disc list-inside space-y-1  text-sm text-gray-700">
            <li>Fully automated image analysis</li>
            <li>Supports clinical decision-making</li>
            <li>Scales to handle large patient volumes</li>
          </ul>
        </div>

      </div>


    </div>
  );
}

export default Home;
