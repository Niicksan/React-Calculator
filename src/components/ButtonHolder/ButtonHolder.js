import "./buttonHolder.css";
import Button from "../Button/Button";

const btnValues = [
    ["C", "+-", "%", "÷"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const ButtonHolder = ({ functions }) => {
    const { numClickHandler, signClickHandler, invertClickHandler, commaClickHandler, percentClickHandler, equalsClickHandler, resetClickHandler } = functions;

    const addButtonHandler = (btn) => {
        switch (btn) {
            case "C":
                resetClickHandler();
                break;
            case "+-":
                invertClickHandler();
                break;
            case "%":
                percentClickHandler();
                break;
            case "=":
                equalsClickHandler();
                break;
            case "÷":
            case "x":
            case "-":
            case "+":
                signClickHandler(btn);
                break;
            case ".":
                commaClickHandler(btn);
                break;
            default:
                numClickHandler(btn);
                break;
        }
    }

    return (
        <div className="buttonHolder">
            {
                btnValues.flat().map((btn, i) => (
                    <Button
                        key={i}
                        className={btn === "=" ? "equals" : ""}
                        value={btn}
                        onClick={() => addButtonHandler(btn)}
                    />
                ))
            }
        </div>
    );
}

export default ButtonHolder;
