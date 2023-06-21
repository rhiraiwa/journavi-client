import React from 'react';
import Header from '../../organisms/Header';
import Calendar from '../../organisms/Calendar';
import FlexDiv from '../../atoms/FlexDiv';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import PlanFooter from '../../organisms/PlanFooter';

const TermSelect = () => {

  const navigate = useNavigate();

  const goToPlan = () => {
    navigate('/Plan');
  }

  const goToMemberSelect = () => {
    navigate('/MemberSelect');
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='term-select'>
        <div className='plan-discription'>
          <label>期間を選択してください</label>
        </div>
        <Calendar/>
      </div>
      <PlanFooter handleBack={goToPlan} handleNext={goToMemberSelect}/>
    </>
  )
};

export default TermSelect;
