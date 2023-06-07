import { ReactComponent as ThumbImage } from 'assets/thumb.svg';
import Button from 'components/Button/Button';
import './FinishPage.scss';

function FinishPage() {
  return (
    <div className="FinishPage">
      <ThumbImage className="FinishPage__image" />

      <div className="FinishPage__content">
        <div>
          <h2 className="FinishPage__title">Total score: </h2>
          <p className="FinishPage__score">$8,000 earned</p>
        </div>

        <Button destination="/">Finish</Button>
      </div>
    </div>
  );
}

export default FinishPage;
