import { useNavigate } from 'react-router-dom';
import './Button.scss';

interface Props {
    destination: string,
    children: React.ReactNode
}

function Button({ destination, children }: Props) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="Button"
      onClick={() => navigate(destination)}
    >
      {children}
    </button>
  );
}

export default Button;
