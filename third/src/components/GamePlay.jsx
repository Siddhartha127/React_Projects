import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("")
  const [rules,setRules] = useState(false)


  const generateRandomNunber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber){
      setError("You have not selected any number")
      return
    };
    setError("")
    const randomNumber = generateRandomNunber(1, 7);
    setCurrentDice((prev) => randomNumber);

    

    if(selectedNumber==randomNumber){
      setScore((prev)=> prev+randomNumber);
    }else{
      setScore((prev)=> prev-2);
    }
   setSelectedNumber(undefined)
  };

  const resetScore= ()=>{
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
           setError={setError}
          error={error}
         
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore} >Reset</OutlineButton >
        <Button onClick={()=> setRules((prev)=>!prev)}>
          {
            rules? "Hide" :"Show " 
          }Rules</Button>
      </div>
    {rules &&  <Rules/>}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    gap: 10px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
