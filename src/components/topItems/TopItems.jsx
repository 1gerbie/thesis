import React from 'react';
import './topItems.scss';

const TopItems = ({ data = [] }) => {
    if (data.length === 0) {
        return (
            <div className="topItems">
                <h2>Top Items</h2>
                <p>No items available.</p>
            </div>
        );
    }

    return (
        <div className="topItems">
            <h2>Top Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Quantity</th>
                        <th>Alert Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.orderId}>
                            <td>{item.orderId}</td>
                            <td>{item.quantity}</td>
                            <td>{item.alertAmt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopItems;
