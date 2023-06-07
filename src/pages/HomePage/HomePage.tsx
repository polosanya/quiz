import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <h1>Welcome!</h1>

      <button
        type="button"
        className="HomePage__button"
        onClick={() => navigate('/quiz')}
      >
        Start game
      </button>
    </div>
  );
}

export default HomePage;
