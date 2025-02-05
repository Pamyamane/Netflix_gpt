import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../Utils/UserSlice";
import { ToggleGptSearchView } from "../Utils/GptSlice";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const ShowSearchView = useSelector((store) => store.GptSearch.ShowSearchView);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, Password, dispalyName } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            Password: Password,
            dispalyName: dispalyName,
          })
        );
        Navigate("/browse");
      } else {
        dispatch(removeuser());
        Navigate("/");
      }
    });

    return () => {
      // cleanup
      unsubscribe();
    };
  }, []);

  const HandleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/Error");
      });
  };

  const GptSearchClick = ()=>{
    dispatch(ToggleGptSearchView());

  }
  return (
    <div className="absolute w-full px-6 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center md:px-8">
      <img
        className="w-36 sm:w-44 cursor-pointer"
        src="/Netflixlogo.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="relative group">
            <img
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-gray-300 cursor-pointer hover:border-white transition-all duration-300"
              src="/Usericonlogo.png"
              alt="User Logo"
            />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-12 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md py-1 px-2 transition-opacity duration-300">
              {user.displayName}
            </span>
          </div>

         <button  onClick={GptSearchClick} className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg"> {!ShowSearchView ?  "Gpt Button" : "HomePage"}</button>

          <button
            onClick={HandleSignout}
            className="bg-red-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/50"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
