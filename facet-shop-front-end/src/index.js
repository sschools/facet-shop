import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import FontAwesome from 'react-fontawesome'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
