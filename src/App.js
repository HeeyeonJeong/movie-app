import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Detail from './router/Detail';
import Navigation from './components/navigation';

function App(){
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/detail" component={Detail}/>
        </HashRouter>
    )
}

export default App;