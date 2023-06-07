import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const navigate = useNavigate();

  return (
    <div className="QuizPage">
      <h1>Game started!</h1>

      <button
        type="button"
        className="QuizPage__button"
        onClick={() => navigate('/')}
      >
        Finish game
      </button>
    </div>
  );
}

export default QuizPage;
