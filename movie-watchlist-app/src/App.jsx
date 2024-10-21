import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { restoreUser } from "./features/users/userSlice";
import { restoreAuth } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Restore user and auth state on app load
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (activeUser) {
      dispatch(restoreUser());
      dispatch(restoreAuth({ email: activeUser.email })); // Pass the email to restoreAuth
    }
  }, [dispatch]);
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
