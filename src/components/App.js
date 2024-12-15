
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [id, setId] = useState(3);
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    setTodo([...todo, { todo: input, id: id }]);

    setId(id+1);
  }

  function deleteTodo(e, id) {
    setTodo(currTodo => {
      return currTodo.filter(todo => todo.id !== id);
    })
  }

  return (
    <div>
        <h3>To-Do List</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} required />
            <button>Add Todo</button>
          </form>
        </div>
        <ul>
          {
            todo.map(item => {
              return (
                <li key={item.id}>
                  <div>{item.todo}</div>
                  <button onClick={e => deleteTodo(e, item.id)}>Delete</button>
                  <br /><br />
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default App;
