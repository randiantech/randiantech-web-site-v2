import React from 'react';
import ReactCardFlip from 'react-card-flip';

export default class FlipCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: any) {
        e.preventDefault();
        this.setState((prevState: any) => ({ isFlipped: !prevState.isFlipped }));
    }

    renderSide(component: any) {
        return (
            <div onClick={this.handleClick}>
                {component}
            </div>
        )
    }

    render() {
        const { isFlipped } = this.state;
        const { front, back } = this.props;
        return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                {this.renderSide(front)}
                {this.renderSide(back)}
            </ReactCardFlip>
        )
    }
}