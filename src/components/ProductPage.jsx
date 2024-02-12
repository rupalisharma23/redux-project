import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApi,updateUser,updateApi } from "../redux/slices/readUsers";

const { useContext } = require("react")

export default function ProductPage() {
  const users = useSelector((state) => state.allUsers);
  const [flag,setFlag] = useState(false)
  const setName = (name,id) =>{
    dispatch(updateUser({id,name}))
  }
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, []);
  return (
    <div>  
      <div className="flex justify-center items-center text-black-700 text-[30px] "> All users</div>
      {users.loader? <div className="h-[60vh] w-[100vw] flex justify-center items-center text-[30px] text-black-700 " >loading...</div>:
      users.allUsers.map((user) => {
        return (
          <>
            <div className="mb-[10px] flex justify-center items-center">
              <div className="mt-[10px]  shadow-lg p-[30px] rounded-[10px] text-black-500 ">
                name: <input value={user?.name} onChange={(e)=>{setName(e.target.value,user.id)}} className="text-black-700"/>
                <button onClick={()=>{dispatch(updateApi({id:user.id,name:user?.name}))}} className=" bg-pink-400 hover:bg-pink-500 p-[10px] rounded-[5px] ml-[10px] mr-[10px] ">
                  save
                </button>{" "}
                <button className=" bg-red-400 hover:bg-red-500 p-[10px] ml-[10px] mr-[10px] rounded-[5px] ">
                  delete
                </button>{" "}
              </div>
            </div>
          </>
        );
      })} 
    </div>
  );
}








