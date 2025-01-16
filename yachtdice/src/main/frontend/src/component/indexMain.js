import './indexMain.css';

function App() {
  return (
    <div className="App">
      <div id="outer-text">
        <h1>Yacht Dice 게임</h1>
      </div>
      <div className="container">
        <h1 id="inner-text">플레이어 수를 선택해주세요.</h1>
        <select>
          <option value="1" selected>1명</option>
          <option value="2">2명</option>
          <option value="3">3명</option>
          <option value="4">4명</option>
        </select>
        <br/>
        <button id="submit" type="button">시작하기</button>
      </div>
    </div>
  );
}

export default App;
