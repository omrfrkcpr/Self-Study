import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, signGoogleProvider } = useAuthContext();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = info;
    login(email, password);
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          onSubmit={handleSubmit}
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="email"
              id="email"
              value={info.email}
              onChange={handleChange}
              className="peer"
              placeholder=" "
              type="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="password"
              id="password"
              value={info.password}
              onChange={handleChange}
              className="peer"
              placeholder=" "
              type="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Login
          </button>
          <button
            onClick={signGoogleProvider}
            className="btn-danger flex justify-between"
            type="button"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
          <div>
            <p className="text-sm text-center mt-5">
              Forgot Password?{" "}
              <span
                onClick={() => navigate("/reset")}
                className="text-yellow-500 hover:text-red-600 hover:underline cursor-pointer"
              >
                Reset Password
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
