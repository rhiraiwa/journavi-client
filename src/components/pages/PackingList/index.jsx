import { useState } from "react";
import './index.scss';
import Header from "../../organisms/Header";

const PackingList = () => {

  const [itemList, setItemList] = useState([]);
  const [itemId, setItemId] = useState(-1);
  const [itemName, setItemName] = useState('');

  const uniqueId = () => {
    const newId = itemId + 1;
    setItemId(newId);
    return newId;
  };

  const handleItemName = (event) => {
    setItemName(event.target.value);
  }

  const handleIsPacked = (index, isPacked) => {
    const updatedData = itemList.map((row, idx) => {
      if (idx === index) {
        const updatedRow = { ...row, isPacked: !isPacked };
        return updatedRow;
      }
      return row;
    });
    setItemList(updatedData);
  }

  const addItem = () => {
    const newRow = {
      id: uniqueId(),
      name: itemName,
      isPacked: false
    };
    setItemList([...itemList, newRow]);
    setItemName('');
    document.getElementById('item-name').focus();
  }

  const deleteItem = (index) => {
    const updatedData = itemList.filter((_, idx) => idx !== index);
    setItemList(updatedData);
  };

  const executeRegister = () => {
    //未実装

    console.log(itemList);
  }

  return (
    <>
      <Header/>
      <div className='page-body' id='packing-list'>
        <div style={{display:"flex"}}>
          <input type='text'
                id='item-name'
                value={itemName}
                onChange={handleItemName}
                placeholder='アイテム'/>
          <button onClick={addItem}>add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Packed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              itemList.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>
                    <input type='checkbox'
                          onChange={() => handleIsPacked(index, item.isPacked)}
                          checked={item.isPacked}/>
                  </td>
                  <td>
                    <button onClick={() => deleteItem(index)}>X</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button onClick={executeRegister}>Register</button>
      </div>
    </>
  );
}

export default PackingList;