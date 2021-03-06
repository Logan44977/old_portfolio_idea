import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Main/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
