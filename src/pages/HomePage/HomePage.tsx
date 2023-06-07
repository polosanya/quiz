import { ReactComponent as Image } from 'assets/thumb.svg';
import Button from 'components/Button/Button';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <Image className="HomePage__image" />

      <div className="HomePage__content">
        <h1 className="HomePage__title">
          Who wants to be a millionaire?
        </h1>

        <Button destination="/quiz">Start</Button>
      </div>
    </div>
  );
}

export default HomePage;
