import {createStore} from 'redux';
import UserReducer from '../Reducer/UserReducer';
const store = createStore(UserReducer);
export default store;