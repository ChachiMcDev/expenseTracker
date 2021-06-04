import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage from '../components/LogInPage';
 

const headerReturn= () => {
    if(window.location.pathname !== '/'){
        return <Header />
    }
}

const AppRouter = () => (
    <BrowserRouter>
        <div>
         
           {headerReturn()}
            <Switch>
                <Route
                    path="/"
                    component={LoginPage}
                    exact={true}
                />
                <Route
                    path="/dashboard"
                    component={ExpenseDashboardPage}

                />
                <Route
                    path="/create"
                    component={AddExpensePage}

                />
                <Route
                    path="/edit/:id"
                    component={EditExpensePage}

                />
                <Route
                    path="/help"
                    component={ExpenseHelpPage}

                />
                <Route component={NotFoundPage} />

            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
