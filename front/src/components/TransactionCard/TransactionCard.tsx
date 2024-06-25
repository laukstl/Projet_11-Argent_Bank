import "./TransactionCard.scss";

import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

interface transactionCardPropsType {
    title: string;
    amount: string;
    amountDesc: string;
    navigateTo: string;
}

function TransactionCard({  title = "Card title",
                            amount = "Amount",
                            amountDesc = 'Amount description',
                            navigateTo = '/'
                        }: transactionCardPropsType) {
    const navigate = useNavigate();

    const handleActionOnClick = () => {
        navigate(navigateTo);
    };

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{amountDesc}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button
                    type="button"
                    buttonText="View transactions"
                    actionOnClick={handleActionOnClick}
                />
            </div>
        </section>
    )
}

export default TransactionCard;
