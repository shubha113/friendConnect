import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import "./styles/common.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./components/auth/Register";
import FriendList from "./components/friends/FriendList";
import FriendRequests from "./components/friends/FriendRequests";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/requests" element={<FriendRequests />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
