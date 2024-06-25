import "./DropDownButton.scss";
import { useState } from 'react';

interface dropDownButtonPropsType {
    date: string;
    description: string;
    amount: string;
    balance: string;
    transaction: string;
    category: string;
    note: string;
}

function DropdownButton({   date = "string",
                            description = "string",
                            amount = "string",
                            balance = "string",
                            transaction = "string",
                            category = "string",
                            note = "string"
                        }: dropDownButtonPropsType) {

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
                            <td className="date_column">{date}</td>
                            <td className="desc_column">{description}</td>
                            <td className="amount_column">{amount}</td>
                            <td className="balance_column">{balance}</td>
                        </tr>
                    </tbody>
                </table>
                {/* anime la flèche en fonction de l'état du bouton */}
                <div className={`buttonArrow ${buttonState ? "spin" : "spin-reverse"}`}><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
            </button>
            {/* zone de texte qui s'affiche ou se masque en fonction de l'état du bouton */}
            <div className={`text ${buttonState ? "shown" : "hidden"}`}>
                <table>
                    <tbody>
                        <tr>
                            <td>Transaction type</td>
                            <td>{transaction}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Category</td>
                            <td>{category}  <i className="fa fa-pencil"></i>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Note</td>
                            <td>{note}  <i className="fa fa-pencil"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DropdownButton;
