import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { addWordFB } from '../store/modules/dictionary';

const InputWord = (props) => {
  const wordRef = useRef();
  const descRef = useRef();
  const exampleRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const wordData = {
      word: wordRef.current.value,
      desc: descRef.current.value,
      example: exampleRef.current.value,
      isCompleted: false,
      createAt: Date.now(),
    };

    dispatch(addWordFB(wordData));

    navigate('/', { replace: true });
  };

  return (
    <InputBox onSubmit={submitHandler} className='nes-container with-title'>
      <p className='title'>
        단어 입력하기 <i className='nes-icon is-small like'></i>
      </p>
      <div className='nes-field is-inline'>
        <label htmlFor='wordInput'>단어</label>
        <input
          ref={wordRef}
          maxLength='20'
          className='nes-input'
          id='wordInput'
          type='text'
          required
          placeholder='단어를 입력해주세요'
        />
      </div>
      <div className='nes-field is-inline'>
        <label htmlFor='wordExplain'>설명</label>
        <input
          ref={descRef}
          maxLength='50'
          className='nes-input'
          id='wordExplain'
          type='text'
          required
          placeholder='설명을 입력해주세요'
        />
      </div>
      <div className='nes-field is-inline'>
        <label htmlFor='wordExample'>예시</label>
        <input
          ref={exampleRef}
          maxLength='50'
          className='nes-input'
          id='wordExample'
          type='text'
          required
          placeholder='예시를 적어주세요'
        />
      </div>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <button
          style={{ marginRight: '10px' }}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className='nes-btn is-warning'
        >
          뒤로가기
        </button>
        <button className='nes-btn is-primary'>추가하기</button>
      </div>
    </InputBox>
  );
};

const InputBox = styled.form`
  background: #fff;
  width: 50%;
`;

export default InputWord;
