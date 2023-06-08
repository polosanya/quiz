import './Option.scss';

interface Props {
    variant?: 'small',
    children: React.ReactNode,
    onClick?: () => void,
}

function Option({ variant, children, onClick }: Props) {
  return (
    <div className={`Option ${variant === 'small' && 'Option--small'}`}>
      <button
        type="button"
        className="Option__button"
        onClick={onClick}
      >
        <span className="Option__button-text">
          {children}
        </span>
      </button>
    </div>
  );
}

Option.defaultProps = {
  variant: '',
  onClick: null,
};

export default Option;
