import React from "react";
import "./QandAnswer.css";

const QandAnswer = () => {
  return (
    <div>
      <div className="QA-Container py-3 px-4">
        <div className="question card px-3 py-3 my-4">
          <h3>What is defference between props and state ?</h3>
          <p>Props are used to passsed from a perrent component to chiled component.they can not  modify by the chileed component.</p>
        </div>
        <div className="question card px-3 py-3 my-4">
          <h3>How does work useState?</h3>
          <p>useState a react hook . its allows you add state functional components. also return a array wwith two values.the hook initial state value as an argument and return update state .when set function called. useState can store any type value premitive data type,and complex data type.</p>
        </div>
        <div className="question card px-3 py-3 my-4">
          <h3>What does useeffect do other than load data ?</h3>
          <p>useEffect use dependency values against the from the last render and its also effect function if any one of them changed.the react useEffect Hook essentially replaces every single lifecycle function that you may run into.</p>
        </div>
        
      </div>
    </div>
  );
};

export default QandAnswer;
