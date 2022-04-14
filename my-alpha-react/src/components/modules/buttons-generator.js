import ButtonsContainer from "../buttons-container";
import Button from "../button";

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  

function KeyPad() {
  
    return (

        <ButtonsContainer>
          {
            btnValues.flat().map((value, index) => {
              return (
                <Button
                  key={index}
                  className={value === "=" ? "equals" : ""}
                  value={value}
                  onClick={() => {
                    console.log(`clicou: ${value}`);
                  }}
                />
              );
            })
          }
        </ButtonsContainer>

    );
  
  }
  
  export default KeyPad;