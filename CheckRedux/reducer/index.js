import {combineReducers} from 'redux';
import data from '../fakeData'
import reducerSelectBody from './reducerSelectBody'
import reducerSelect2 from './reducerSelect2'
export default combineReducers({
    data:data,
    selected:reducerSelectBody,
    selected2:reducerSelect2
})