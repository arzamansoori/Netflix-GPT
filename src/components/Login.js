import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormFields } from "../utils/validateForm";
import { bg_url } from "../utils/images";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const toggleBtnSignUpForm = () => {
    return setIsSignInForm(!isSignInForm);
  };

  const validateFields = () => {
    //check if not valid
    if(!isSignInForm){
      const errMessage = validateFormFields(
        email.current.value,
        password.current.value
      );
      setErrorMessage(errMessage);
      if (errMessage) return;
    }

    //check if valid
    if (!isSignInForm) {
      //Sign Up Form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Form
      //this is from Firebase docs
      console.log("Attempting sign in");
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log("User", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("Email or Password doesn't exist or incorrect.");
          }
          else if(errorCode === "auth/invalid-email") {
            setErrorMessage("Email is invalid");
          }
          else {
            setErrorMessage(errorMessage);
          }
          console.log(errorCode + errorMessage)
        });
        
    }
  };

  return (
    <div className=" ">
      <Header />
      <div className="flex flex-col items-center">
        <div className="absolute">
          <img src={bg_url} alt="backgoundImage" />
        </div>
        <div className="relative grid h-screen place-items-center">
          <div
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
            className="flex flex-col items-start justify-center bg-opacity-50 bg-black py-[48px] px-[68px]"
          >
            <div>
              <h1 className="font-bold text-white text-4xl my-6">
                {isSignInForm ? "Sign in" : "Sign up"}
              </h1>
            </div>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 px-5 my-4 text-lg text-white border-inherit border rounded-md bg-black bg-opacity-70"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-3 px-5 my-4 text-lg text-white border-inherit border rounded-md bg-black bg-opacity-70"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 px-5 my-2 text-lg text-white border-inherit border rounded-md bg-black bg-opacity-70"
            />
            <p className="text-red-600 font-semibold">{errorMessage}</p>
            <button
            //  type="submit"
              className="p-2 my-2 bg-red-600 rounded-md w-[100%] text-white font-semibold"
              onClick={validateFields}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-slate-300 my-4" onClick={toggleBtnSignUpForm}>
              {isSignInForm ? "New to Netflix?" : "Already Registered?"}
              <span
                className="font-semibold text-white cursor-pointer ml-1 hover:border-b"
                onClick={toggleBtnSignUpForm}
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
