import menuCloseIcon from 'assets/menu-close.svg';
import menuOpenIcon from 'assets/menu-open.svg';
import Option from 'components/Option/Option';
import Sidebar from 'components/Sidebar/Sidebar';
import quizConfig from 'config/quizConfig.json';
import { increaseMoney } from 'features/moneySlice';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import OptionVariant from 'helpers/types/OptionVariant';
import letterOptions from 'helpers/variables/constants';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './QuizPage.scss';

const { questions } = quizConfig;

const money = questions.map((question) => question.money);

function QuizPage() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const dispatch = useDispatch();
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectedCorrectAnswers: number[] = useMemo(() => [], [currentQuestionId]);

  const currentQuestion = useMemo(
    () => questions.find((question) => question.id === currentQuestionId) || questions[0],
    [currentQuestionId],
  );

  const moveToScore = useCallback(() => {
    setSelectedOptions([]);
    navigate('/score');
  }, []);

  const moveToNextQuestion = useCallback(() => {
    dispatch(increaseMoney(currentQuestion.money));

    if (currentQuestion === questions[questions.length - 1]) {
      moveToScore();
    } else {
      setCurrentQuestionId((prevId) => prevId + 1);
      setSelectedOptions([]);
    }
  }, [currentQuestion]);

  const handleAnswer = useCallback(
    (selectedOptionId: number) => {
      setSelectedOptions((prevState) => [...prevState, selectedOptionId]);

      if (currentQuestion.correctAnswers.length === 1) {
        const correctAnswer = currentQuestion.options
          .find((option) => currentQuestion.correctAnswers.includes(option.id));

        if (correctAnswer?.id === selectedOptionId) {
          moveToNextQuestion();
        } else {
          moveToScore();
        }

        return;
      }

      if (selectedCorrectAnswers.includes(selectedOptionId)) {
        return;
      }

      if (currentQuestion.correctAnswers.includes(selectedOptionId)) {
        selectedCorrectAnswers.push(selectedOptionId);

        if (selectedCorrectAnswers.length === currentQuestion.correctAnswers.length) {
          moveToNextQuestion();
        }
      } else {
        moveToScore();
      }
    },
    [currentQuestionId],
  );

  return (
    <div className="QuizPage">
      {currentQuestion && (
        <>
          <h2 className="QuizPage__question">{currentQuestion.question}</h2>

          <div className="QuizPage__options">
            {currentQuestion?.options.map((option, index) => {
              let optionVariant = OptionVariant.Default;

              const isOptionSelected = selectedOptions.includes(option.id);
              const isOptionCorrect = currentQuestion.correctAnswers.includes(option.id);
              const isOptionWrong = !isOptionCorrect;

              if (isOptionSelected) {
                optionVariant = OptionVariant.Selected;
              }

              if (isOptionWrong && isOptionSelected) {
                optionVariant = OptionVariant.Wrong;
              }

              if (isOptionCorrect && isOptionSelected) {
                optionVariant = OptionVariant.Correct;
              }

              return (
                <Option
                  key={option.id}
                  variant={optionVariant}
                  onClick={() => handleAnswer(option.id)}
                >
                  <span className="QuizPage__options-letter">{letterOptions[index]}</span>

                  {option.text}
                </Option>
              );
            })}
          </div>
        </>
      )}

      {isDesktop ? (
        money && (
          <div className="QuizPage__sidebar">
            <Sidebar options={money} currentOption={currentQuestion.money} />
          </div>
        )
      ) : (
        <>
          <button
            className="QuizPage__menu-icon"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            type="button"
          >
            <img
              src={isMenuOpen ? menuCloseIcon : menuOpenIcon}
              alt="menu-icon"
            />
          </button>

          {isMenuOpen && (
            <div className="QuizPage__sidebar">
              <Sidebar options={money} currentOption={currentQuestion.money} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default QuizPage;
