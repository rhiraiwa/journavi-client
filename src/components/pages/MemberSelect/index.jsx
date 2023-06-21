import { useState } from "react";
import FlexDiv from "../../atoms/FlexDiv";
import './index.scss';
import Header from "../../organisms/Header";
import { useNavigate } from "react-router-dom";

const MemberSelect = () => {

  const navigate = useNavigate();

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

  const goToSchedule = () => {
    navigate('/Schedule');
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='member-select'>
        <FlexDiv>
          <label>メンバーを選択してください</label>
          <button onClick={goToSchedule}>次へ</button>
          <button>下書き保存</button>
        </FlexDiv>
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
    </>
  );
}

export default MemberSelect;