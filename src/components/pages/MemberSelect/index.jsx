import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../organisms/Header";
import PlanFooter from "../../organisms/PlanFooter";
import './index.scss';

const MemberSelect = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [state] = useState(location.state);

  const [userList, setUserList] = useState([
    {
      "id": 10,
      "name": "ジョン",
      "attend": false
    },
    {
      "id": 20,
      "name": "ジェーン",
      "attend": false
    },
    {
      "id": 30,
      "name": "タカシ",
      "attend": false
    },
    {
      "id": 40,
      "name": "ユキ",
      "attend": false
    },
    {
      "id": 50,
      "name": "ヒロシ",
      "attend": false
    }
  ]);
  
  const handleCheck = (id) => {
    const updatedData = userList.map((user) => {
      if (id === user.id) {
        const updatedRow = { ...user, attend: !user.attend };
        return updatedRow;
      }
      return user;
    });
    setUserList(updatedData);
  }

  const goToTermSelect = () => {
    
    let plan = {
      title: state.plan.title,
      destination: state.plan.destination,
      startDate: state.plan.startDate,
      endDate: state.plan.endDate,
      members: []
    };

    navigate('/TermSelect', {state: {plan: plan}});
  }

  const goToSchedule = () => {
    let members = [];

    for (let i = 0; i < userList.length; i++) {
      if (userList[i].attend) {
        members.push({
          id: userList[i].id,
          name: userList[i].name
        });
      }
    }

    if (members.length === 0) {
      alert('メンバーが選択されていません');
      return;
    }

    let plan = {
      title: state.plan.title,
      destination: state.plan.destination,
      startDate: state.plan.startDate,
      endDate: state.plan.endDate,
      members: members
    };

    navigate('/Schedule', {state: {plan: plan}});
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='member-select'>
        <div className='plan-discription'>
          <label>メンバーを選択してください</label>
        </div>
        <div id='user-list-area'>
          <table id='user-list'>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map((user, index) => (
                  <tr key={index} onClick={()=>handleCheck(user.id)}>
                    <td>
                      <input type='checkbox' checked={user.attend} readOnly/>
                    </td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <PlanFooter handleBack={goToTermSelect} handleNext={goToSchedule}/>
    </>
  );
}

export default MemberSelect;