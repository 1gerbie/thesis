import './reports.scss'

const Reports = () => {
  return (
    <div className="reports">
      <h2 className="report-status">Report Status</h2>
      <div className="bottom-boxes">
        <div className="bottom-box box">
          <h3>Box 1</h3>
          <p>This is the content of box 1.</p>
        </div>
        <div className="bottom-box box">
          <h3>Box 2</h3>
          <p>This is the content of box 2.</p>
        </div>
        <div className="bottom-box box">
          <h3>Box 3</h3>
          <p>This is the content of box 3.</p>
        </div>
      </div>
      <div className="data-table">
        <table>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
          </tr>
          <tr>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Reports;