import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>나만의 단어장</h1>
      <div>
        <label htmlFor='wordInput'>단어</label>
        <input id='wordInput' type='text' placeholder='단어' />
      </div>
      <div>
        <label htmlFor='wordExplain'>설명</label>
        <input id='wordExplain' type='text' placeholder='설명' />
      </div>
      <div>
        <label htmlFor='wordExample'>예시</label>
        <input id='wordExample' type='text' placeholder='예시' />
      </div>
      <button>추가하기</button>
      <div>
        <h2>보여주는 부분</h2>
        <ul>
          <li>단어</li>
          <li>설명</li>
          <li>예시</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
