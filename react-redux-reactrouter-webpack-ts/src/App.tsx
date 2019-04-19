import React from 'react';
import { Route, Switch, Link, HashRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as settingActions from 'actions/setting';
import { mergeProps } from 'utils/tools';
import Home from 'containers/Home';
import Async from './Async';
import api from 'utils/api';


export interface Props {

}

export default
(class App extends React.Component<Props> {
    render () {
        return (
            <section>
                <Router>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={Home}
                        />
                        <Route
                            path="/:room"
                            render={
                                ({ match }) => {
                                    const Room = Async(() => import('containers/Room'));
                                    return <Room room={match.params.room}/>;
                                }
                            }
                        />
                    </Switch>
                </Router>
            </section>
        )
    }
    componentWillMount () {
        api.taskSearch({}).then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(e)
        })
    }
})