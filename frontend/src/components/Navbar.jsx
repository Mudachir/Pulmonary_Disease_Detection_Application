import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="bg-gray-300	 px-6 py-3 shadow-md rounded-full flex justify-between items-center max-w-7xl mx-auto mt-4 mb-4">



      <div className="flex items-center space-x-2">
        <img src="logo.png" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-xl font-bold">Pulmonary AI</h1>
      </div>


      <div className="flex space-x-3">
        <Link to="/" className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          🏠 Home
        </Link>
        <Link to="/dataset" className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          📂 Dataset
        </Link>

        <Link to="/about" className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
          ℹ️ About Us
        </Link>

        <a
          href="/check"
          className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-full font-medium transition flex items-center"
        >
          Check Disease <span className="ml-2">↗️</span>
        </a>


      </div>
    </nav>
  );
}

export default Navbar;
