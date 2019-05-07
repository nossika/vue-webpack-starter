import React from 'react';

export interface Props {
    text?: string;
}

export default class Title extends React.Component<Props> {
    state = {
        wow: '!'
    };
    render () {
        return (
            <section>
                <h1 onClick={
                    e => {
                        this.setState({
                            wow: this.state.wow + '!'
                        });
                    }
                }>this is a {this.props.text}~ {this.state.wow}</h1>
            </section>
        )
    }
}