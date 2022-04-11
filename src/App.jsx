import './App.css';
import Header from './components/UI/Header';
import 'nes.css/css/nes.min.css';
import InputWord from './components/UI/InputWord';

function App() {
  return (
    <>
      <Header />
      <InputWord />
      <div className='nes-container'>
        <div className='nes-container is-rounded'>
          <ul>
            <li>단어</li>
            <li>설명</li>
            <li>예시</li>
          </ul>
          <div>
            <button
              style={{ marginRight: '10px' }}
              className='nes-btn is-success'
            >
              완료하기
            </button>
            <button className='nes-btn is-error'>삭제하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
