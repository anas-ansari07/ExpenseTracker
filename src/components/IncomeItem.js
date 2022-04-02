import React from 'react';

export default function IncomeItem({income, index , removeIncome}) {
    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const removeHandle = i => {
        removeIncome(i);
    }

  return (
    <div className="income-item">
        <button className="remove-item" onClick={()=>removeHandle(index)}>x</button>
        <div className="desc">{income.desc}</div>
        <div className="price">Rs{income.price}</div>
        <div className="date">{day +"/"+month + "/" +year}</div>
    </div>
  )
}
