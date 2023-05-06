//Exercise Lists - Create a `TodoList` component
/*
import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const input = document.getElementById('todo-input');
    setItems([...items, input.value]);
    input.value = '';
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input id="todo-input" type="text" />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}


export default TodoList;
*/
//=============================================================================================================================================
//Exercise Lists - Add Todo
/*
import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const input = document.getElementById('todo-input');
    setItems([...items, input.value]);
    input.value = '';
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input id="todo-input" type="text" />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default TodoList;
*/
//=============================================================================================================================================
//Exercise Lists - Add a "reset" `button`
/*
import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const input = document.getElementById('todo-input');
    setItems([...items, input.value]);
    input.value = '';
  };

  const resetItems = () => {
    setItems([]);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input id="todo-input" type="text" />
      <button onClick={addItem}>Add Item</button>
      <button onClick={resetItems}>Reset</button>
    </div>
  );
}

export default TodoList;
*/
//=============================================================================================================================================
//Exercise Lists - Add a "remove" `button`
/*
import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const input = document.getElementById('todo-input');
    setItems([...items, input.value]);
    input.value = '';
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input id="todo-input" type="text" />
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => setItems([])}>Reset</button>
    </div>
  );
}

export default TodoList;
*/
//=============================================================================================================================================
//Exercise Render Props - Modify the `TodoList` component
/*
import React, { useState } from 'react';

function TodoList({ render }) {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const input = document.getElementById('todo-input');
    setItems([...items, input.value]);
    input.value = '';
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      {render(items, removeItem)}
      <input id="todo-input" type="text" />
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => setItems([])}>Reset</button>
    </div>
  );
}

export default TodoList;
*/
