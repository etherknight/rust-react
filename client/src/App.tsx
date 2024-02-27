import { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoApi, TodoItem } from 'libapi';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  
   useEffect( ()=> {
    TodoApi.getTodoList()
      .then(data => {          
          setTodos(data);
      });
  });

  const handleCheckBoxToggle = (id: string): void => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo List</h1>
        {todos.length > 0 &&
          <ul>
            {todos.map(item =>{
               return (<li key={item.id}>
                  <input type="checkbox" defaultChecked={item.isComplete} onChange={() => handleCheckBoxToggle(item.id)} />
                  {item.title}
                  </li>
                )
              })}
          </ul>  
        } 
        {todos.length === 0 &&
          <h1>Noting todo</h1>
        }       
      </header>
    </div>
  );
}

export default App;
