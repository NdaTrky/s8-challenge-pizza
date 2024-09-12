import React from 'react'
import styled from "styled-components";


const SuccesDiv = styled.div`
position: relative;
top:0;
left:850px;
.img{
width: 100vw;
  padding: 0;
  margin: 0;
}
 `


function Success() {
 
  return (
    <>
    <SuccesDiv>

     <img className="img" src="../Interfaces/Iteration-1/Success.png" alt="Success" />

    </SuccesDiv>
    </>
  )
}

export default Success;
