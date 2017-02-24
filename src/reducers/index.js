import { combineReducers } from 'redux';
import newsList from './newsList';

const newsPaper = combineReducers({
    newsList
});

export default newsPaper;