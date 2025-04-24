import React, { Suspense, lazy } from 'react';
import './App.css';

const TestComponent = lazy(() => import('./TestComponent'));

function App() {
  return (
    <div className="App">
      <h1>lazy와 Suspense<br/> 사용해보기</h1>
      <Suspense fallback={<h2>로딩 중...</h2>}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
