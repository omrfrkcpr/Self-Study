import { auth } from "@/auth/firebase";
import toastNotify from "@/helpers/toastNofity";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const useAuthCalls = () => {
  const router = useRouter();
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

  return { createUser, signIn };
};

export default useAuthCalls;
