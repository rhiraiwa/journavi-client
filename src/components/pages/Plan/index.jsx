import React, { useState } from 'react';
import Header from '../../organisms/Header';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import PlanFooter from '../../organisms/PlanFooter';

const Plan = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');

  const handleTitle = (event) => {
    let value = event.target.value;
    setTitle(value);
  }

  const handleDestination = (event) => {
    let value = event.target.value;
    setDestination(value);
  }

  const goToPortal = () => {
    navigate('/Portal');
  }

  const goToTermSelect = () => {
    if (title === '' || destination === '') {
      alert('タイトルと目的地は入力必須です');
      return;
    }

    let plan = {
      title: title,
      destination: destination
    }
    navigate('/TermSelect', {state: {plan: plan}});
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='plan'>
        <div className='plan-discription'>
          <label>旅行のタイトルと目的地を選択してください</label>
        </div>
        <div>
          <input type='text' value={title} onChange={handleTitle} placeholder='タイトル'/>
          <input type='text' value={destination} onChange={handleDestination} placeholder='目的地'/>
        </div>
      </div>
      <PlanFooter handleBack={goToPortal} handleNext={goToTermSelect}/>
    </>
  )
};

export default Plan;
