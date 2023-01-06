import React, { useContext } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          onClick={() => increaseAllocation(props.name)}
          style={{ color: "forestgreen", cursor: "pointer" }}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          onClick={() => decreaseAllocation(props.name)}
          style={{ color: "red", cursor: "pointer" }}
        ></FaMinusCircle>
      </td>
      <td>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{ cursor: "pointer" }}
        ></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
