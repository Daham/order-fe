import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import dashboard from './reducers/dashboard';
import customer from './reducers/customer';
import product from './reducers/product';

const appReducers = {
    dashboard,
    customer,
    product
};

const rootReducer = combineReducers({...appReducers});

const store = configureStore({
    reducer: rootReducer,
});

export default store;