import React from 'react';
import './stockAlert.scss';

const StockAlert = ({ data = [] }) => {
    if (data.length === 0) {
        return (
            <div className="stockAlert">
                <h2>Stock Alert</h2>
                <p>No stock alerts available.</p>
            </div>
        );
    }

    return (
        <div className="stockAlert">
            <h2>Stock Alert</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Alert Amount</th>
                        <th>Status</th>
                    </tr>   
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.orderId}>
                            <td>{item.orderId}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td>
                            <td>{item.alertAmt}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockAlert;
