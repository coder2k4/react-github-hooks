import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Alert from "./Components/Alert";
import AlertState from "./Context/Alert/AlertState";
import GithubState from "./Context/Github/GithubState";

function App() {

    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Switch>
                            <Route path='/about' component={About}/>
                            <Route path='/profile/:name?' component={Profile}/>
                            <Route path='/' component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
