import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import {toast} from "react-toastify";
import "./Register.css";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      window.location.href = "/movies";;
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="box">
    <form onSubmit={handleRegister} className="form">
      <h3>Sign Up</h3>

      <div className="form-control">
        <label>First name : </label>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
          value={fname}
        />
      </div>

      <div className="form-control">
        <label>Last name : </label>
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
        />
      </div>

      <div className="form-control">
        <label>Email address : </label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
      </div>

      <div className="form-control">
        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
        />
      </div>

        <button type="submit" className="btn">
          Sign Up
        </button>
      
      <p className="alredy-registered">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
    </div>
  );
};

export default Register;
