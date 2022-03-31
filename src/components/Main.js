import "./Main.css"
import { Route, Switch, Redirect } from "react-router-dom"
import { Button, Modal } from "react-bootstrap";
import { useState} from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function Main(props) {

    

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>

        </div>
    ) 
}

export default Main;