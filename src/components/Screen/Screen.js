import "./screen.css";

const Screen = ({ sign, result }) => {
    return (
        <div className="screen">
            <input className="result" value={result} />
            <span className="sign">{sign}</span>
        </div>
    );
}

export default Screen;
