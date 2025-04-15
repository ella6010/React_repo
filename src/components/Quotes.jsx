import React, { useState, useEffect, useCallback } from 'react'; // useCallback 추가
import axios from 'axios';
import './Quote.css';

function Quote() {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- 명언 가져오는 함수 분리 ---
  // useCallback으로 감싸서 불필요한 재생성을 방지 (선택 사항이지만 권장)
  const fetchQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://korean-advice-open-api.vercel.app/api/advice');
      setQuote({
        content: response.data.message,
        author: response.data.author,
      });
    } catch (err) {
      console.error("명언 가져오기 실패:", err);
      setError("명언을 불러오는 데 실패했습니다.");
      // 에러 발생 시 이전 명언이 남아있지 않도록 초기화 (선택 사항)
      // setQuote({ content: '', author: '' });
    } finally {
      setIsLoading(false);
    }
  }, []); // 의존성 배열이 비어있으므로 컴포넌트 마운트 시 한 번만 생성됨
  // ------------------------------

  // 컴포넌트 마운트 시 명언 가져오기
  useEffect(() => {
    fetchQuote(); // 분리된 함수 호출
  }, [fetchQuote]); // useEffect의 의존성 배열에 fetchQuote 추가

  // 로딩 상태 표시
  if (isLoading) {
    // 로딩 중일 때는 버튼을 숨기거나 비활성화할 수 있습니다.
    return (
        <div className="quote-container">
             명언 로딩 중...
             {/* 로딩 중 버튼 예시 (비활성화) */}
             {/* <button disabled style={{marginTop: '10px'}}>새 명언</button> */}
        </div>
    );
  }

  // 에러 상태 표시
  if (error) {
    return (
      <div className="quote-container error">
        오류: {error}
        {/* 에러 발생 시에도 재시도 버튼을 보여줄 수 있음 */}
        <button onClick={fetchQuote} style={{ marginTop: '10px' }}>다시 시도</button>
      </div>
    );
  }

  // 명언 표시
  return (
    <div className="quote-container">
      <blockquote className="quote-text">
        "{quote.content}"
      </blockquote>
      {quote.author && quote.author !== "알 수 없음" && (
          <p className="quote-author">- {quote.author} -</p>
      )}

      {/* --- 새 명언 버튼 추가 --- */}
      <button className='quoteBtn' onClick={fetchQuote}>
        새 명언 보기
      </button>
      {/* ----------------------- */}
    </div>
  );
}

export default Quote;