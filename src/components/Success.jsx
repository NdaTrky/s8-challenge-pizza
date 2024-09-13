import React from 'react';
import styled from "styled-components";

const SuccessDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`;

function Success() {
  return (
    <SuccessDiv>
      <img src="../Interfaces/Iteration-1/Success.png" alt="Success" />
    </SuccessDiv>
  );
}

export default Success;
