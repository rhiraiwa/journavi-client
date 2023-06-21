import React from 'react';
import Header from '../../organisms/Header';
import FlexDiv from '../../atoms/FlexDiv';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import PlanFooter from '../../organisms/PlanFooter';

const Plan = () => {

  const navigate = useNavigate();

  const goToPortal = () => {
    navigate('/Portal');
  }

  const goToTermSelect = () => {
    navigate('/TermSelect');
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='plan'>
        <div className='plan-discription'>
          <label>旅行のタイトルと目的地を選択してください</label>
        </div>
        <div>
          <input type='text' placeholder='タイトル'/>
          <input type='text' placeholder='目的地'/>
        </div>
      </div>
      <PlanFooter handleBack={goToPortal} handleNext={goToTermSelect}/>
    </>
  )
};

export default Plan;
