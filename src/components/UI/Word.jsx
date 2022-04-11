import React from 'react';

const Word = (props) => {
  return (
    <>
      <div className='nes-container is-rounded'>
        <ul>
          <li>단어</li>
          <li>설명</li>
          <li style={{ color: 'lightblue' }}>예시</li>
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
    </>
  );
};

export default Word;
