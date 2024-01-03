import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/useSlice";

export default function Login() {
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.users.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginInfo.isLoggedIn) {
      navigate("/products");
    }
  }, [loginInfo]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="flex flex-col h-[100vh] w-[100%] items-center justify-center">
          <div className="flex flex-col h-[50%] w-[70%] items-center justify-center gap-[1rem] shadow-xl">
            <div className="text-[30px] w-2">login</div>
            <div className="flex flex-col gap-[10px] w-[70%]">
              <label htmlFor="email" className="text-[20px] w-1">
                email
              </label>
              <input
                type="text"
                name="email"
                id=""
                className="border-[2px] border-black h-[2rem] rounded-[5px]"
                onChange={(e) => {
                  setEmai(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-[10px] w-[70%]">
              <label htmlFor="password" className="text-[20px] w-1">
                password
              </label>
              <input
                type="text"
                name="password"
                id=""
                className="h-[2rem] border-[2px] border-black rounded-[5px]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-pink-200 w-[10rem] h-[3rem] mt-[2rem] rounded-[10px] hover:bg-pink-400 "
              type="submit"
            >
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
