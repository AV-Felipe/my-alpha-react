import CalculatorBody from "./components/calc-body";
import Display from "./components/display";
import KeyPad from "./components/modules/buttons-generator";

function App() {
  
  return (
    <CalculatorBody>
      <Display value={":)"} />
      <KeyPad />
    </CalculatorBody>
  );

}

export default App;