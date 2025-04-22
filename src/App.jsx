import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

//Action + 객체
const increment1 = {
  type: 'increment1'
}

//Action - 객체
const decrement1 = {
  type: 'decrement1'
}

//Action + 객체
const increment2 = {
  type: 'increment2'
}

//Action - 객체
const decrement2 = {
  type: 'decrement2'
}

//Reducer
const counter1Reducer = (state = 5, action) => {
  switch (action.type) {
    case 'increment1':
      return state + 1
    case 'decrement1':
      return state - 1
    default:
      return state //기본상태 유지
  }
}

const counter2Reducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment2':
      return state + 1
    case 'decrement2':
      return state - 1
    default:
      return state //기본상태 유지
  }
}

//여러개의 Reducer 사용
const rootReducer = combineReducers({ counter1Reducer, counter2Reducer })

//Store 상태 저장소 createStore = legacy_createStore 
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk)) //Redux-Thunk 사용준비


function App() {
  const counter1 = useSelector((state) => state.counter1Reducer)
  const counter2 = useSelector((state) => state.counter2Reducer)
  const dispatch = useDispatch() //Dispatch
  return (
    <>
      <div>Counter1 : { counter1 }</div>
      <button onClick={() => dispatch((dispatch) => {
        setTimeout(() => {
          dispatch(increment1)
        }, 1000)
      })}>+</button>
      <button onClick={() => dispatch((dispatch) => {
        setTimeout(() => {
          dispatch(decrement1)
        }, 1000)
      })}>-</button>
      <div>Counter2 : { counter2 }</div>
      <button onClick={() => dispatch(increment2)}>+</button>
      <button onClick={() => dispatch(decrement2)}>-</button>
    </>
  );
}

export default App;
