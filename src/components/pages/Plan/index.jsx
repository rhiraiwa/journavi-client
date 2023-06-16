import React from 'react';
import Calendar from '../../organisms/Calendar';
import FlexDiv from '../../atoms/FlexDiv';
import { useNavigate } from 'react-router-dom';

const Plan = () => {

  const navigate = useNavigate();

  const goToMemberSelect = () => {
    navigate('/MemberSelect');
  }

  return (
    <div id='plan'>
      <FlexDiv>
        <label>期間を入力してください</label>
        <button onClick={goToMemberSelect}>次へ</button>
        <button>下書き保存</button>
      </FlexDiv>
      <Calendar/>
    </div>
  )
};

export default Plan;
