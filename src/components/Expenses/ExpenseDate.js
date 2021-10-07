import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = new Date(props.date).getDay();
  const month = monthNames[new Date(props.date).getMonth()];
  const year = new Date(props.date).getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
