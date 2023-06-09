import './Button.scss';

interface Props {
    onClick: () => void,
    children: React.ReactNode
}

function Button({ onClick, children }: Props) {
  return (
    <button
      type="button"
      className="Button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
