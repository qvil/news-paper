import { combineReducers } from 'redux';
import leftMenu from './leftMenu';
import newsList from './newsList';

const newsPaper = combineReducers({
    leftMenu,
    newsList,
});

export default newsPaper;