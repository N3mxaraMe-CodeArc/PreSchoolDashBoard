import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function MyApp() {
  const [value, onChange] = useState(new Date());

  // Function to determine the class name for each date tile
  const tileClassName = ({ date }) => {
    // Check if the date is equal to the selected date
    if (date.toDateString() === value.toDateString()) {
      return 'selected-date';
    }
    return null;
  };

  return (
    <div>
      <Calendar className="calendar" onChange={onChange} value={value} tileClassName={tileClassName} />
    </div>
  );
}

export default MyApp;
