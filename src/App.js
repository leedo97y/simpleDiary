import React, { useState, useEffect } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList'

const dummyList = [
  {
    id : 1, 
    author : "Dy",
    content : "하이 1",
    emotion : 5,
    created_date : new Date().getTime()
  },
  {
    id : 2, 
    author : "Doylee",
    content : "하이 2",
    emotion : 3,
    created_date : new Date().getTime()
  },
  {
    id : 3, 
    author : "edoy",
    content : "하이 3",
    emotion : 1,
    created_date : new Date().getTime()
  },
  {
    id : 4, 
    author : "2do",
    content : "하이 4",
    emotion : 2,
    created_date : new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
