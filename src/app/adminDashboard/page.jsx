import Link from 'next/link'
import React from 'react'


function AdminDashboard() {
  return (
    <div className="flex flex-col border w-40 gap-3 bg-gray-700 text-white h-100">
    <div>
      <h2 className="text-xl font-semibold mb-3">Admin Panel</h2>
      <p className="hover:underline underline-offset-3 cursor-pointer"><Link href="/add">Add a Product</Link></p>
      <p className="hover:underline underline-offset-3 cursor-pointer"><Link  href='/update'>Update a Product</Link></p>
      <p className="hover:underline underline-offset-3 cursor-pointer">Delete a Product</p>
      <p className="hover:underline underline-offset-3 cursor-pointer"><Link href="/adminLogin">Login</Link></p>
      
    </div>
  </div>
  )
}

export default AdminDashboard