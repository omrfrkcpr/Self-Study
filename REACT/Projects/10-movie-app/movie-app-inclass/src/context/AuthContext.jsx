import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/toastNotify";

//! create context
const AuthContext = createContext();

//? context provider

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const register = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/login");
      toastSuccessNotify("You are successfully registered!");
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Logged in!");
  };
  const logout = () => {
    //*https://firebase.google.com/docs/auth/web/password-auth#next_steps
    signOut(auth); //! sadece signOut metodunu çağırmamız yeterli
    toastSuccessNotify("Logged out!");
  };

  const signGoogleProvider = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
      toastSuccessNotify("Logged in!");
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toastSuccessNotify("Password reset email sent successfully.");
    } catch (error) {
      toastErrorNotify("Error sending password reset email:", error.message);
    } finally {
      navigate("/login");
    }
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user);
        const { email, displayName, photoURL } = user;
        console.log(user.displayName);
        setCurrentUser({ email, displayName, photoURL });
      } else {
        // User is signed out
        // ...
        setCurrentUser(false);
      }
    });
  };

  console.log(currentUser);
  useEffect(() => {
    userObserver(); //* Kullanıcı giriş çıkışlarını takip ettirmesi için userObserverı tetikliyoruz
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        signGoogleProvider,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//* consumer with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
