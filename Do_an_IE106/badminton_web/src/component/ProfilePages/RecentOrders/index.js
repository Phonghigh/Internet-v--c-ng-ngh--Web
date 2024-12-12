import React from "react";
import "./style.scss";

const RecentOrders = () => {
    const orders = [
    { id: "87563778", status: "ĐÃ GIAO", date: "5/122024", total: "100.000 đ" },
    { id: "87563777", status: "ĐÃ GIAO", date: "3/12/2024", total: "200.000 đ" },
    { id: "87563776", status: "ĐÃ GIAO", date: "2/12/2024", total: "3.000.000 đ" },
    ];

    return (
    <div className="recent-orders">
        <h2>Lịch sử đơn hàng</h2>
        <table>
        <thead>
            <tr>
            <th>Mã đơn</th>
            <th>Trạng thái</th>
            <th>Ngày</th>
            <th>Tổng tiền</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order) => (
            <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
};

export default RecentOrders;
