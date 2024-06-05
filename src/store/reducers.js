import peopleReducer from './people/reducer';
import vehicleReducer from './vehicle/reducer';

import { combineReducers } from 'redux';

export default combineReducers ({
    people: peopleReducer,
    vehicle: vehicleReducer,
})