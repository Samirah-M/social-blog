import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import QAPage from "./Components/QAPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AllPosts from "./Components/AllPosts";
import MyPosts from "./Components/MyPosts";
import AddPost from "./Components/AddPost";
import UpdatePost from "./Components/UpdatePost";
import Footer from "./Components/Footer";

import { SessionProvider } from "./contexts/SessionContext";

function App() {
  return (
    <SessionProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/my-posts" element={<MyPosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<UpdatePost />} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
      <Footer />
    </Router>
    </SessionProvider>
  );
}

export default App;
