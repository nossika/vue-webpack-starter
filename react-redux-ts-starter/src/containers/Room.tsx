import React from 'react';

export interface Props {
    room?: string;
}

export default (
    class Home extends React.Component<Props> {
        render () {
            const { room } = this.props;
            return (
                <section>
                    room: { room }
                </section>
            )
        }
    }
)