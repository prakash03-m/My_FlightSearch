import { createStore } from 'redux';

let initialState = {
    source: '',
    destination: '',
    travel: '',
    return: '',
    filteredData: '',
};

const flightBooking = (state = initialState, action) => {
    if (action.type === "Flight_Search") {
        return (
            state = action.value
        )
    }
}
const store = createStore(flightBooking);

export default store;