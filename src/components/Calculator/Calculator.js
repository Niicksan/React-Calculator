import "./calculator.css";

import Screen from "../Screen/Screen";
import ButtonHolder from "../ButtonHolder/ButtonHolder";
import { useState } from "react";

const Calculator = () => {
    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const numClickHandler = (value) => {
        console.log(value);

        setCalc({
            ...calc,
            num:
                calc.num === 0
                    ? calc.num + value
                    : calc.num + value.toString(),
            res: !calc.sign ? 0 : calc.res
        });

        console.log(calc.num);
        console.log(calc.sign);
        console.log(calc.res);
    };

    const signClickHandler = (e) => {
        const value = e;

        setCalc({
            ...calc,
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        });
    };

    const invertClickHandler = () => {
        setCalc({
            ...calc,
            num: calc.num ? (calc.num * -1) : 0,
            res: calc.res ? (calc.res * -1) : 0,
            sign: "",
        });
    };

    const commaClickHandler = (e) => {
        const value = e;

        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
        });
    };

    const percentClickHandler = () => {
        let num = calc.num ? parseFloat(calc.num) : 0;
        let res = calc.res ? parseFloat(calc.res) : 0;

        setCalc({
            ...calc,
            num: (num /= Math.pow(100, 1)),
            res: (res /= Math.pow(100, 1)),
            sign: "",
        });
    };

    const equalsClickHandler = () => {
        if (calc.sign && calc.num) {
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
                    calc.num === "0" && calc.sign === "/"
                        ? "Can't divide with 0"
                        : math(
                            Number(calc.res),
                            Number(calc.num),
                            calc.sign
                        )
                ,
                sign: "",
                num: 0,
            });
        }
    };

    const resetClickHandler = () => {
        setCalc({
            ...calc,
            sign: "",
            num: 0,
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
            <Screen result={calc.num ? calc.num : calc.res} />
            <ButtonHolder functions={functions} />
        </div>
    );
}

export default Calculator;
