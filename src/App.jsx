import { useState, useEffect } from 'react';
import './App.css';

function RandomQuote() {
  // quote 상태는 명언(message)만 저장하거나, 객체 전체를 저장할 수도 있습니다.
  // 여기서는 명언 내용만 저장하겠습니다.
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  // 필요하다면 author 정보도 상태로 관리할 수 있습니다.
  // const [author, setAuthor] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://korean-advice-open-api.vercel.app/api/advice');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      // 새로운 데이터 구조 확인: data 객체와 그 안의 message 속성이 있는지 확인
      if (data && data.message) {
        setQuote(data.message); // message 속성의 값을 quote 상태로 설정
        // 필요하다면 작가 정보도 설정
        // setAuthor(data.author);
      } else {
        // 여전히 예상치 못한 구조일 경우 (예: API가 또 바뀌거나 오류 응답 시)
        console.error('예상치 못한 데이터 구조:', data);
        setQuote('⚠️ 명언 형식이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('조언 불러오기 실패:', error);
      setQuote('⚠️ 명언을 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote">
      💬 {loading ? '명언을 불러오는 중...' : quote}
      {/* 필요하다면 작가 정보도 표시 */}
      {/* {!loading && author && <div style={{ fontSize: '0.9rem', color: 'grey', marginTop: '5px' }}>- {author}</div>} */}
      <div>
        <button className="refreshBtn" onClick={fetchQuote}>
          🔁 다른 조언 보기
        </button>
      </div>
    </div>
  );
}

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: '리액트 VOD 보기' },
    { id: 1, content: '자바스크립트 공부하기' },
    { id: 2, content: '숨 쉬기' },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  // 현재 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="time">
        ⏰ 현재 시간: {currentTime.toLocaleTimeString()}
      </div>

      <RandomQuote />

      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}


// 추가하기
function TodoInput ({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState('');
    
  return (
    <>
      <div className='add'>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button className='addBtn' onClick={() => {
          const newTodo = {id: Number(new Date()), content: inputValue};

          const newTodoList = [...todoList, newTodo];

          setTodoList(newTodoList);

          setInputValue('');
        }}>
          추가하기
        </button>
      </div>
    </>
  );
}


function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      { todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
      ))}
    </ul>
  );
}


// 삭제하기, 수정하기
function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <li>
      {todo.content}
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={() => {
        setTodoList((prev) =>
          prev.map((el) => el.id === todo.id ? { ...el, content: inputValue } : el)
        );
      }}>📝</button>
      <button onClick={() => {
        setTodoList(prev => prev.filter(el => el.id !== todo.id));
      }}>❌</button>
    </li>
  );
}

export default App;