import React, { useState } from "react";
import logo from "../../logo.png";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Rightbar from "./Rightbar";

function Dashboard() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <div className="fixed md:hidden h-full z-10 ">
        {showSideBar && <Sidebar setShowSideBar={setShowSideBar} />}
      </div>
      <div
        className="block md:hidden w-full mx-2 p-2"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="grid grid-cols-10 gap-5 mx-auto p-5">
        <div className="md:block col-span-2 rounded-xl hidden">
          <Sidebar />
        </div>

        <div className="md:col-span-8 col-span-10 grid grid-cols-8 gap-5">
          <div className="xl:col-span-6 col-span-10 bg-slate-100 h-screen rounded-xl">
            <Chat />
          </div>
          <div className="xl:col-span-2 md:col-span-8 col-span-10 rounded-xl h-max">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
