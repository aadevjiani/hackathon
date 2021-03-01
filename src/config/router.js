import React from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom"
import Home from '../containers/Home'
import Job from '../containers/jobs'

class AppRouter extends React.component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/job' component={Chat} />
            </Router>
        )
    }
}

export default AppRouter;