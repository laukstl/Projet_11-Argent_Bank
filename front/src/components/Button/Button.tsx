import "./Button.scss";

interface ButtonType {
    buttonText: string;
    actionOnClick: () => void;
    isActivated?: boolean;
}

function Button({buttonText, actionOnClick, isActivated = false}:ButtonType) {
    return <>
        <button
            className="button"
            type="button"
            onClick={actionOnClick}
            disabled={isActivated}
        >{buttonText}</button>
    </>
}

export default Button;
