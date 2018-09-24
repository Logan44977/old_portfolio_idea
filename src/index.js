import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ScrollToTop from './ScrollToTop';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop>
            <Main/>
        </ScrollToTop>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
