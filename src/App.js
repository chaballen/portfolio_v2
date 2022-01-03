import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './components/main';

import Portfolio from './components/portfolio';

class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <BrowserRouter>
                    <Route exact path={'/'} component={Main}/>

                    <Route path={'/portfolio'} component={Portfolio}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;