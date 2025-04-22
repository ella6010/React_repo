import { legacy_createStore } from 'redux';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

//Action + 객체
const increment = {
  type: 'increment'
}

//Action - 객체
const decrement = {
  type: 'decrement'
}

//Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state //기본상태 유지
  }
}

//Store 상태 저장소 createStore = legacy_createStore 
export const store = legacy_createStore(counterReducer)


function App() {
  const counter = useSelector(state => state)
  console.log(counter)
  const dispatch = useDispatch() //Dispatch
  dispatch(increment)
  return (
    <>
      <div>Counter : { counter }</div>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
    </>
  );
}

export default App;
