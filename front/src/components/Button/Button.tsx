import "./Button.scss";

interface ButtonPropsType {
    buttonText: string;
    type: "button" | "submit" | "reset" | undefined;
    actionOnClick: any;
    isActivated?: boolean;
}

Button.defaultProps = {
    buttonText: "Click!",
    type: "button",
    actionOnClick: () => {},
    isActivated: false,
};

function Button({buttonText, type, actionOnClick, isActivated}: ButtonPropsType) {
    return <>
        <button
            className="button"
            type={type}
            onClick={actionOnClick}
            disabled={isActivated}
        >{buttonText}</button>
    </>
}

export default Button;
