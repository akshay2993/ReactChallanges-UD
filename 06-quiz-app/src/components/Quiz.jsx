import React, { useCallback, useState } from "react";
import questions from "../questions";
import quizComplete from "../assets/quiz-complete.png";
import Timer from "./Timer";

const Quiz = () => {
  const [answerState, setAnswerState] = useState('')
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers)
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((answer) => {
    setAnswerState('answered')

    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  
    setTimeout(() => {
      if(answer === questions[activeQuestionIndex].answers[0]){
        
      }

      setTimeout(() => {
        
      }, 2000)
    }, 1000)
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (activeQuestionIndex === questions.length) {
    return (
      <div id="summary">
        <img src={quizComplete} />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  const shuffledAnswers = [
    ...questions[activeQuestionIndex].answers.sort(() => Math.random() - 0.5),
  ];

  return (
    <div id="quiz">
      <div id="question">
        <Timer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h1>{questions[activeQuestionIndex].text}</h1>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
