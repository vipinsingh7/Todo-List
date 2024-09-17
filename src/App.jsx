import React, { useState } from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  // Add new item
  const addItem = (newItem) => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
    }
  };

  // Update existing item
  const updateItem = (index, newValue) => {
    const updatedItems = items.map((item, i) => (i === index ? newValue : item));
    setItems(updatedItems);
  };

  // Delete an item
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    
    <div className="app-container">
      <h1>Simple CRUD App</h1>
      <AddItem addItem={addItem} />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
    
  );
};

export default App;
