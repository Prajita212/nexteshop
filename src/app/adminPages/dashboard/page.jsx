import React from "react";
import { Link } from "react-router";
import { RxStar } from "react-icons/rx";
import { MdOutlineWidgets } from "react-icons/md";

import { IoPieChartSharp } from "react-icons/io5";
function Dashboard() {
  return (
    <div className="flex flex-col border w-40 gap-3 bg-gray-700 text-white h-100">
      <div>
        <h2 className="text-xl font-semibold mb-3">Admin Panel</h2>
        <p className="hover:underline underline-offset-3 cursor-pointer"><Link to="/add">Add a Product</Link></p>
        <p className="hover:underline underline-offset-3 cursor-pointer"><Link to='/update'>Update a Product</Link></p>
        <p className="hover:underline underline-offset-3 cursor-pointer">Delete a Product</p>
        <p className="hover:underline underline-offset-3 cursor-pointer"><Link to="/admin-login">Login</Link></p>
        
      </div>
    </div>
  );
}

export default Dashboard;