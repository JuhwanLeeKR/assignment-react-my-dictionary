import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadWordListFB } from '../store/modules/dictionary';

import Word from '../UI/Word';
import Spinner from './Spinner';
import Btn from '../UI/Btn';
import NoContent from './NoContent';

const Home = (props) => {
  const wordList = useSelector(({ dictionary }) => {
    return dictionary.wordList;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordListFB());
  }, []);

  const loadedWord = wordList.map((word) => {
    return <Word key={word.id} wordData={word} id={word.id} />;
  });

  const isLoaded = useSelector(({ dictionary }) => dictionary.isLoaded);

  return (
    <HomeContainer className='nes-container'>
      {!isLoaded ? (
        <Spinner />
      ) : !loadedWord.length ? (
        <NoContent />
      ) : (
        loadedWord
      )}
      {!isLoaded ? null : <Btn />}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  padding-bottom: 70px;
  min-width: 200px;

  & > .nes-btn {
    position: absolute;
    bottom: 13px;
    right: 10px;
  }
`;

export default Home;
