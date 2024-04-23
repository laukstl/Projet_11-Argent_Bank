import "./DropDownButton.scss";
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface dropDownButtonPropsType {
    date: string;
    description: string;
    amount: string;
    balance: string;
    contenu: any;
}

DropdownButton.defaultProps = {
    date: "string",
    description: "string",
    amount: "string",
    balance: "string",
    contenu: "string",
};

function DropdownButton ({date, description, amount, balance, contenu}: dropDownButtonPropsType) {

    const [buttonState, setButtonState] = useState(false);
    const toggleButtonState = () => {
        setButtonState(!buttonState);
    };

    return (
        <div className="dropdownButton">
            <button onClick={toggleButtonState} className="button">
                    <table>
                        <tbody>
                            <tr>
                                <th className="date_column">{date}</th>
                                <th className="desc_column">{description}</th>
                                <th className="amount_column">{amount}</th>
                                <th className="balance_column">{balance}</th>
                            </tr>
                        </tbody>
                    </table>
                {/* anime la flèche en fonction de l'état du bouton */}
                <div className={`buttonArrow ${buttonState ? "spin" : "spin-reverse"}`}><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
            </button>
            {/* zone de texte qui s'affiche ou se masque en fonction de l'état du bouton */}
            <div className={`text ${buttonState ? "shown" : "hidden"}`}>
                {contenu}
            </div>
        </div>
)
}

export default DropdownButton;
