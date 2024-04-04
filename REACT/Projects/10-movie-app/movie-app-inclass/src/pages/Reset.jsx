import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const { resetPassword } = useAuthContext();

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email);
    setTimeout(() => {
      setEmail("");
    }, 1000);
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
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-10">
            Reset Password
          </h2>
          <div className="relative z-0 w-full mb-10 group">
            <input
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="peer"
              placeholder=" "
              type="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <button className="btn-danger w-2/3 text-sm mx-auto" type="submit">
            Send me a reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
