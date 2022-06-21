import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  console.log(diaryList);
  return (
  <div className="DiaryList">
    <h2>일기 리스트</h2>
    <h4>{diaryList.length}개의 일기가 있습니다.</h4>
    <div>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
      ))}
    </div>
  </div>
  );
};

DiaryList.defaultProps = {
  diaryList : [],
};
// props가 undefined 일 때 기본값이 필요
// diaryList의 값을 빈 배열로 설정하여 오류를 없앨 수 있다.

export default DiaryList;