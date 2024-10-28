import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { restoreUser } from "./features/users/userSlice";
import { restoreAuth } from "./features/auth/authSlice";
import { ThemeProvider } from "./features/useTheme/Theme";

function App() {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("light")
  const authState = useSelector((state) => state.auth);

  const lightTheme = () =>{
    setMode("light");
  }

  const darkTheme = () =>{
    setMode("dark");
  }

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
      dispatch(restoreUser());
      dispatch(restoreAuth({ email: activeUser.email }));
    }
    console.log("Active User from userSlice:", activeUser);
    console.log("Auth state:", authState);
  }, [dispatch, authState]);

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(mode)
  }, [mode])

  return (
    <>
      <ThemeProvider value={{mode, lightTheme, darkTheme}}>
        <Navbar />
        <div className="my-6">
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
