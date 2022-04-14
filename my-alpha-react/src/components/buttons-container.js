import "./styles/buttons-container.css";

function ButtonsContainer (props) {
  return <div className="buttons-container">{props.children}</div>;
};

export default ButtonsContainer;