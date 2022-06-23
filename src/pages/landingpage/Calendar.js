import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './Footer.module.css';
import './myCalendar.css';

const CalendarFooter = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} className={styles.react_calendar} />
    </div>
  );
};

export default CalendarFooter;
