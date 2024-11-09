import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './calibrationdue.scss';

const CalibrationDue = () => {
  const [gages, setGages] = useState([
    { id: 1, serial: 'B155204', controlNo: '01-0009', status: 'Active', manufacturer: 'Mitutoyo America Corp.', type: 'Micrometer', size: '44928', area: 'Micrometer', dueDate: '2024-03-30', calibrateBeforeUse: 'No' },
    { id: 2, serial: '293-346-30', controlNo: '01-0010', status: 'Active', manufacturer: 'Mitutoyo America Corp.', type: 'Micrometer', size: '44960', area: 'Micrometer', dueDate: '2024-05-08', calibrateBeforeUse: 'No' },
    { id: 3, serial: '122-125', controlNo: '01-0011', status: 'Active - Overdue', manufacturer: 'Mitutoyo America Corp.', type: 'Micrometer', size: '0-1', area: 'Micrometer', dueDate: '2023-10-18', calibrateBeforeUse: 'No' },
    { id: 4, serial: '2204-FL-1', controlNo: '01-0018', status: 'Expired', manufacturer: 'L.S. Starrett', type: 'Micrometer', size: '0-1', area: 'Micrometer', dueDate: 'N/A', calibrateBeforeUse: 'N/A' },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setGages(gages.filter(gage => gage.id !== id));
    }
  };

  const handleEdit = (id) => {
    const gageToEdit = gages.find(gage => gage.id === id);
    const newSerial = prompt('Enter new Serial No.', gageToEdit.serial);
    const newControlNo = prompt('Enter new Control No.', gageToEdit.controlNo);
    const newStatus = prompt('Enter new Status.', gageToEdit.status);
    const newManufacturer = prompt('Enter new Manufacturer.', gageToEdit.manufacturer);
    const newType = prompt('Enter new Type.', gageToEdit.type);
    const newSize = prompt('Enter new Range of Size.', gageToEdit.size);
    const newArea = prompt('Enter new Area.', gageToEdit.area);
    const newDueDate = prompt('Enter new Calibration Due Date.', gageToEdit.dueDate);
    const newCalibrateBeforeUse = prompt('Enter new Calibrate Before Use.', gageToEdit.calibrateBeforeUse);

    if (newSerial && newControlNo && newStatus && newManufacturer && newType && newSize && newArea && newDueDate && newCalibrateBeforeUse) {
      setGages(gages.map(gage => (
        gage.id === id ? { ...gage, serial: newSerial, controlNo: newControlNo, status: newStatus, manufacturer: newManufacturer, type: new Type, size: newSize, area: newArea, dueDate: newDueDate, calibrateBeforeUse: newCalibrateBeforeUse } : gage
      )));
    }
  };

  const handleAdd = () => {
    const newSerial = prompt('Enter Serial No.');
    const newControlNo = prompt('Enter Control No.');
    const newStatus = prompt('Enter Status.');
    const newManufacturer = prompt('Enter Manufacturer.');
    const newType = prompt('Enter Type.');
    const newSize = prompt('Enter Range of Size.');
    const newArea = prompt('Enter Area.');
    const newDueDate = prompt('Enter Calibration Due Date.');
    const newCalibrateBeforeUse = prompt('Enter Calibrate Before Use.');

    if (newSerial && newControlNo && newStatus && newManufacturer && newType && newSize && newArea && newDueDate && newCalibrateBeforeUse) {
      const newGage = {
        id: gages.length + 1, // Generate a new ID
        serial: newSerial,
        controlNo: newControlNo,
        status: newStatus,
        manufacturer: newManufacturer,
        type: newType,
        size: newSize,
        area: newArea,
        dueDate: newDueDate,
        calibrateBeforeUse: newCalibrateBeforeUse,
      };
      setGages([...gages, newGage]); // Add the new gage to the state
    }
  };

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
          <button className="action-btn edit" onClick={() => handleEdit(params.row.id)}>✏️ Edit</button>
          <button className="action-btn delete" onClick={() => handleDelete(params.row.id)}>🗑️ Delete</button>
        </>
      ),
    },
  ];

  return (
    <div className="calibration-due-container">
      <h1>Calibration Management</h1>
      <p className="module-description">
      </p>
      <button className="add-btn" onClick={handleAdd}>➕ Add New Gage</button>
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
        <h3></h3>
        <p></p>
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
};

export default CalibrationDue;