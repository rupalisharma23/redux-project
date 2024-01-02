import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlices";

export default function Todo() {
  const todos = useSelector((state) => state.todo);
  console.log(todos)
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((tod) => {
       return(
        <div>
        {tod.task}
        <button
          onClick={() => {
            dispatch(removeTodo(tod.id));
          }}
        >
          x
        </button>
      </div>
       )
      })}
    </div>
  );
}
