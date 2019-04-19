import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as settingActions from 'actions/setting';
import { mergeProps } from 'utils/tools';
import Title from 'components/Title';
import { Route, Switch, Link, HashRouter as Router } from 'react-router-dom';

export interface Props {
    username?: string;
    updateUsername?: (username: string) => void;
}

export default connect(
    (state: any) => ({
        username: state.setting.username
    }),
    dispatch => bindActionCreators({...settingActions}, dispatch),
    mergeProps
)(
    class Home extends React.Component<Props> {
        render () {
            const { username, updateUsername } = this.props;
            return (
                <section>
                    <Title text={'title'}/>
                    <Link to={'room1'}>enter room</Link>
                    <div>
                        <button onClick={
                            () => {
                                updateUsername && updateUsername(username + '+');
                            }
                        }>dispatch an action!</button>
                        <div>
                            action: {username}
                        </div>
                    </div>

                </section>
            )
        }
    }
)