import OptionVariant from 'helpers/types/OptionVariant';
import { useMemo } from 'react';
import './Option.scss';

interface Props {
  variant?: OptionVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

function Option({ variant, children, onClick }: Props) {
  const extraClass = useMemo(() => {
    switch (variant) {
      case OptionVariant.Small:
      case OptionVariant.SmallSelected:
      case OptionVariant.SmallDisabled:
      case OptionVariant.Selected:
      case OptionVariant.Correct:
      case OptionVariant.Wrong:
        return `Option--${variant}`;

      case OptionVariant.Default:
      default:
        return '';
    }
  }, [variant]);

  return (
    <div className={`Option ${extraClass}`}>
      <button type="button" className="Option__button" onClick={onClick}>
        <span className="Option__button-text">{children}</span>
      </button>
    </div>
  );
}

Option.defaultProps = {
  variant: '',
  onClick: null,
};

export default Option;
