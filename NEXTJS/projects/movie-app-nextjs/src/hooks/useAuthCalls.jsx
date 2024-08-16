import { auth } from "@/auth/firebase";
import toastNotify from "@/helpers/toastNofity";
import { login, logout } from "@/redux/feature/authSlice";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
      });
      toastNotify("success", "Registered successfully!");
      router.push("/login");
    } catch (error) {
      toastNotify("error", error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastNotify("success", "Logged in successfully!");
      router.push("/profile");
    } catch (error) {
      toastNotify("error", error.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    toastNotify("success", "Logged out successully!");
    router.push("/");
  };

  const userObserver = async () => {
    //? Kullanicinin signin olup olmadigini takip eden ve kullanici degistiginde yeni kullaniciyi response olarak donen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, displayName, photoURL } = user;

        dispatch(login({ email, displayName, photoURL }));
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        // User is signed out
        dispatch(logout());
        sessionStorage.removeItem("user");
      }
    });
  };

  const signUpProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/profile");
        toastNotify("success", "Logged in with Google!");
        console.log("Google Profile: ", result);
      })
      .catch((error) => {
        toastNotify("Error:", error.message); // Access the error message properly
        console.error("Error during sign-in:", error);
      });
  };

  const forgotPassword = (email) => {
    if (!email) {
      toastNotify("error", "Please enter your email to get reset link!");
      return;
    }
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastNotify("info", "Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastNotify("error", err.message);
        // alert(err.message);
        // ..
      });
  };

  return {
    createUser,
    signIn,
    logOut,
    userObserver,
    signUpProvider,
    forgotPassword,
  };
};

export default useAuthCalls;
