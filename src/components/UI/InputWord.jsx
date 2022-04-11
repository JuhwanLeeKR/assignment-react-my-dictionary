import React from 'react';
import styled from 'styled-components';

const InputWord = (props) => {
  return (
    <InputBox className='nes-container with-title'>
      <p className='title'>
        단어 입력하기 <i className='nes-icon is-small like'></i>
      </p>
      <div className='nes-field is-inline'>
        <label htmlFor='wordInput'>단어</label>
        <input
          maxLength='20'
          className='nes-input'
          id='wordInput'
          type='text'
          placeholder='단어를 입력해주세요'
        />
      </div>
      <div className='nes-field is-inline'>
        <label htmlFor='wordExplain'>설명</label>
        <input
          maxLength='50'
          className='nes-input'
          id='wordExplain'
          type='text'
          placeholder='설명을 입력해주세요'
        />
      </div>
      <div className='nes-field is-inline'>
        <label htmlFor='wordExample'>예시</label>
        <input
          maxLength='50'
          className='nes-input'
          id='wordExample'
          type='text'
          placeholder='예시를 적어주세요'
        />
      </div>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }} className='nes-btn is-primary'>
          추가하기
        </button>
        <button className='nes-btn is-warning'>뒤로가기</button>
      </div>
    </InputBox>
  );
};

const InputBox = styled.section`
  background: #fff;
  width: 50%;
`;

export default InputWord;
