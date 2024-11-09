import React, { useState } from 'react';
import './inventory.scss';
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';

const Inventory = () => {
  const [open, setOpen] = useState(false);
  const [itemRows, setItemRows] = useState([]);

  const columns = [
    { field: 'orderid', headerName: 'Item ID:', width: 90 },
    { field: 'itemCode', headerName: 'Item Code:', width: 150 },
    { field: 'itemName', headerName: 'Item Nam:', width: 200 },
    { field: 'quantity', headerName: 'Quantity:', width: 150 },
    { field: 'date', headerName: 'Date:', width: 150 },
  ];

  const handleAddItem = (newItem) => {
    setItemRows([...itemRows, newItem]);
    setOpen(false);
  };

  return (
    <div className="inventory">
      <div className="info">
        <h1></h1>
        <button onClick={() => setOpen(true)}>Add Items</button>
      </div>
      <DataTable slug="items" columns={columns} rows={itemRows} />
      {open && <Add slug="items" columns={columns} setOpen={setOpen} onAdd={handleAddItem} />}
    </div>
  );
};

export default Inventory;



