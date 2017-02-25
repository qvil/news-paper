// React
import React from 'react';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// Custom
import TitleView from '../containers/TitleView';
import LeftView from '../containers/LeftView';
import NewsView from '../containers/NewsView';

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <TitleView />
        <LeftView />
        <NewsView />
      </div>
    </MuiThemeProvider>
  );
};

export default App;