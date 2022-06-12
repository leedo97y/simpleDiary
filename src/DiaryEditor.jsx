import { useState } from "react";

const DiaryEditor = () => {

  const [state, setState] = useState({
    author : "",
    content : "",
    emotion : 1,
  });
  // 밑의 두 코드는 자료형에 받는 방법 등 state 바꿔주는 방식이 똑같기 때문에
  // 한번에 처리 가능
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
  };

  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공");
  };


  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
        name="author"
        value={state.author} 
        onChange={handleChangeState}
          //(e) => setState({...state, author : e.target.value, }); }} 
          // -> 콜백함수로 썼는데 이를 한번에 쓰기 위해 바꿔줌
        />
      </div>
      <div>
        <textarea 
        name="content"
        value={state.content}
        onChange={handleChangeState}
        //(e) => {setState({ ...state, content : e.target.value, }); }}
        
        // author : state.author,
        // => 이거 대신에 ...state 쓴다.
        // ...state는 맨 앞에 써줘야 한다. 
        // => 우선 state는 이거고 ~ 바뀌는 건 content야 하는 느낌으로 써줌
        />
      </div>
      <div>
        오늘의 감정점수 : 
        <select 
          name="emotion" 
          value={state.emotion} 
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
// 컴포넌트 이름과 ClassName을 일치시켜주면 굉장히 직관적이다.

// state 같은 방식으로 바뀐다면 한번에 작성 가능
// -> 이벤트 핸들러도 한번에 작성 가능하다.