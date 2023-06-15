import React, { useState } from 'react';
import './index.scss';
import FlexDiv from '../../atoms/FlexDiv';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const previousMonths = () => {
    setStartDate(prevStartDate => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setMonth(newStartDate.getMonth() - 1);
      return newStartDate;
    });
  };

  const nextMonths = () => {
    setStartDate(prevStartDate => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setMonth(newStartDate.getMonth() + 1);
      return newStartDate;
    });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateClick = (day, year, month) => {
    const selectedDate = new Date(year, month, day);
    if (selectedStartDate && selectedEndDate) {
      setSelectedStartDate(selectedDate);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      if (selectedDate < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(selectedDate);
      } else {
        setSelectedEndDate(selectedDate);
      }
    } else {
      setSelectedStartDate(selectedDate);
    }
  };

  const isDateSelected = (day, year, month) => {
    if (selectedStartDate && selectedEndDate) {
      const startDate = new Date(selectedStartDate);
      const endDate = new Date(selectedEndDate);
      const currentDate = new Date(year, month, day);
      return currentDate >= startDate && currentDate <= endDate;
    }
    return false;
  };

  const renderCalendar = () => {
    const calendars = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < 2; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = getDaysInMonth(year, month);
      const firstDayOfWeek = new Date(year, month, 1).getDay();

      const calendarDays = [];

      // Add empty cells for previous month
      for (let j = 0; j < firstDayOfWeek; j++) {
        calendarDays.push(<div key={`empty-${j}`} className="calendar-day empty"></div>);
      }

      // Add days for current month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayOfWeek = new Date(year, month, day).getDay();
        const classNames = dayOfWeek === 0 ? 'calendar-day sunday' : (dayOfWeek === 6 ? 'calendar-day saturday' : 'calendar-day');
        const isSelected = isDateSelected(day, year, month);
        const selectedClass = isSelected ? 'selected' : '';
        calendarDays.push(
          <div
            key={day}
            className={`${classNames} ${selectedClass}`}
            onClick={() => handleDateClick(day, year, month)}
          >
            {day}
          </div>
        );
      }

      calendars.push(
        <div key={`${year}-${month}`} className="calendar-month">
          <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <div className="calendar-days">
            <div className="calendar-day">Sun</div>
            <div className="calendar-day">Mon</div>
            <div className="calendar-day">Tue</div>
            <div className="calendar-day">Wed</div>
            <div className="calendar-day">Thu</div>
            <div className="calendar-day">Fri</div>
            <div className="calendar-day">Sat</div>
          </div>
          <div className="calendar-dates">{calendarDays}</div>
        </div>
      );

      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return calendars;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={previousMonths}>Previous</button>
        <h2>{`${startDate.toLocaleString('default', { month: 'long', year: 'numeric' })} - ${new Date(startDate.getFullYear(), startDate.getMonth() + 1).toLocaleString('default', { month: 'long', year: 'numeric' })}`}</h2>
        <button onClick={nextMonths}>Next</button>
      </div>
      <FlexDiv additionalClassName='calendar-inputs'>
        <input type="text" placeholder="Start Date" value={selectedStartDate ? selectedStartDate.toLocaleDateString('ja-JP') : ''} readOnly />
        ～
        <input type="text" placeholder="End Date" value={selectedEndDate ? selectedEndDate.toLocaleDateString('ja-JP') : ''} readOnly />
      </FlexDiv>
      <div className="calendar-body">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
