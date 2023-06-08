import { ReactComponent as ThumbImage } from 'assets/thumb.svg';
import Button from 'components/Button/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.scss';

function HomePage() {
  const navigate = useNavigate();

  const handleQuizStart = useCallback(() => {
    navigate('/quiz');
  }, []);

  return (
    <div className="HomePage">
      <ThumbImage className="HomePage__image" />

      <div className="HomePage__content">
        <h1 className="HomePage__title">
          Who wants to be a millionaire?
        </h1>

        <Button onClick={handleQuizStart}>Start</Button>
      </div>
    </div>
  );
}

export default HomePage;
