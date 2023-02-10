import React from "react";
import DashboardCard01 from "./DashboardUtils/DashboardCard01";
// import DashboardCard02 from "./DashboardUtils/DashboardCard02";
// import DashboardCard03 from "./DashboardUtils/DashboardCard03";
// import DashboardCard04 from "./DashboardUtils/DashboardCard04";
// import DashboardCard05 from "./DashboardUtils/DashboardCard05";
// import DashboardCard06 from "./DashboardUtils/DashboardCard06";
// import DashboardCard07 from "./DashboardUtils/DashboardCard07";
// import DashboardCard08 from "./DashboardUtils/DashboardCard08";
// import DashboardCard09 from "./DashboardUtils/DashboardCard09";
// import DashboardCard10 from "./DashboardUtils/DashboardCard10";
// import DashboardCard11 from "./DashboardUtils/DashboardCard11";
// import DashboardCard12 from "./DashboardUtils/DashboardCard12";
// import DashboardCard13 from "./DashboardUtils/DashboardCard13";

const Dashboard = () => {
  return (
    <div className="text-4xl pt-24 text-slate-800">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Acme Plus) */}
          <DashboardCard01 />
          {/* Line chart (Acme Advanced) */}
          {/* <DashboardCard02 /> */}
          {/* Line chart (Acme Professional) */}
          {/* <DashboardCard03 /> */}
          {/* Bar chart (Direct vs Indirect) */}
          {/* <DashboardCard04 /> */}
          {/* Line chart (Real Time Value) */}
          {/* <DashboardCard05 /> */}
          {/* Doughnut chart (Top Countries) */}
          {/* <DashboardCard06 /> */}
          {/* Table (Top Channels) */}
          {/* <DashboardCard07 /> */}
          {/* Line chart (Sales Over Time) */}
          {/* <DashboardCard08 /> */}
          {/* Stacked bar chart (Sales VS Refunds) */}
          {/* <DashboardCard09 /> */}
          {/* Card (Customers) */}
          {/* <DashboardCard10 /> */}
          {/* Card (Reasons for Refunds) */}
          {/* <DashboardCard11 /> */}
          {/* Card (Recent Activity) */}
          {/* <DashboardCard12 /> */}
          {/* Card (Income/Expenses) */}
          {/* <DashboardCard13 /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
