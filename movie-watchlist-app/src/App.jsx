import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // https://omdbapi.com/?apikey=22131b93&i=tt0944947&Season=1
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
