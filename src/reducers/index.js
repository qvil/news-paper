import { combineReducers } from 'redux';
import leftMenu from './leftMenu';
import newsList from './newsList';
import titleMenu from './titleMenu';

const newsPaper = combineReducers({
    leftMenu,
    newsList,
    titleMenu,
});

export default newsPaper;