//Exercise Lists - Create a `TodoList` component
/*
import React from 'react';
import TodoList from './ToDoList';

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
*/
//=============================================================================================================================================
//Exercise Lists - Add Todo
/*
import React from 'react';
import TodoList from './ToDoList';

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
*/
//=============================================================================================================================================
//Exercise Lists - Add a "reset" `button`
/*
import React from 'react';
import TodoList from './ToDoList';

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
*/
//=============================================================================================================================================
//Exercise Lists - Add a "remove" `button`
/*
import React from 'react';
import TodoList from './ToDoList';

function App() {
  const renderList = (items, removeItem) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <div>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList render={renderList} />
    </div>
  );
}

export default App;
*/
//=============================================================================================================================================
//Exercise Render Props - Modify the `TodoList` component
/*
import React from 'react';
import TodoList from './ToDoList';

function App() {
  const renderList = (items, removeItem) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList render={renderList} />
    </div>
  );
}

export default App;
*/
