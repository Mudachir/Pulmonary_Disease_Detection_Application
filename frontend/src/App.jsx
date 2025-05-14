import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dataset from "./pages/Dataset";
import CheckDisease from "./pages/CheckDisease";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataset" element={<Dataset />} />
        <Route path="/check" element={<CheckDisease />} />

      </Routes>
    </Router>
  );
}


export default App;  