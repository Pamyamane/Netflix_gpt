import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidation } from "../Utils/Validation";
import { auth } from "../Utils/Firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../Utils/UserSlice";

const Login = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const NameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const provider = new GoogleAuthProvider();

  const handleAuth = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const Name = NameRef.current.value
    const error = CheckValidation(email, password);
    if (error) return setErrorMessage(error);

    try {
      if (isSignInForm) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        Navigate("/browse")
        console.log("Signed in:", userCredential.user);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(userCredential, {
          displayName: Name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        Navigate("/browse")
        console.log("User created:", userCredential.user);
      }
    } catch (error) {
      setErrorMessage(error.code + " - " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const {displayName , email} = result.user;
    console.log(displayName,"useryy");
     dispatch(adduser({ email : email,  displayName : displayName}))
    
    Navigate("/browse")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(error.code + " - " + error.message);
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };

  return (
    <div className="relative h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src="/Netbg.jpg" alt="Netflix Background" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-12 w-full max-w-md rounded-md shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

        {!isSignInForm && (
          <input  ref={NameRef} type="text" placeholder="Full Name" className="w-full p-4 mb-4 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-gray-700 transition-all" />
        )}

        <input ref={emailRef} type="text" placeholder="Email or phone number" className="w-full p-4 mb-4 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-gray-700 transition-all" />
        <input ref={passwordRef} type="password" placeholder="Password" className="w-full p-4 mb-4 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-gray-700 transition-all" />

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <button className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition-all duration-300" onClick={handleAuth}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <button className="w-full bg-blue-500 py-3 mt-4 rounded font-semibold hover:bg-blue-600 transition-all duration-300" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>

        <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-gray-500" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">Need help?</a>
        </div>

        <p className="mt-6 text-gray-400 text-sm text-center cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>
          <span className="text-white cursor-pointer hover:underline">
            {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in now."}
          </span>
        </p>

        <p className="mt-4 text-xs text-gray-500 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
