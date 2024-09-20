import React, { useEffect } from "react";
import { logo_url } from "../utils/images";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGPTSearchView } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";
import languageConstants from "../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const lang = useSelector((store) => store.config.lang);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const toggleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  };

  return (
    <div className="absolute mx-9 my-3 z-10 flex justify-between w-[-webkit-fill-available]">
      <img src={logo_url} alt="Netflix logo" className="w-56"></img>
      {user && (
        <div className="flex items-center mb-5">
          { showGPTSearch && 
          (<select
            className="mr-3 bg-red-800 text-white p-1 cursor-pointer rounded"
            onChange={toggleChangeLanguage}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)
          }
          <button
            className="bg-red-800 p-2 text-sm rounded-lg bg-opacity-90 text-white mr-3 hover:bg-opacity-75"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? languageConstants[lang]?.homePage : "🔎 GPTSearch"}
          </button>
          <img
            src={user.photoURL}
            alt="User_img"
            className="w-7 h-7 mr-1"
          ></img>
          {showGPTSearch ? (
            <button className="font-bold text-red-800" onClick={toggleSignOut}>
              {(languageConstants[lang]?.signOut)}
            </button>
          ) : (
            <button className="font-bold text-white" onClick={toggleSignOut}>
              {(languageConstants[lang]?.signOut)}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
