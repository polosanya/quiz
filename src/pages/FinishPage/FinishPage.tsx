import { ReactComponent as ThumbImage } from 'assets/thumb.svg';
import Button from 'components/Button/Button';
import './FinishPage.scss';
import { RootState } from 'features/store';
import { useDispatch, useSelector } from 'react-redux';
import { resetMoney } from 'features/moneySlice';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function FinishPage() {
  const money = useSelector((state: RootState) => state.money);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetMoney = useCallback(() => {
    dispatch(resetMoney());
    navigate('/');
  }, []);

  return (
    <div className="FinishPage">
      <ThumbImage className="FinishPage__image" />

      <div className="FinishPage__content">
        <div>
          <h2 className="FinishPage__title">Total score: </h2>
          <p className="FinishPage__score">
            {`$${money.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} earned`}
          </p>
        </div>

        <Button onClick={handleResetMoney}>Finish</Button>
      </div>
    </div>
  );
}

export default FinishPage;
