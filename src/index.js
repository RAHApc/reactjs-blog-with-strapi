import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

render(
       <Provider store={store}>
           <BrowserRouter><App/></BrowserRouter>       
       </Provider>,
       document.getElementById('root'))