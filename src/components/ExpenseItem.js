import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DEL_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'RED_EXPENSE',
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
        <AiFillPlusCircle
          className="plus"
          style={{ fontSize: 40, color: '#79ee79' }}
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <AiFillMinusCircle
          className="minus"
          style={{ fontSize: 40, color: 'red' }}
          onClick={(event) => decreaseAllocation(props.name)}
        />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
