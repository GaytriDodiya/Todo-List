import React from 'react';

const TodoCard = (props) => {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionContainer">
          <button
            onClick={() => {
              handleEditTodos(index);
            }}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodos(index);
            }}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoCard;
