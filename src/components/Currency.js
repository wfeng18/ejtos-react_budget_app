import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Currency() {
  const { dispatch } = useContext(AppContext);

  const updateCurrency = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: e,
    });
  };

  return (
    <div className="alert alert-info">
      <div className="input-group">
        <select
          className="custom-select"
          id="inputGroupSelect03"
          onChange={(event) => updateCurrency(event.target.value)}
        >
          <option defaultValue hidden>
            Currency (Pound)
          </option>
          <option value="$" name="dollar">
            $ Dollar
          </option>
          <option value="£" name="pound">
            £ Pound
          </option>
          <option value="€" name="euro">
            € Euro
          </option>
          <option value="₹" name="rupee">
            ₹ Rupee
          </option>
        </select>
      </div>
    </div>
  );
}

export default Currency;
