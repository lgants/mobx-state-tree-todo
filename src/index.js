import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './models/Root';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'materialize-css/dist/css/materialize.min.css';
import 'typeface-roboto';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();;
