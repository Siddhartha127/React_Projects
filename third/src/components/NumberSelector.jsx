import React, { useState } from "react";
import styled from "styled-components";
function NumberSelector({setError,error, selectedNumber,setSelectedNumber}) {
  const arr = [1, 2, 3, 4, 5, 6];
  
    const numberSelectorHandeler=(value)=>{
      setSelectedNumber(value);
      setError("")
    }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
      {arr.map((value, i) => (
        <Box
            isselected={value===selectedNumber}
          key={i}
          onClick={()=>numberSelectorHandeler(value)}
        >
          {value}
        </Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap:24px;

    }
    p{
        font-size: 24px;
        font-weight:700px ;
    }
    .error{
      color: red;
    }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props)=>props.isselected? "black":"white"};
  color: ${(props)=>props.isselected?"white":'black'} ;
`;
