import { useState, useCallback } from "react";
import Todos from "./Todos";

const UseCallBackDemo = () => {
  const [count, setCount] = useState(0); 

  
  let todos = 0;
  const setTodos = (data) => {
    todos = data; 
  }


  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo= () => {
    setTodos((todos) => todos + 1);
  }; 

  const checking = () => {
    console.log('parent rendering');
  }
  checking(); 

  return (
    <>
    <div>
        Count: {count}
        <button onClick={increment}>Parent Button</button> 
      </div>
      <hr />
      <Todos addTodo={addTodo} />
      
      
    </>
  );
};
export default UseCallBackDemo; 