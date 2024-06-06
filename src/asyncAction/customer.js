import { addManyCustomerAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    return async function(dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            console.error('Failed to fetch customers:', response.statusText);
            return;
        }
        const data = await response.json();

        dispatch(addManyCustomerAction(data));
    }
}
