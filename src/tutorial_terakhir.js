import {useState} from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Sample To do List",
    },
  ]);
  return (

    <div className="container">
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title }]);
        }}
      >
        Add to do list
      </button>

      <h1>Todo List</h1>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;