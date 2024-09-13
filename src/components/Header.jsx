import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center; 
  align-items: center; 
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  .button-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    background-color: yellow;
    border: none;
    border-radius: 30px;
    min-width: 200px;
    min-height: 60px;
    font-size: 18px;
    font-weight: 600;
    line-height: 56px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #f0c400;
    }
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <img src="./Interfaces/Iteration-1/Home.png" alt="Home" />
      <div className="button-wrapper">
        <Link to="/Order">
          <button className="button">Acıktım</button>
        </Link>
      </div>
    </HeaderDiv>
  );
}

export default Header;
