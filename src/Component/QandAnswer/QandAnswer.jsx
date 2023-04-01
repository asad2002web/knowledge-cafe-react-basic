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
        
      </div>
    </div>
  );
};

export default QandAnswer;
