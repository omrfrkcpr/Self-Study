import { auth } from "@/auth/firebase";
import toastNotify from "@/helpers/toastNofity";
import { login, logout } from "@/redux/feature/authSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  const userObserver = async () => {
    //? Kullanicinin signin olup olmadigini takip eden ve kullanici degistiginde yeni kullaniciyi response olarak donen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, displayName, photoURL } = user;

        dispatch(login({ email, displayName, photoURL }));
      } else {
        // User is signed out
        dispatch(logout());
        toastNotify("info", "Logged Out successfully!");
      }
    });
  };

  return { createUser, signIn, userObserver };
};

export default useAuthCalls;
