import { useEffect, useState } from "react";
import { SecBtn, TransparentBtn } from "../style/Button";
import { ColumnWrap, InputCitySearch, TodoWrapper } from "../style/Elements";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [openTodoList, setOpenTodoList] = useState(false);
  const addTodo = () => {
    todoList.findIndex((item) => item.todo === input) === -1 &&
      setTodoList((x) => [...x, { todo: input, checked: false }]);
    setInput("");
  };

  const toggleChecked = (x) => {
    setTodoList((todoList) =>
      todoList.map((curr) =>
        curr.todo === x.todo ? { ...curr, checked: !curr.checked } : curr
      )
    );
  };

  const deleteCheckedTodo = () => {
    setTodoList((todoList) =>
      todoList.filter((item) => item.checked === false)
    );
  };

  useEffect(
    () => localStorage.setItem("todo", JSON.stringify(todoList)),
    [todoList]
  );

  return (
    <TodoWrapper>
      {openTodoList ? (
        <>
          <div>Todo List</div>
          <InputCitySearch
            onChange={(e) => setInput(e.target.value)}
            placeholder="press enter to add task..."
            onKeyDown={(e) =>
              e.code === "Enter" && e.target.value !== "" && addTodo()
            }
            value={input}
          />
          <ColumnWrap Start>
            {todoList.map((item, index) => (
              <label
                key={index}
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                <InputCitySearch
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleChecked(item)}
                />
                {item.todo}
              </label>
            ))}
          </ColumnWrap>
          {todoList.length > 0 && (
            <SecBtn onClick={() => deleteCheckedTodo()}>
              Delete Completed Task
            </SecBtn>
          )}
        </>
      ) : (
        <TransparentBtn onClick={() => setOpenTodoList(true)}>
          Add Task !
        </TransparentBtn>
      )}
    </TodoWrapper>
  );
};

export default Todo;
