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
                                <th className="date_column">Date</th>
                                <th className="desc_column">Description</th>
                                <th className="amount_column">Amount</th>
                                <th className="balance_column">Balance</th>
                            </tr>
                        </tbody>
                    </table>

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        contenu=
                        <table>
                            <tbody>
                                <tr>
                                    <th>Transaction type</th>
                                    <th>Electronic</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Category</th>
                                    <th>Food  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Note</th>
                                    <th>lorem ipsum  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        contenu=
                        <table>
                            <tbody>
                                <tr>
                                    <th>Transaction type</th>
                                    <th>Electronic</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Category</th>
                                    <th>Food  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Note</th>
                                    <th>lorem ipsum  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        contenu=
                        <table>
                            <tbody>
                                <tr>
                                    <th>Transaction type</th>
                                    <th>Electronic</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Category</th>
                                    <th>Food  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Note</th>
                                    <th>lorem ipsum  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    />

                    <DropDownButton
                        date="27/02/20"
                        description="Golden Sun Bakery"
                        amount="$8.00"
                        balance="$298.00"
                        contenu=
                        <table>
                            <tbody>
                                <tr>
                                    <th>Transaction type</th>
                                    <th>Electronic</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Category</th>
                                    <th>Food  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Note</th>
                                    <th>lorem ipsum  <i className="fa fa-pencil"></i>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    />
                </div>
            </section>

        </main>
    )
}

export default Transaction;
