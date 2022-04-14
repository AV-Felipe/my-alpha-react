import './styles/calc-body.css';

function CalculatorBody (props) {
    return (
    <div className='calc-body'>
        {props.children}
    </div>
    );
}

export default CalculatorBody;