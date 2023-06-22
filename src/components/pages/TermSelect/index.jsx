import React, { useState } from 'react';
import Header from '../../organisms/Header';
import Calendar from '../../organisms/Calendar';
import FlexDiv from '../../atoms/FlexDiv';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
import PlanFooter from '../../organisms/PlanFooter';

const TermSelect = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [state] = useState(location.state);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const goToPlan = () => {
    navigate('/Plan');
  }

  const goToMemberSelect = () => {
    let plan = {
      title: state.plan.title,
      destination: state.plan.destination,
      startDate: startDate,
      endDate: endDate
    }
    console.log(plan);
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
