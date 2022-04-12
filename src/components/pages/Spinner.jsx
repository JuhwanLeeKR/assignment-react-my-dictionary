import React from 'react';
import styled from 'styled-components';

const Spinner = (props) => {
  return (
    <>
      <SpinnerContent>
        <i className='nes-octocat animate'></i>
        <div>
          <p>
            Now loading...
            <br />
            <span>Please wait...</span>
          </p>
        </div>
      </SpinnerContent>
    </>
  );
};

const SpinnerContent = styled.div`
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & span {
    color: #999;
  }
`;

export default Spinner;
