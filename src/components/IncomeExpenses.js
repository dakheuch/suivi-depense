import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);


    const amounts = transactions.map(transaction => transaction.amount);


    const income = amounts.filter(item => item > 1).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (amounts.filter(item => item < 1).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                {/* <h4>Income</h4> */}
                <h4>Revenus</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                {/* <h4>Expense</h4> */}
                <h4>Frais</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    )
}
