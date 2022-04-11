import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer className='nes-container'>
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
      <Link to='/add' className='nes-btn is-primary'>
        추가하기
      </Link>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  position: relative;
  padding-bottom: 70px;

  & > .nes-btn {
    position: absolute;
    bottom: 13px;
    right: 10px;
  }
`;

export default Home;
