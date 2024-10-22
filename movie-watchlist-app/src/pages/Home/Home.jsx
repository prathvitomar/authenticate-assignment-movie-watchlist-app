import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MovieList from "../../components/MovieList/MovieList";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        <MovieList />
      </div>
    </div>
  );
}

export default Home;
