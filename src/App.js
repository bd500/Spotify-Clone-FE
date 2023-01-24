import Main from "./pages/main/index"
import {Route, Routes, useLocation} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import YourPlaylist from "./pages/YourPlaylist/YourPlaylist";
import Library from "./pages/Library/Library";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playlist" element={<YourPlaylist />} />
        <Route path="/library" element={<Library />} />
        <Route path="/liked" element={<LikedSongs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
