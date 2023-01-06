import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [budget, setBudget] = useState("");
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const UPPER_LIMIT = 20000;

  const checkBudget = () => {
    if (budget > UPPER_LIMIT) {
      alert(
        "The budget value cannot exceed the upper limit of £" + UPPER_LIMIT
      );
      setBudget("");
    } else if (budget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      setBudget("");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: budget,
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          required="required"
          type="number"
          id="budget"
          step="10"
          value={budget}
          style={{ size: 10 }}
          onChange={(event) => setBudget(event.target.value)}
          onBlur={() => checkBudget()}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
