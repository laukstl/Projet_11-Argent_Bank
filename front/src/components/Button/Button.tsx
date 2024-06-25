import "./Button.scss";

export interface ButtonPropsType {
    buttonText: string;
    type: "button" | "submit" | "reset" | undefined;
    actionOnClick: any;
    isActivated?: boolean;
}

// FIXED: VM294:1 Warning: FeatureCard: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters
// Button.defaultProps = {
//     buttonText: "Click!",
//     type: "button",
//     actionOnClick: () => { },
//     isActivated: false,
// };

function Button({   buttonText = "Click!",
                    type = "button",
                    actionOnClick = () => { },
                    isActivated = false
                }: ButtonPropsType) {
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
