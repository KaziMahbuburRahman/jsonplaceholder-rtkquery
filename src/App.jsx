import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./pages/Feed";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
