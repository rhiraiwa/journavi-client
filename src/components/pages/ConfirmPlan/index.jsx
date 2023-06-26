import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../organisms/Header";
import Schedule from "../Schedule";
import './index.scss';
import FlexDiv from "../../atoms/FlexDiv";

const ConfirmPlan = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [plan] = useState(location.state.plan);

  const formatDate = (pDate) => {
    let targetDate = new Date(pDate)
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    return `${year}/${month}/${date}`;
  }

  return (
    <>
      <Header/>
      <div id='confirm-plan'>
        <div id='plan-area'>
          <div>
            <label>タイトル：</label>
            <input type='text' value={plan.title} readOnly/>
          </div>
          <div>
            <label>目的地：</label>
            <input type='text' value={plan.destination} readOnly/>
          </div>
        </div>
        <div id='term-area'>
          <div>
            <label>期間：</label>
            <input type='text'
                   value={`${formatDate(plan.startDate)}　～　${formatDate(plan.endDate)}`}
                   readOnly/>
          </div>
        </div>
        <div id='member-area'>
          <div>
            <label>メンバー：</label>
            <table>
              <tbody>
                {
                  plan.members.map((member, index) => (
                    <tr><td>{`・${member.name}`}</td></tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div id='schedule-area'>
          <label>スケジュール：</label>
          <Schedule isReference={true} referenceList={plan.scheduleList}/>
        </div>
        <button>登録</button>
      </div>
    </>
  );
}

export default ConfirmPlan;