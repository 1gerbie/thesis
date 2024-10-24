import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './calibrationdue.scss';

const CalibrationDue = () => {
  const [gages, setGages] = useState([
    { id: 1, serial: 'B155204', controlNo: '01-0009', status: 'Active', manufacturer: 'Mitutoyo America Corp.', type: 'Micrometer', size: '44928', area: 'Micrometer', dueDate: '2024-03-30', calibrateBeforeUse: 'No' },
    { id: 2, serial: '293-346-30', controlNo: '01-0010', status: 'Active', manufacturer: 'Mitutoyo America Corp.', type: 'Micrometer', size: '44960', area: 'Micrometer', dueDate: '2024-05-08', calibrateBeforeUse: 'No' },
    { id: 3, serial: '122-125', controlNo: '01-0011', status: 'Active - Overdue', manufacturer: 'Mitutoyo America Corp.', type: 'Micrometer', size: '0-1', area: 'Micrometer', dueDate: '2023-10-18', calibrateBeforeUse: 'No' },
    { id: 4, serial: '2204-FL-1', controlNo: '01-0018', status: 'Retired', manufacturer: 'L.S. Starrett', type: 'Micrometer', size: '0-1', area: 'Micrometer', dueDate: 'N/A', calibrateBeforeUse: 'N/A' },
  ]);

  const columns = [
    { field: 'serial', headerName: 'Serial No.', width: 150 },
    { field: 'controlNo', headerName: 'Control No.', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      renderCell: (params) => (
        <span className={`status ${params.value.toLowerCase().replace(' ', '-')}`}>
          {params.value}
        </span>
      ),
    },
    { field: 'manufacturer', headerName: 'Manufacturer', width: 200 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'size', headerName: 'Range of Size', width: 150 },
    { field: 'area', headerName: 'Area', width: 150 },
    { field: 'dueDate', headerName: 'Calibration Due Date', width: 150 },
    { field: 'calibrateBeforeUse', headerName: 'Calibrate Before Use', width: 180 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <button className="action-btn edit">✏️ Edit</button>
          <button className="action-btn delete">🗑️ Delete</button>
        </>
      ),
    },
  ];

  return (
    <div className="calibration-due-container">
      <h1>Calibration Management</h1>
      <p className="module-description">
        Maintaining calibration records is important for producing quality parts and staying compliant. Our Calibration Management module centralizes gage data, making it easier to manage records, updates, and compliance with just a few clicks.
      </p>
      <div className="filters">
        <input type="date" placeholder="From Due To" />
        <input type="date" placeholder="To Due To" />
        <input type="text" placeholder="Range of Size" />
        <input type="text" placeholder="Type" />
        <input type="text" placeholder="Due Within" />
        <select>
          <option value="all">Status</option>
          <option value="active">Active</option>
          <option value="overdue">Active - Overdue</option>
          <option value="retired">Retired</option>
        </select>
        <button className="clear-filters">Clear</button>
      </div>
      <div className="dataTable">
        <DataGrid
          rows={gages}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </div>
      <div className="feature-highlight">
        <h3>Check In/Check Out</h3>
        <p>With our Check In/Check Out feature, track gages in real time and ensure calibration before use.</p>
        <h3>Automated Alerts & Reports</h3>
        <p>Stay compliant by receiving alerts for overdue calibrations and gages requiring adjustments or repair.</p>
      </div>
    </div>
  );
};

export default CalibrationDue;
