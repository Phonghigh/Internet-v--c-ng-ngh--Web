import React, { useState } from "react";
import Sidebar from "../Sidebar";
import AccountInfo from "../AccountInfo";
import PaymentOptions from "../Paymentoptions";
import RecentOrders from "../RecentOrders";
import Setting from "../Setting"; // Component Setting mới
import "./style.scss";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const renderContent = () => {
    switch (selectedTab) {
      case "dashboard":
        return (
          <>
            <h1>Xin Chào, Phong Long Nhong</h1>
            <p>
              Chào mừng bạn đến với trang tổng quan, nơi bạn có thể dễ dàng kiểm tra và theo dõi
              đặt hàng, quản lý tài khoản của bạn và khám phá các ưu đãi mới.
            </p>
            <AccountInfo />
            <PaymentOptions />
            <RecentOrders />
          </>
        );
      case "setting":
        return <Setting />;
      case "logout":
        return <h1>Bạn đã đăng xuất!</h1>; // Hoặc xử lý logic đăng xuất
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="dashboard-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
