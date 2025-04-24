import React from 'react';

function TestComponent() {
  return (
    <div>
      <h2>Test Component가 로드되었습니다!</h2>
      <p>
        이 컴포넌트는 React.lazy와 Suspense를 사용하여 비동기적으로
        로드되었습니다.
      </p>
    </div>
  );
}

export default TestComponent;
