<<<<<<< HEAD
// src/components/common/Layout.jsx

import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AdminSidebar from "../dashboard/AdminSidebar";
import FamilySidebar from "../dashboard/FamilySidebar";
import SeniorSidebar from "../dashboard/SeniorSidebar";

const Layout = () => {
  const location = useLocation();

  const getSidebar = () => {
    if (location.pathname.startsWith("/adashboard")) {
      return <AdminSidebar />;
    }

    if (location.pathname.startsWith("/fdashboard")) {
      return <FamilySidebar />;
    }

    if (location.pathname.startsWith("/sdashboard")) {
      return <SeniorSidebar />;
    }

    return null;
  };

  const getTitle = () => {
    if (location.pathname.startsWith("/adashboard")) {
      return "Admin Dashboard";
    }

    if (location.pathname.startsWith("/fdashboard")) {
      return "Family Dashboard";
    }

    if (location.pathname.startsWith("/sdashboard")) {
      return "Senior Citizen Dashboard";
    }

    return "CareConnect";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Dynamic Sidebar */}
      {getSidebar()}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-700">
            {getTitle()}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              U
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
=======

// import React, { useState } from "react";
// //import { Outlet } from "react-router-dom";

// import { Outlet, useLocation } from "react-router-dom";
// import FamilySidebar from "../familymember/FamilySidebar";

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-slate-50">
      
//       {/* Desktop Sidebar */}
//       <div className="hidden md:block">
//         <FamilySidebar />
//       </div>

//       {/* Mobile Sidebar */}
//       {sidebarOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/50 z-40"
//             onClick={() => setSidebarOpen(false)}
//           />

//           <div className="fixed left-0 top-0 z-50">
//             <FamilySidebar />
//           </div>
//         </>
//       )}

//       {/* Main Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">

//         {/* Header */}
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden text-2xl"
//           >
//             ☰
//           </button>

//           <div>
//             <h1 className="font-semibold text-slate-800">
//               Family Caregiver Dashboard
//             </h1>

//             <p className="hidden md:block text-sm text-slate-500">
//               Monitor and support your loved ones
//             </p>
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
//               🟢 Active
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto p-4 md:p-8">
//           <Outlet />
//         </main>

//       </div>
//     </div>
//   );
// };

// export default Layout;



import React, { useState } from "react";

// OLD IMPORT
// import { Outlet } from "react-router-dom";

// NEW IMPORT
import { Outlet, useLocation } from "react-router-dom";

import FamilySidebar from "../familymember/FamilySidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // NEW CODE
  const location = useLocation();

  const isSeniorDashboard =
    location.pathname.includes("/sdashboard");

  return (
    <div className="flex h-screen bg-slate-50">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <FamilySidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="fixed left-0 top-0 z-50">
            <FamilySidebar />
          </div>
        </>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <div>

            {/* OLD HEADER */}
            {/*
            <h1 className="font-semibold text-slate-800">
              Family Caregiver Dashboard
            </h1>

            <p className="hidden md:block text-sm text-slate-500">
              Monitor and support your loved ones
            </p>
            */}

            {/* NEW DYNAMIC HEADER */}
            <h1 className="font-semibold text-slate-800">
              {isSeniorDashboard
                ? "Senior Citizen Dashboard"
                : "Family Caregiver Dashboard"}
            </h1>

            <p className="hidden md:block text-sm text-slate-500">
              {isSeniorDashboard
                ? "Stay safe, healthy and connected"
                : "Monitor and support your loved ones"}
            </p>

          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              🟢 Active
            </div>
          </div>

        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
>>>>>>> 14588104948233b8a4a23d2231641e27f47f8a8f
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;
