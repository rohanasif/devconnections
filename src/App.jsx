import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import NavBar from "./components/NavBar";
import Developers from "./routes/Developers";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/devs" element={<Developers />} />
      </Routes>
    </div>
  );
};
export default App;
