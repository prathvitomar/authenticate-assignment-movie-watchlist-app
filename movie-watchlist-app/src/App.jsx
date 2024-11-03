import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth/auth"
import Loading from "./components/ui/Loading/Loading";
import { login, logout } from "./appwrite/slices/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
        <Navbar />
        <div className="my-6">
          <Outlet />
        </div>
        <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default App;
