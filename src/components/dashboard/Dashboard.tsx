import * as React from 'react';

interface IDashBoardProps { }

interface IDashBoardState { }

export default class DashBoard extends React.Component<IDashBoardProps, IDashBoardState> {
    public render() {
        return (
            <h1>
                this is dashboard
            </h1>
        );
    }
}