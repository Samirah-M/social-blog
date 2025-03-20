import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import QAPage from "./Components/QAPage";
import AllPosts from "./Components/AllPosts";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/posts" element={<AllPosts />/*<div>All Posts</div>*/} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
