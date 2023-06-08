import Option from 'components/Option/Option';
import quizConfig from 'config/quizConfig.json';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizPage.scss';

const { questions } = quizConfig;

const money = questions.map((question) => question.money);

function QuizPage() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  const navigate = useNavigate();

  const currentQuestion = useMemo(
    () => (questions
      .find((question) => question.id === currentQuestionId) || questions[0]),
    [currentQuestionId],
  );

  const handleAnswer = useCallback((option: string) => {
    const correctAnswer = currentQuestion.options[currentQuestion.correctAnswer];

    if (correctAnswer === option) {
      if (currentQuestion === questions[questions.length - 1]) {
        navigate('/score');
      } else {
        setCurrentQuestionId((prevId) => prevId + 1);
      }
    } else {
      navigate('/score');
    }
  }, [currentQuestionId]);

  return (
    <div className="QuizPage">
      {currentQuestion && (
        <>
          <h2 className="QuizPage__question">{currentQuestion.question}</h2>

          <div className="QuizPage__options">
            {currentQuestion?.options.map((option) => (
              <Option key={option} onClick={() => handleAnswer(option)}>{option}</Option>
            ))}
          </div>
        </>
      )}

      {money && (
        <div className="QuizPage__sidebar">
          {money.map((value) => (
            <Option variant="small" key={value}>
              {`$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
            </Option>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizPage;
