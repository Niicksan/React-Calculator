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

    return (
        <div className="buttonHolder">
            {
                btnValues.flat().map((btn, i) => {
                    // console.log(btn);
                    // console.log(typeof (btn))
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={
                                () => {
                                    // console.log(btn);
                                    // console.log(btn === "C");
                                    switch (btn) {
                                        case "C":
                                            return resetClickHandler();
                                        case "+-":
                                            return invertClickHandler();
                                        case "%":
                                            return percentClickHandler();
                                        case "=":
                                            return equalsClickHandler();
                                        case "/":
                                            return signClickHandler(btn);
                                        case "x":
                                            return signClickHandler(btn);
                                        case "+":
                                            return signClickHandler(btn);
                                        case "-":
                                            return signClickHandler(btn);
                                        case ".":
                                            return commaClickHandler(btn);
                                        default:
                                            return numClickHandler(btn);
                                    }
                                }
                            }
                        />
                    );
                })
            }
        </div>
    );
}

export default ButtonHolder;
