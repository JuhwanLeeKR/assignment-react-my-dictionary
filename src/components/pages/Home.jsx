import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Word from '../UI/Word';

const Home = () => {
  return (
    <HomeContainer className='nes-container'>
      <Word />
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
