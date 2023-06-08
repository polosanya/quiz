import './Option.scss';

interface Props {
    variant?: 'small',
    children: React.ReactNode,
    onClick?: () => void,
}

function Option({ variant, children, onClick }: Props) {
  return (
    <button
      type="button"
      className={`Option ${variant === 'small' && 'Option--small'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Option.defaultProps = {
  variant: '',
  onClick: null,
};

export default Option;
