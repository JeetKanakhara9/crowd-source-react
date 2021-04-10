import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import {AddItem}  from '../Item';
import Navbar from '../NavBar/Navbar';
import ShowItems from '../Item/ShowItems';
import {useFetch} from '../custom-hooks/useFetch';
import '../Item/index.css';
function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="container-full-bg"> 
        <div>
            <div>
                    
                 <div> 
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Navbar/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Switch>
                            <Route path="/showitems" component={ShowItems}/>n
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <PrivateRoute path="/additem" component={AddItem} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                 </div> 
            </div>
        </div>
        </div>
    );
}

export { App };