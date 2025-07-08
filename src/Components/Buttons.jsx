const Buttons = ({ onClickHandler, value, title, isActive }) => {
  return (
    <button 
      onClick={() => onClickHandler(value)}
      className={`btns ${isActive ? 'active' : ''}`}
    >
      {title}
    </button>
  );
};

export default Buttons;