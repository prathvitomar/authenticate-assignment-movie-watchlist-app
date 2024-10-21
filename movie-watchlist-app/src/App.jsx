import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restoreUser } from "./features/users/userSlice";
import { restoreAuth } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  
  // Select the auth state using useSelector
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (activeUser) {
      dispatch(restoreUser());
      dispatch(restoreAuth({ email: activeUser.email }));
    }

    console.log("Active User from userSlice:", activeUser); // Log active user
    console.log("Auth state:", authState); // Log auth state
  }, [dispatch, authState]);

  return (
    <>
      <Navbar />
      <div className="my-6">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
