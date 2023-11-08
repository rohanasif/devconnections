import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import NavBar from "./components/NavBar";
import Developers from "./routes/Developers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
  }, []);
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
