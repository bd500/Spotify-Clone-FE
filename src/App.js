import Main from "./pages/main/index"
import {Navigate, Route, Routes, useLocation} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import YourPlaylist from "./pages/YourPlaylist/YourPlaylist";
import Library from "./pages/Library/Library";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound/index"

function App() {
  const user = true;
  const location = useLocation();

  return (
    <>
      {
        user && location.pathname !== "/login" &&
          location.pathname !== "/" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/not-found" && (
            <>
              <Navbar />
              <Sidebar />
              <AudioPlayer />
            </>
          )
      }
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={
          <PrivateRoute user={user} > <Home /> </PrivateRoute>
        } />
        <Route path="/collection/tracks" element={
          <PrivateRoute user={user} > <LikedSongs /> </PrivateRoute>
        } />
        <Route path="/collection/playlists" element={
          <PrivateRoute user={user} > <Library /> </PrivateRoute>
        } />
        <Route path="/search" element={
          <PrivateRoute user={user} > <Search /> </PrivateRoute>
        } />
        <Route path="/me" element={
          <PrivateRoute user={user} > <Profile /> </PrivateRoute>
        } />
        <Route path="/playlists" element={
          <PrivateRoute user={user} > <YourPlaylist /> </PrivateRoute>
        } />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/home" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
