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
  text-align: center;
  color: white; 
 

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -1; /* Görseli diğer içeriklerin arkasına yerleştirir */
  }

  .baslik{
    position: relative;
    bottom: 30vh;
  }


  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 86px;
    font-weight: 300;
    text-align: center;
    color: white;
    padding:30px;
    margin: 40px;
  }

  .button-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
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
   

    &:hover {
      background-color: #f0c400;
    }
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <div className ="baslik">
        <h1>Teknolojik Yemekler</h1>
        <h2>KOD ACIKTIRIR PİZZA, DOYURUR.</h2>
      </div>
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
