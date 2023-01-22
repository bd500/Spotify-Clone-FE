import Main from "./pages/main/index"
import {Route, Routes, useLocation} from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
