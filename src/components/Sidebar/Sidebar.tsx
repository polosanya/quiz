import Option from 'components/Option/Option';
import { RootState } from 'features/store';
import OptionVariant from 'helpers/types/OptionVariant';
import { useSelector } from 'react-redux';
import './Sidebar.scss';

interface Props {
  options: number[],
  currentOption: number,
}

function Sidebar({ options, currentOption }: Props) {
  const moneyCount = useSelector((state: RootState) => state.money.amount);

  return (
    <div className="Sidebar">
      {options.map((value) => {
        let optionVariant = OptionVariant.Small;

        if (moneyCount >= value) {
          optionVariant = OptionVariant.SmallDisabled;
        }

        if (currentOption === value) {
          optionVariant = OptionVariant.SmallSelected;
        }

        return (
          <Option variant={optionVariant} key={value}>
            {`$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          </Option>
        );
      })}
    </div>
  );
}

export default Sidebar;
