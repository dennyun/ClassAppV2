import React from "react";
import { useState } from 'react';
import { Button, Dialog , DialogContent, DialogTitle,} from "@material-ui/core";

import questions from "./contextQuiz";
import './style.css'


export const Quiz = () => {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpenQuiz = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//Respostas
  function handleAnswer(isCorrect){
      if(isCorrect){
          setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if(nextQuestion < questions.length){
          setCurrentQuestion (nextQuestion);
      } else{
          setShowScore(true)
      }
  }

return (
  <div>
    <div className="quiz-button">
      <Button variant="contained" color="secondary" onClick={handleClickOpenQuiz}> Quiz </Button>
    </div>
    <div className="paperQuiz">
      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle className="dialog-title" id="alert-dialog-title">
              {"Quiz"}
          </DialogTitle>
          <DialogContent className="dialog-content">
                  <div className='container-quiz'>
                    <div className="quiz">
                        {showScore ? (
                            <div className="score-section">
                                Você pontuou {score} de {questions.length}
                            </div>
                        ) : (

                        <>
                            <div className="question-section">
                                <div className="question-count">
                                    <span>{currentQuestion + 1}</span>/{questions.length}
                                </div>

                                <div className="question-text">
                                    {questions[currentQuestion].questionText}
                                </div>
                            </div>

                            <div className="answer-section">
                                {questions[currentQuestion].answerOptions.map(
                                (answerOption, index) => (
                                    <button className='button-quiz' onClick={() => handleAnswer(answerOption.isCorrect)} key={index}>
                                    {answerOption.answerText}
                                    </button>
                                )
                                )}
                            </div>
                        </>
                        )}
                    </div>
                  </div>
            </DialogContent>
        </Dialog>
    </div>
  </div>
);
}

