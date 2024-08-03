import React, { useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Components/login";
import Register from "./Components/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { auth } from "./Components/firebase";
import Movies from "./Components/movies/movies";
import MovieDetails from "./Components/moviedetails/MovieDetails";
import Payment from "./Components/Payment/Payment";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/movies" /> : <Register />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
