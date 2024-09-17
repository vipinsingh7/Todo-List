import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    addItem(newItem);
    setNewItem(''); // Clear the input
  };


  // for form container
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
