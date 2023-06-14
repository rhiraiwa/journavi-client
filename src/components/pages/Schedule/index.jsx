import { useState } from "react";
import './index.scss';

const Schedule = () => {

  const [scheduleList, setScheduleList] = useState([]);
  const [scheduleId, setScheduleId] = useState(-1);
  const [daycount, setDayCount] = useState('');
  const [dayList, setDayList] = useState([]);
  const [daySelect, setDaySelect] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduleName, setScheduleName] = useState('');
  const [schedulePlace, setSchedulePlace] = useState('');
  const [scheduleNote, setScheduleNote] = useState('');
  
  const uniqueId = () => {
    const newId = scheduleId + 1;
    setScheduleId(newId);
    return newId;
  };

  const handleDayCount = (event) => {
    let value = event.target.value;
    if (value === '' || value <= 0) {
      setDayCount('');
      return;
    }
    setDayCount(value);

    let newList = [];
    for (let i = 0; i < Number(value); i++) {
      newList.push(
        {
          label: `Day ${i + 1}`,
          value: i
        }
      )
    }
    setDaySelect(newList[0].value);
    setDayList(newList);
  }

  const handleDaySelect = (event) => {
    setDaySelect(event.target.value);
  }

  const handleScheduleTime = (event) => {
    setScheduleTime(event.target.value);
  }

  const handleScheduleName = (event) => {
    setScheduleName(event.target.value);
  }

  const handleSchedulePlace = (event) => {
    setSchedulePlace(event.target.value);
  }

  const handleScheduleNote = (event) => {
    setScheduleNote(event.target.value);
  }

  const addSchedule = () => {
    console.log(daySelect);
    const newSchedule = {
      id: uniqueId(),
      daySelect: Number(daySelect),
      time: scheduleTime,
      name: scheduleName,
      place: schedulePlace,
      note: scheduleNote
    };

    setScheduleList(sortSchedule([...scheduleList, newSchedule]));
    clearInput();
  }
  
  const sortSchedule = (schedule) => {
    const sortedSchedule = [...schedule].sort((a, b) => {
      const [hourA, minuteA] = a.time.split(':').map(Number);
      const [hourB, minuteB] = b.time.split(':').map(Number);
  
      if (hourA !== hourB) {
        return hourA - hourB;
      }
  
      return minuteA - minuteB;
    });
  
    return sortedSchedule;
  };

  const clearInput = () => {
    setScheduleTime('');
    setScheduleName('');
    setSchedulePlace('');
    setScheduleNote('');
    document.getElementById('schedule-time').focus();
  }

  const deleteSchedule = (index) => {
    const updatedData = scheduleList.filter((_, idx) => idx !== index);
    setScheduleList(updatedData);
  }

  const executeRegister = () => {
    console.log(scheduleList);
  }

  return (
    <div id='schedule'>
      <div>
        <input type='number'
               value={daycount}
               onChange={handleDayCount}
               placeholder='期間（日）'
               />
      </div>
      {
        (dayList.length !== 0 && daycount !== '') && (
          <>
            <div>
              <select value={daySelect} onChange={handleDaySelect}>
                {
                  dayList.map((day, index) => (
                    <option key={index} value={day.value}>{day.label}</option>
                  )) 
                }
              </select>
            </div>
            <div>
              <input type='time'
                     id='schedule-time'
                     value={scheduleTime}
                     onChange={handleScheduleTime}
                     placeholder='時刻'/>
              <input type='text'
                     value={scheduleName}
                     onChange={handleScheduleName}
                     placeholder='イベント名'/>
              <input type='text'
                     value={schedulePlace}
                     onChange={handleSchedulePlace}
                     placeholder='場所'/>
              <input type='text'
                     value={scheduleNote}
                     onChange={handleScheduleNote}
                     placeholder='備考'/>
              <button onClick={addSchedule}>Add Schedule</button>
            </div>
            <h2>{`${Number(daySelect) + 1} 日目`}</h2>
            <table>
              <thead>
                <tr>
                  <th>time</th>
                  <th>event</th>
                  <th>place</th>
                  <th>note</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  scheduleList.map((schedule, index) => 
                    schedule.daySelect === Number(daySelect) &&
                      (
                        <tr key={index}>
                          <td>{schedule.time}</td>
                          <td>{schedule.name}</td>
                          <td>{schedule.place}</td>
                          <td>{schedule.note}</td>
                          <td>
                            <button onClick={() => deleteSchedule(index)}>X</button>
                          </td>
                        </tr>
                      )
                  )
                }
              </tbody>
            </table>
            <button onClick={executeRegister}>Register</button>
          </>
        )
      }
    </div>
  );
}

export default Schedule;