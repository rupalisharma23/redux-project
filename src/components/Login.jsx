import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  userSaveApi } from "../redux/slices/useSlice";


export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.users.user);
  const navigate = useNavigate();

  const submitForm = async(e) => {
    e.preventDefault();
    try{
      const response = await dispatch(userSaveApi({ name, password })).unwrap()
      // The result of dispatching a thunk action is a Promise. Redux toolkit wraps this Promise so that there are no uncaught errors in your component. It always resolves to either a success or failure action. But you can unwrap() the result to use it with a try/catch.
      navigate("/products")
    }
    catch(error){
      console.log('error',error)
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="flex flex-col h-[100vh] w-[100%] items-center justify-center">
          <div className="flex flex-col h-[50%] w-[70%] items-center justify-center gap-[1rem] shadow-xl">
            <div className="text-[30px] w-2">login</div>
            <div className="flex flex-col gap-[10px] w-[70%]">
              <label htmlFor="email" className="text-[20px] w-1">
                name
              </label>
              <input
                type="text"
                name="email"
                id=""
                className="border-[2px] border-black h-[2rem] rounded-[5px]"
                onChange={(e) => {
                  setName(e.target.value);
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
           {loginInfo.loader? 'loading': <button
              className="bg-pink-200 w-[10rem] h-[3rem] mt-[2rem] rounded-[10px] hover:bg-pink-400 "
              type="submit"
            >
              login
            </button>}
          </div>
        </div>
      </form>
    </div>
  );
}
