import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [currState, setCurrState] = useState(currency);

  useEffect(() => {
    updateCurrencyHeader();
  }, [currency]);

  const updateCurrencyHeader = () => {
    switch (currency) {
      case '$':
        setCurrState('$ Dollars');
        break;
      case '£':
        setCurrState('£ Pound');
        break;
      case '€':
        setCurrState('€ Euro');
        break;
      case '₹':
        setCurrState('₹ Rupee');
        break;
      default:
        setCurrState('£ Pound');
    }
  };

  const changeCurrency = (newCurrency) => {
    if (['$', '£', '€', '₹'].includes(newCurrency)) {
      dispatch({
        type: 'CHG_CURRENCY',
        payload: newCurrency,
      });
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="currency-dropdown" variant="success" id="dropdown-basic">
          Currency ({currState})
        </Dropdown.Toggle>

        <Dropdown.Menu className="currency-menu">
          <Dropdown.Item onClick={() => changeCurrency('$')} className="currency-item">
            $ Dollar
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCurrency('£')} className="currency-item">
            £ Pound
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCurrency('€')} className="currency-item">
            € Euro
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCurrency('₹')} className="currency-item">
            ₹ Rupee
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Currency;
