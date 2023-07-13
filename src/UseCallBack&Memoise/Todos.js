import { memo } from "react";
const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            <span>{todos}</span>
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};
export default memo(Todos);