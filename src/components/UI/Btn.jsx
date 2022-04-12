import React from 'react';
import { Link } from 'react-router-dom';

const Btn = (props) => {
  return (
    <>
      <Link to='/add' className='nes-btn is-primary'>
        추가하기
      </Link>
    </>
  );
};

export default Btn;
