import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncAction/customer";


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);
  console.log(cash)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    };

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="container">
      <div className="cash-display">Balance: {cash}</div>
      <div className="button-container">
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Get customers from DB</button>
      </div>
        {customers.length > 0 ?
          <div>
            {customers.map((customer) => (
              <div onClick={() => removeCustomer(customer)} className="customer" key={customer.id}>{customer.name}</div>
            ))}
        </div>
          :
          <div style={{fontSize: 18}}>
              Customers is out
          </div>
      }
    </div>
  )
}

export default App
