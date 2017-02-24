// React
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// Custom
import NewsList from '../containers/NewsList';
import reducer from '../reducers';

const store = createStore(reducer);

const App = () => {
  return (
    <MuiThemeProvider>
    {/*<MuiThemeProvider store={store}>*/}
      <Provider store={store}>
        <NewsList />
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;