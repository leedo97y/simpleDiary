import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList'

// const dummyList = [
//   {
//     id : 1, 
//     author : "Dy",
//     content : "하이 1",
//     emotion : 5,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 2, 
//     author : "Doylee",
//     content : "하이 2",
//     emotion : 3,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 3, 
//     author : "edoy",
//     content : "하이 3",
//     emotion : 1,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 4, 
//     author : "2do",
//     content : "하이 4",
//     emotion : 2,
//     created_date : new Date().getTime()
//   },
// ]

function App() {

  const [ data, setData ] = useState([]);
  // -> app 컴퍼넌트의 data 상태를 변하게 만들면 된다.

  const dataId = useRef(0); // 레퍼런스를 이용

  const onCreate = (author, content, emotion) => {
    // author, content, emotion을 받아와서 일기가 추가된 시간을 나타내준다.
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content, 
      emotion, 
      created_date,
      id : dataId.current
    }; // -> 이런식으로 아이템을 추가할 것이다 ~ 하고 만듬
    dataId.current += 1; // -> 레퍼런스를 1증가시켜준다.
    setData([newItem, ...data]); // -> 추가된 새로운 아이템 + 원래 있던 아이템 해서 보여준다.
    // newItem이 먼저 와야 하므로 앞에 위치시켜준다.
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    // tatgetId를 포함하지 않은 배열로만 해서 data를 바꿔준다.
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, content : newContent} : it)
    );
  };
  // 수정완료 버튼을 누르면 수정이 될 수 있게 하는 onEdit 함수 작성

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;

// 리액트에서는 같은 레벨간에 데이터를 주고 받는 것이 불가능하다.
// 공통 부보 요소로 state를 끌어올려서 해결가능하다.
// 즉, 여기서는 DiaryList와 DiaryEditor에 필요한 일기 데이터를 app 컴포넌트에 state로 가지고 있으면 된다.

// 단방향 데이터 - 위에서 아래로만 움직임
// 추가 삭제 수정 등을 setData같이 이벤트를 핸들링하는 props로 전달
// = 이런 이벤트들은 아래에서 위로 움직임