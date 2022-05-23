import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './serviceWorker';

import './index.scss';
import { App } from './components/App/App';

ReactDOM.render(<App/>, document.getElementById('root'));
unregister();
