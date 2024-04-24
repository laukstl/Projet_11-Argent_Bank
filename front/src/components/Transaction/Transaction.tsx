import "./Transaction.scss";

import DropDownButton from "../DropDownButton";

function Transaction() {
    return (
        <main className="main">
            <section className="account account_detail">
                <div className="account-content-wrapper text">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <i className="fa fa-window-close close" aria-hidden="true"></i>
            </section>

            <section className="detail">
                <div className="detail_wrapper">

                    <table>
                        <tbody>
                            <tr>
                                <td className="date_column">Date</td>
                                <td className="desc_column">Description</td>
                                <td className="amount_column">Amount</td>
                                <td className="balance_column">Balance</td>
                            </tr>
                        </tbody>
                    </table>

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        transaction="Electronic"
                        category="Food"
                        note="lorem ipsum"
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        transaction="Electronic"
                        category="Food"
                        note="lorem ipsum"
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        transaction="Electronic"
                        category="Food"
                        note="lorem ipsum"
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        transaction="Electronic"
                        category="Food"
                        note="lorem ipsum"
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        transaction="Electronic"
                        category="Food"
                        note="lorem ipsum"
                    />
                </div>
            </section>

        </main>
    )
}

export default Transaction;
