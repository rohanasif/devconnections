import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import NavBar from "./components/NavBar";
import Developers from "./routes/Developers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./actions";

const App = () => {
  const messageText = useSelector((state) => state.main.message.text);
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
        </Routes>
        {messageText ? <p className="text-danger">{messageText}</p> : null}
      </div>
    </div>
  );
};
export default App;
