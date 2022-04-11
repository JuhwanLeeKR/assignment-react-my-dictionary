import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadWordListFB } from '../store/modules/dictionary';

import Word from '../UI/Word';

const Home = () => {
  const wordList = useSelector(({ dictionary }) => dictionary.wordList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordListFB());
  }, [dispatch]);

  const loadedWord = wordList.map((word) => {
    return <Word key={word.id} wordData={word} id={word.id} />;
  });

  return (
    <HomeContainer className='nes-container'>
      {loadedWord}
      <Link to='/add' className='nes-btn is-primary'>
        추가하기
      </Link>
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
