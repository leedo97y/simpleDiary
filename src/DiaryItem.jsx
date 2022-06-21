import { useRef } from "react";
import { useState } from "react";

const DiaryItem = ({ onEdit, onRemove, id, author, content, emotion, created_date }) => {

  const [isEdit, setIsEdit] = useState(false); // -> 상태가 true라면 수정중
  const toggleIsEdit = () => setIsEdit(!isEdit);
  // -> 호출이 되는 순간 원래 isEdit이 가지고 있던 상태를 반전시킨다.
  // !연산 - 논리연산을 통해 상태를 바꿔주는 것

  const [localContent, setLocalContent] = useState(content); 
  // textArea의 input을 핸들링하기 위함
  // useState(content)는 수정폼이 뜬 후 보이는 값을 원본 content로 하기 위함
  const localContentInput = useRef();

  const handleRemove = () => {
    if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  
  // [수정 취소 버튼을 누를 때 실행 ]
  const hadleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  
  // -> 수정 한 내용 대신 원래 내용이 있게 해줌

  // [수정 완료 버튼 클릭시 실행]
  const hadleEdit = () => {

    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
      // 수정 form 닫아주기
    }
    
  };

  return ( 
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleString()}
          </span>
      </div>
      <div className="content">
        {isEdit ? (
        <>
          <textarea
          ref={localContentInput}
          value={localContent} 
          onChange={(e) => setLocalContent(e.target.value)}
          />
        </>
        ) : (
        <>{content}</>
        )}
      </div>

      {isEdit ? (
      <>
        <button onClick={hadleQuitEdit}>수정 취소</button>
        <button onClick={hadleEdit}>수정 완료</button>
      </>
      ) : (
      <>
      <button onClick={handleRemove}>삭제하기</button>
      <button onClick={toggleIsEdit}>수정하기</button>
      </>
      )}
      
    </div>
  );
};

export default DiaryItem;

// 삼항연산자 이용해서 수정form이 나타나게 만들어준다. 
// -> 수정 중일때는 textarea가 나타나게 만들고, 수정하지 않을때는 콘텐츠를 보여줌

// 수정 중일 경우 수정 중인 버튼 (수정 취소, 수정 완료) 으로 변경해야함