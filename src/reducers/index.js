import { combineReducers } from 'redux';
import news from './news';

const newsPaper = combineReducers({
    news
});

export default newsPaper;