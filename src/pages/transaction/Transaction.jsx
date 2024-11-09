import React, { useState } from 'react';
import './transaction.scss';
import Add from '../../components/add/Add';

const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openNewTransaction, setOpenNewTransaction] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  // Mock data for transactions
  const [transactions, setTransactions] = useState([
    { id: 'TRX001', equipmentName: 'Microscope', transactionType: 'Deployment', date: '2024-01-15', quantity: 1, assignedTo: 'Chemistry Lab A', returnDate: '2024-01-22', status: 'In Use' },
    { id: 'TRX002', equipmentName: 'Beaker Set', transactionType: 'Return', date: '2024-01-16', quantity: 2, assignedTo: 'Biology Lab B', returnDate: '2024-01-16', status: 'Returned' },
    { id: 'TRX003', equipmentName: 'Spectrophotometer', transactionType: 'Maintenance', date: '2024-01-17', quantity: 1, assignedTo: 'Tech Department', returnDate: '2024-01-24', status: 'In Service' },
    { id: 'TRX004', equipmentName: 'pH Meter', transactionType: 'Calibration', date: '2024-01-18', quantity: 1, assignedTo: 'Calibration Lab', returnDate: '2024-01-19', status: 'Calibrating' },
  ]);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(transactions.length / 5);
    setCurrentPage(prev => Math.min(prev + 1, maxPage));
  };

  const handleNewTransaction = () => {
    setOpenNewTransaction(true);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => [...prev, { ...newTransaction, id: `TRX${(prev.length + 1).toString().padStart(3, '0')}` }]);
    setOpenNewTransaction(false);
  };

  // Delete functionality
  const handleDeleteClick = (transaction) => {
    setTransactionToDelete(transaction);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setTransactions(prev => prev.filter(t => t.id !== transactionToDelete.id));
    setShowDeleteConfirmation(false);
    setTransactionToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setTransactionToDelete(null);
  };

  return (
    <div className="transactions">
      <h2 className="transactions-title">Equipment Transactions</h2>

      {/* Transaction Summary Cards */}
      <div className="transaction-summary">
        {/* ... (existing summary cards) ... */}
      </div>

      {/* Transaction Filters */}
      <div className="transaction-filters">
        {/* ... (existing filters) ... */}
        <button className="add-transaction" onClick={handleNewTransaction}>New Transaction</button>
      </div>

      {/* Transactions Table */}
      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Equipment Name</th>
              <th>Transaction Type</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Assigned To</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.equipmentName}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.date}</td>
                <td>{transaction.quantity}</td>
                <td>{transaction.assignedTo}</td>
                <td>{transaction.returnDate}</td>
                <td>
                  <span className={`status ${transaction.status.toLowerCase().replace(' ', '-')}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteClick(transaction)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrevious}>&lt; Previous</button>
        <span>Page {currentPage} of {Math.ceil(transactions.length / 5)}</span>
        <button onClick={handleNext}>Next &gt;</button>
      </div>

      {/* New Transaction Modal */}
      {openNewTransaction && (
        <Add
          slug="transactions"
          columns={[
            { field: 'equipmentName', headerName: 'Equipment Name', type: 'text' },
            { field: 'transactionType', headerName: 'Transaction Type', type: 'select', options: ['Deployment', 'Return', 'Maintenance', 'Calibration'] },
            { field: 'date', headerName: 'Date', type: 'date' },
            { field: 'quantity', headerName: 'Quantity', type: 'number' },
            { field: 'assignedTo', headerName: 'Assigned To', type: 'text' },
            { field: 'returnDate', headerName: 'Return Date', type: 'date' },
            { field: 'status', headerName: 'Status', type: 'select', options: ['In Use', 'Returned', 'In Service', 'Calibrating'] },
          ]}
          setOpen={setOpenNewTransaction}
          onAdd={handleAddTransaction}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="delete-modal">
          <div className="delete-modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete transaction {transactionToDelete?.id}?</p>
            <div className="delete-modal-actions">
              <button onClick={handleConfirmDelete} className="confirm-delete">
                Yes, Delete
              </button>
              <button onClick={handleCancelDelete} className="cancel-delete">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;