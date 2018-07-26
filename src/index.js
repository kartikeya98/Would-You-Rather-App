import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App';
import {Provider} from 'react-redux'
import { createStore } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import reducers from './reducers';
import middleware from './middleware';


const store = createStore(reducers,middleware)
ReactDOM.render(
<Provider store={store}>
<Router>
<App  />
</Router>
</Provider>, document.getElementById('root'));

