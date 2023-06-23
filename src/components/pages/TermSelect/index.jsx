import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../organisms/Header';
import Calendar from '../../organisms/Calendar';
import PlanFooter from '../../organisms/PlanFooter';
import './index.scss';

const TermSelect = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [state] = useState(location.state);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const goToPlan = () => {

    let plan = {
      title: state.plan.title,
      destination: state.plan.destination,
      startDate: startDate,
      endDate: endDate
    }

    navigate('/Plan', {state: {plan: plan}});
  }

  const goToMemberSelect = () => {
    if (startDate === '' || endDate === '' ) {
      alert('期間が設定されていません');
      return;
    }

    let plan = {
      title: state.plan.title,
      destination: state.plan.destination,
      startDate: startDate,
      endDate: endDate
    }
    
    navigate('/MemberSelect', {state: {plan: plan}});
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='term-select'>
        <div className='plan-discription'>
          <label>期間を選択してください</label>
        </div>
        <Calendar selectedStartDate={startDate} setSelectedStartDate={setStartDate} selectedEndDate={endDate} setSelectedEndDate={setEndDate}/>
      </div>
      <PlanFooter handleBack={goToPlan} handleNext={goToMemberSelect}/>
    </>
  )
};

export default TermSelect;
