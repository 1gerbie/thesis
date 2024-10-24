import React from 'react';
import "./add.scss";

const Add = ({ slug, columns, setOpen, onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {};

    columns
      .filter((item) => item.field !== "id" && item.field !== "img")
      .forEach((column) => {
        const input = e.currentTarget[column.field].value;
        newItem[column.field] = input;
      });

    onAdd(newItem);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type || "text"} name={column.field} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;