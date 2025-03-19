import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import QAPage from "./Components/QAPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<div>All Posts</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
