import React, { useRef } from "react";
import "../components/style.css";

interface InterfaceToto {
  todo: string;
  setTodo:  React.Dispatch<React.SetStateAction<string>>;
  handelAddTodo: (e: React.FormEvent) => void;  
}

const InputField = ({todo, setTodo, handelAddTodo} : InterfaceToto) => {
  const inputElement = useRef<HTMLInputElement>(null)
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handelAddTodo(e);
        inputElement.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputElement}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;