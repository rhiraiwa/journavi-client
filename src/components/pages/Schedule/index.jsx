import React, { useEffect, useState } from "react";
import './index.scss';
import FlexDiv from "../../atoms/FlexDiv";
import Header from "../../organisms/Header";
import { useLocation } from "react-router-dom";

const Schedule = () => {

  const location = useLocation();

  const [state] = useState(location.state);

  const [scheduleList, setScheduleList] = useState([]);
  const [scheduleId, setScheduleId] = useState(-1);
  const [daycount, setDayCount] = useState();
  const [dayList, setDayList] = useState([]);
  const [daySelect, setDaySelect] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduleName, setScheduleName] = useState('');
  const [schedulePlace, setSchedulePlace] = useState('');
  const [scheduleNote, setScheduleNote] = useState('');
  const [selectedRows, setSelectedRows] = useState([]); // 選択された行のインデックスの配列
  const [editMode, setEditMode] = useState(false); // 編集モードのフラグ
  const [editIndex, setEditIndex] = useState(-1); // 編集中の行のインデックス

  useEffect(() => {
    let startTime = state.plan.startDate.getTime();
    let endTime = state.plan.endDate.getTime();

    let timeDiff = endTime - startTime;
    let dayDiff = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

    setDayCount(Number(dayDiff + 1));

    let newList = [];
    for (let i = 0; i < Number(dayDiff + 1); i++) {
      newList.push({
        label: `Day ${i + 1}`,
        value: i
      });
    }
    setDaySelect(newList[0].value);
    setDayList(newList);
  }, []);

  const uniqueId = () => {
    const newId = scheduleId + 1;
    setScheduleId(newId);
    return newId;
  };

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
    const updatedList = scheduleList.filter((schedule, i) => i !== index);
    setScheduleList(updatedList);
    setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
  }

  const handleRowClick = (index) => {
    if (editMode && index === editIndex) return;

    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);

    const { time, name, place, note } = scheduleList[index];
    setScheduleTime(time);
    setScheduleName(name);
    setSchedulePlace(place);
    setScheduleNote(note);

    document.getElementById('schedule-time').focus();
  };

  const executeEdit = () => {
    const updatedScheduleList = [...scheduleList];
    updatedScheduleList[editIndex] = {
      ...updatedScheduleList[editIndex],
      time: scheduleTime,
      name: scheduleName,
      place: schedulePlace,
      note: scheduleNote
    };

    setScheduleList(sortSchedule(updatedScheduleList));
    setEditMode(false);
    setEditIndex(-1);
    clearInput();
  };

  const cancelEdit = () => {
    setEditMode(false);
    setEditIndex(-1);
    clearInput();
  };

  const executeRegister = () => {
    let plan = {
      title: state.plan.title,
      destination: state.plan.destination,
      startDate: state.plan.startDate,
      endDate: state.plan.endDate,
      member: state.plan.member,
      schedule: scheduleList
    }
    console.log(plan);
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='schedule'>
        <div style={{display:"none"}}>
          <input
            type='number'
            value={daycount}
            placeholder='期間（日）'
          />
        </div>
        {(dayList.length !== 0 && daycount !== '') && (
          <>
            <div>
              <select value={daySelect} onChange={handleDaySelect}>
                {dayList.map((day, index) => (
                  <option key={index} value={day.value}>{day.label}</option>
                ))}
              </select>
            </div>
            <div>
              <input
                type='time'
                id='schedule-time'
                value={scheduleTime}
                onChange={handleScheduleTime}
                placeholder='時刻'
              />
              <input
                type='text'
                value={scheduleName}
                onChange={handleScheduleName}
                placeholder='イベント名'
              />
              <input
                type='text'
                value={schedulePlace}
                onChange={handleSchedulePlace}
                placeholder='場所'
              />
              <input
                type='text'
                value={scheduleNote}
                onChange={handleScheduleNote}
                placeholder='備考'
              />
              {!editMode && (
                <div className='handle-row-buttons'>
                  <button onClick={addSchedule}>Add Schedule</button>
                </div>
              )}
              {editMode && (
                <FlexDiv additionalClassName='flex-buttons handle-row-buttons'>
                  <button onClick={executeEdit}>Update Schedule</button>
                  <button onClick={cancelEdit}>Cancel Edit</button>
                </FlexDiv>
              )}
            </div>
            <h2>{`${Number(daySelect) + 1} 日目`}</h2>
            <table>
              <thead>
                <tr>
                  <th>time</th>
                  <th>event</th>
                </tr>
              </thead>
              <tbody>
                {scheduleList.map((schedule, index) => (
                  schedule.daySelect === Number(daySelect) && (
                    <React.Fragment key={index}>
                      <tr
                        className={`main-info-row ${selectedRows.includes(index) ? 'selected' : ''}`}
                        onClick={() => handleRowClick(index)}
                      >
                        <td>{schedule.time}</td>
                        <td>{schedule.name}</td>
                      </tr>
                      {selectedRows.includes(index) && (
                        <tr className='sub-info-row'>
                          <td colSpan='2'>
                            <div>
                              <span>場所: {schedule.place}</span><br/>
                              <span>備考: {schedule.note}</span><br/>
                              {!editMode && (
                                <FlexDiv additionalClassName='flex-buttons'>
                                  <button onClick={() => handleEdit(index)}>Edit</button>
                                  <button onClick={() => deleteSchedule(index)}>Del</button>
                                </FlexDiv>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  )
                ))}
              </tbody>
            </table>
          </>
        )}
        <div>
          <button onClick={executeRegister}>Register</button>
        </div>
      </div>
    </>
  );
};

export default Schedule;
