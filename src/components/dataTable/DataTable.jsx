import React from 'react';
import './dataTable.scss'; 
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const DataTable = () => {
  const rows = [
    { id: 1, orderid: '001', itemCode: '/path/to/image1.jpg', itemName: 'Beaker', quantity: 14, date: new Date('2024-09-15').toLocaleDateString() },
    { id: 2, orderid: '002', itemCode: '/path/to/image2.jpg', itemName: 'Microscope', quantity: 31, date: new Date('2024-09-16').toLocaleDateString() },
    { id: 3, orderid: '003', itemCode: '/path/to/image3.jpg', itemName: 'Gloves', quantity: 31, date: new Date('2024-09-17').toLocaleDateString()},
    { id: 4, orderid: '004', itemCode: '/path/to/image4.jpg', itemName: 'Bursen Burner', quantity: 11, date: new Date('2024-09-18').toLocaleDateString()},
    { id: 5, orderid: '005', itemCode: '/path/to/image5.jpg', itemName: 'Funnel', quantity: null, date: new Date('2024-09-19').toLocaleDateString() },
    { id: 6, orderid: '006', itemCode: '/path/to/image6.jpg', itemName: 'Glass tube', quantity: 150, date: new Date('2024-09-20').toLocaleDateString() },
    { id: 7, orderid: '007', itemCode: '/path/to/image7.jpg', itemName: 'Crucible Clamps', quantity: 44, date: new Date('2024-09-21').toLocaleDateString() },
    { id: 8, orderid: '008', itemCode: '/path/to/image8.jpg', itemName: 'Test tube Rack', quantity: 36, date: new Date('2024-09-22').toLocaleDateString() },
    { id: 9, orderid: '009', itemCode: '/path/to/image9.jpg', itemName: 'Volumetric Flask', quantity: 65, date: new Date('2024-09-23').toLocaleDateString() },
  ];
  

  const columns = [
    { field: 'orderid', headerName: 'Item ID', width: 90 },
    {
      field: 'itemCode',
      headerName: 'Item Code',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Item"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      field: 'itemName',
      headerName: 'Item Name',
      width: 200,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      editable: true,
    },
  ];
  
  
  return (
    <div className="dataTable">
      <h1>Order Data Table</h1>
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
