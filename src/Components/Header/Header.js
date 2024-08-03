import React, { useState, useEffect } from "react";
import "./Header.css";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import logo_img from "./images.png";

const Header = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="header">
      <img src={logo_img} alt="" />
      <div className="details">
        {userDetails ? (
          <div className="logout">
            <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className="btn" onClick={() => (window.location.href = "/login")}>
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
