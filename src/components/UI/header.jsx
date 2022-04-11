import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Head>
      My Dictionary
      <i style={{ marginLeft: '20px' }} className='nes-logo'></i>
    </Head>
  );
};

const Head = styled.header`
  font-size: 50px;
`;

export default Header;
