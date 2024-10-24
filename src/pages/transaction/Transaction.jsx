import './transaction.scss'

const Transaction = () => {
  return (
    <div className="transactions">
      <h2 className="transactions-title">Equipment Transactions</h2>
      <div className="transactions-table">
        <table>
          <tr>
            <th>Transacti0on ID</th>
            <th>Equipment Name</th>
            <th>Transaction Type</th>
            <th>Date</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>TRX001</td>
            <td>Microscope</td>
            <td>Issue</td>
            <td>2024-09-15</td>
            <td>1</td>
          </tr>
          <tr>
            <td>TRX002</td>
            <td>Beaker</td>
            <td>Return</td>
            <td>2024-09-16</td>
            <td>2</td>
          </tr>
          <tr>
            <td>TRX003</td>
            <td>Gloves</td>
            <td>Issue</td>
            <td>2024-09-17</td>
            <td>3</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Transaction;