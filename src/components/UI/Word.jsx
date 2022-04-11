import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  deleteWordFB,
  editWordFB,
  completeWordFB,
} from '../store/modules/dictionary';

const Word = ({ wordData }) => {
  const [editMode, setEditMode] = useState(false);
  const [word, setWord] = useState(wordData.word);
  const [desc, setDesc] = useState(wordData.desc);
  const [example, setExample] = useState(wordData.example);

  const editModeHandler = () => {
    setEditMode((prev) => !prev);
  };

  const dispatch = useDispatch();

  const deleteWordHandler = (e) => {
    e.stopPropagation();
    if (editMode) {
      window.alert('수정을 완료해주세요!');
      return;
    } else if (!window.confirm('삭제하시겠습니까?')) {
      return;
    }

    dispatch(deleteWordFB(wordData.id));
  };

  const updateWordHandler = () => {
    dispatch(editWordFB(wordData.id, { word, desc, example }));
    setEditMode(false);
  };

  const isDoneWordHandler = (e) => {
    e.stopPropagation();
    dispatch(completeWordFB(wordData.id, !wordData.isCompleted));
  };

  const isCompletedWord = wordData.isCompleted;

  // console.log(wordData.isCompleted);
  return (
    <>
      <WordContent
        onClick={editMode ? null : editModeHandler}
        className='nes-container is-rounded'
        isCompleted={wordData.isCompleted}
      >
        <ul>
          {editMode ? (
            <>
              <input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                maxLength='20'
                required
              ></input>
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                maxLength='50'
                required
              ></input>
              <input
                value={example}
                onChange={(e) => setExample(e.target.value)}
                maxLength='50'
                required
              ></input>
            </>
          ) : (
            <>
              <li>{wordData.word}</li>
              <li>{wordData.desc}</li>
              <li style={{ color: 'lightblue' }}>{wordData.example}</li>
            </>
          )}
        </ul>
        <div style={{ textAlign: 'right' }}>
          {editMode ? (
            <button
              onClick={updateWordHandler}
              className='nes-btn is-primary'
              style={{ marginRight: '10px' }}
            >
              수정완료
            </button>
          ) : (
            <button
              style={{ marginRight: '10px' }}
              className='nes-btn is-success'
              onClick={isDoneWordHandler}
            >
              {isCompletedWord ? '되돌리기' : '완료하기'}
            </button>
          )}

          <button onClick={deleteWordHandler} className='nes-btn is-error'>
            삭제하기
          </button>
        </div>
      </WordContent>
    </>
  );
};

const WordContent = styled.div`
  margin-bottom: 12px !important;
  background-color: ${({ isCompleted }) => (isCompleted ? '#aaa' : null)};
  color: ${({ isCompleted }) => (isCompleted ? '#777' : null)};

  :hover {
    background: #ddd;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
  }
  & > ul {
    display: flex;
    flex-direction: column;
  }
  & .is-success,
  & .is-success:hover {
    color: ${({ isCompleted }) => (isCompleted ? '#009246' : null)};
  }
`;

export default Word;
