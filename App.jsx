import { useRef, useState } from 'react';
import './App.css';

function App() {
  // 검색어: 상태(state)로 관리 -> 사용자에게 즉각적으로 UI를 보여주기 위해
  const [searchText, setSearchText] = useState('');

  // 1. input창에 접근하기 위한 useRef를 선언하세요.
  const inputRef = useRef();

  // 2. input창에서 검색 단어를 받아와 상태를 업데이트 하는 함수를 작성하세요.
  const getSearchValue = () => {
    setSearchText(inputRef.current.value); // ref를 통해 input의 현재 값을 가져옴
  };

  return (
    <>
      <h2>OZ 코딩스쿨</h2>
      <p>검색할 키워드를 입력한 후 검색 버튼을 클릭하세요.</p>
      <div className="search-input">
        {/* 3. 선언한 useRef와 input을 연결하세요. */}
        <input type="text" ref={inputRef} />
        {/* 4. 검색 버튼을 클릭하면 검색어의 상태가 변경되도록 하세요.*/}
        <button onClick={getSearchValue}>검색</button>
      </div>
      {searchText && (
        <div>
          🔎 <b>{searchText}</b> 에 대해 검색합니다 . . .
        </div>
      )}
    </>
  );
}

export default App;
