import { useState } from 'react';
import '../reset.css';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'finish react series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'go grocery',
      isComplete: true,
    },
    {
      id: 3,
      title: 'take over world',
      isComplete: false,
    },
  ]);

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#">
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          {todos.map((index, todo) => (
            <li key={todos.id} className="todo-item-container">
              <div className="todo-item" key={todo.id}>
                <input type="checkbox" key={todo.id} />
                <span className="todo-item-label" key={todo.id}>
                  {todo.title}
                </span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
              </div>
              <button className="x-button" key={todo.id}>
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  key={todo.id}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    key={todo.id}
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
