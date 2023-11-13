import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import NavBar from "./components/NavBar";
import Developers from "./routes/Developers";
import Edit from "./routes/Edit";
import Create from "./routes/Create";
import Profile from "./routes/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./actions";
import Dashboard from "./routes/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
  }, []);

  return (
    <div>
      <NavBar />
      <div className="d-flex flex-column align-items-center">
        <Routes>
          <Route path="/devconnections" element={<Home />} />
          <Route path="/devconnections/signup" element={<SignUp />} />
          <Route path="/devconnections/login" element={<Login />} />
          <Route path="/devconnections/devs" element={<Developers />} />
          <Route path="/devconnections/edit" element={<Edit />} />
          <Route path="/devconnections/create" element={<Create />} />
          <Route path="/devconnections/profile/:id" element={<Profile />} />
          <Route path="/devconnections/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
