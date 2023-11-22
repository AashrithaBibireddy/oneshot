import React,{useState} from 'react';
import Sidebar from './Sidebar';

const Calendar = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  const daysInMonth = new Date(
    new Date().getFullYear(),
    months.indexOf(selectedMonth) + 1,
    0
  ).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    
    <div>
        <div className='flex flex-row'>
            <h1 className="text-6xl font-bold my-6 mx-4">Book Your Slot</h1>
            <Sidebar></Sidebar>
        </div>
        <select
        className="px-5 py-2 border border-gray-300 rounded bg-white text-black mx-4"
        onChange={e => setSelectedMonth(e.target.value)}
        value={selectedMonth}
        >
        {months.map(month => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
        </select>
        <div className="grid grid-cols-7 gap-3 mt-16 mx-4">
            <span className="text-center text-2xl font-bold">Sun</span>
            <span className="text-center text-2xl font-bold">Mon</span>
            <span className="text-center text-2xl font-bold">Tue</span>
            <span className="text-center text-2xl font-bold">Wed</span>
            <span className="text-center text-2xl font-bold">Thu</span>
            <span className="text-center text-2xl font-bold">Fri</span>
            <span className="text-center text-2xl font-bold">Sat</span>
            {daysArray.map(day => (
                <button
                key={day}
                className="btn text-teal-100 py-8 btn-outline border rounded hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300">
                <div className="flex items-center">
                <span className="ml-0.5">{day}</span>
                </div>
            </button>
            ))}
      </div>
    </div>
  );
};

export default Calendar;
