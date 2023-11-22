import React from 'react'

function Sidebar() {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
  const menu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

  
  return (
    <div className="drawer my-6 mx-4 flex flex-row-reverse">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer" className="drawer-button btn text-teal-100  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300">{menu}MENU</label> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-2xl font-bold">
            {/* Sidebar content here */}
                <li className='pt-6 pb-4'>
                <button
                className="btn text-teal-100 py-8 border rounded hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300">
                <div className="flex items-center">
                <span className="ml-0.5">Home</span>
                </div>
            </button>
                </li>
                <li><button
                className="btn text-teal-100 py-8 border rounded hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300">
                <div className="flex items-center">
                <span className="ml-0.5">My Bookings</span>
                </div>
            </button></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar