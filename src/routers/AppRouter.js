import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
 

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    path="/"
                    component={ExpenseDashboardPage}
                    exact={true}
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
