import Cal from "./components/Cal";
import "./App.css";
import { useState, useMemo } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [kind, setKind] = useState(0);

  const result = useMemo(() => {
    return Cal(Number(num), Number(kind));
  }, [num, kind]);

  return (
    <div className="app-root">
      <div className="app-card">
        <header className="app-header">
          <h1>⚡ 전기 계산기</h1>
          <p className="app-subtitle">
            전기 소모량과 배터리 종류를 입력하면 최적 조합을 계산해 줍니다.
          </p>
        </header>

        <section className="app-form">
          <div className="form-row">
            <label htmlFor="num">전기 소모량</label>
            <input
              id="num"
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="예: 120"
            />
          </div>

          <div className="form-row">
            <label htmlFor="kind">배터리 종류</label>
            <select
              id="kind"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            >
              <option value={0}>저용량 배터리</option>
              <option value={1}>중용량 배터리</option>
              <option value={2}>대용량 배터리</option>
              <option value={3}>무릉 소형 배터리</option>
            </select>
          </div>
        </section>

        <hr className="app-divider" />

        <section className="app-result">
          {result?.message ? (
            <div className="result-message">{result.message}</div>
          ) : result ? (
            <div className="result-grid">
              <div className="result-item">
                <span className="result-label">고정 배터리 수</span>
                <span className="result-value">{result.battery}</span>
              </div>
              <div className="result-item">
                <span className="result-label">최적 값</span>
                <span className="result-value">{result.max}</span>
              </div>
              <div className="result-item">
                <span className="result-label">2의 지수(분배기)</span>
                <span className="result-value">{result.maxA}</span>
              </div>
              <div className="result-item">
                <span className="result-label">3의 지수(분배기 + 합류기)</span>
                <span className="result-value">{result.maxB}</span>
              </div>
            </div>
          ) : (
            <div className="result-placeholder">
              값을 입력하면 결과가 여기에 표시됩니다.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
