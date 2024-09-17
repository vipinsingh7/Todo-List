import React, { useState } from 'react';

const ItemList = ({ items, updateItem, deleteItem }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index, item) => {
    setEditIndex(index);
    setEditValue(item);
  };

  const handleSave = (index) => {
    updateItem(index, editValue);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              {item}
              <button onClick={() => handleEdit(index, item)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
