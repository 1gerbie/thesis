import './reports.scss'
import { barChartBoxRevenue } from '../../data';
import BarChartBox from '../../components/barChartBox/BarChartBox';

const Reports = () => {
  return (
    <div className="reports">
      <h2 className="report-status">Report Status</h2>
      
      {/* Status Summary Boxes */}
      <div className="bottom-boxes">
        <div className="bottom-box">
          <h3>Total Transactions</h3>
          <p className="count">150</p>
          <p className="description">Total number of equipment transactions</p>
        </div>
        <div className="bottom-box">
          <h3>Equipment Status</h3>
          <p className="count">45</p>
          <p className="description">Currently active equipment</p>
        </div>
        <div className="bottom-box">
          <h3>Maintenance Due</h3>
          <p className="count">12</p>
          <p className="description">Equipment requiring maintenance</p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R001</td>
              <td>2024-01-15</td>
              <td>Maintenance</td>
              <td>Monthly Equipment Check</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>R002</td>
              <td>2024-01-20</td>
              <td>Calibration</td>
              <td>Precision Tools Calibration</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>R003</td>
              <td>2024-01-25</td>
              <td>Inventory</td>
              <td>Stock Level Assessment</td>
              <td>In Progress</td>
            </tr>
            <tr>
              <td>R004</td>
              <td>2024-01-30</td>
              <td>Usage</td>
              <td>Equipment Usage Analysis</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="chart-section">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  )
}

export default Reports;