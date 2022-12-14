import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const todosCompleted = todos.filter((todo) => todo.checked === true).length;
    return todosCompleted;
  };

  return (
    <div className="todo-results">
      Done:&nbsp;
      {calculateChecked()}
    </div>
  );
};
