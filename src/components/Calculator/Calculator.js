import "./calculator.css";

import Screen from "../Screen/Screen";
import ButtonHolder from "../ButtonHolder/ButtonHolder";
import { useState } from "react";

const Calculator = () => {
    let [calc, setCalc] = useState({
        sign: "",
        num: null,
        res: 0
    });

    const numClickHandler = (value) => {
        setCalc({
            ...calc,
            num:
                (calc.num === null || calc.num === 0)
                    ? value
                    : calc.num + value.toString(),
            res: !calc.sign ? 0 : calc.res
        });
    };

    const signClickHandler = (value) => {
        setCalc({
            ...calc,
            sign: value,
            res: (calc.res !== null && calc.num) ? calc.num : calc.res,
            num: null
        });
    };

    const invertClickHandler = () => {
        setCalc({
            ...calc,
            num: calc.num ? (calc.num * -1) : 0
        });
    };

    const commaClickHandler = (value) => {
        setCalc({
            ...calc,
            num: calc.num === null
                ? 0 + value
                : !calc.num.toString().includes(".")
                    ? calc.num + value
                    : calc.num
        });
    };

    const percentClickHandler = () => {
        if (calc.num === null) {
            calc.num = calc.res;
        }

        console.log(calc.num);

        let num = calc.num ? parseFloat(calc.num) : 0;

        setCalc({
            ...calc,
            num: (num /= Math.pow(100, 1)),
        });
    };

    const equalsClickHandler = () => {
        if (calc.sign && calc.num !== null) {
            const math = (a, b, sign) => {
                switch (sign) {
                    case "÷":
                        return a / b;
                    case "x":
                        return a * b;
                    case "-":
                        return a - b;
                    case "+":
                        return a + b;
                    default:
                        break;
                }
            }

            setCalc({
                ...calc,
                res:
                    calc.num === 0 && calc.sign === "÷"
                        ? "Can't divide by 0"
                        : math(
                            Number(calc.res),
                            Number(calc.num),
                            calc.sign
                        )
                ,
                sign: "",
                num: null,
            });
        }
    };

    const resetClickHandler = () => {
        setCalc({
            ...calc,
            sign: "",
            num: null,
            res: 0,
        });
    };

    const functions = {
        numClickHandler: numClickHandler,
        signClickHandler: signClickHandler,
        invertClickHandler: invertClickHandler,
        commaClickHandler: commaClickHandler,
        percentClickHandler: percentClickHandler,
        equalsClickHandler: equalsClickHandler,
        resetClickHandler: resetClickHandler
    };

    return (
        <div className="calculator">
            <Screen result={calc.num !== null ? calc.num : calc.res} sign={calc.sign} />
            <ButtonHolder {...functions} />
        </div>
    );
}

export default Calculator;
