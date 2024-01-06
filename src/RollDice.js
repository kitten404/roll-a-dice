import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {die1: 'one', die2: 'one', rolling: false, sides: ["one", "two", "three", "four", "five", "six"]};
        this.roll =  this.roll.bind(this);
    }
    roll() {
        const newDie1 = this.state.sides[
            Math.floor(Math.random() * this.state.sides.length)
        ];
        const newDie2 = this.state.sides[
            Math.floor(Math.random() * this.state.sides.length)
        ];
          //set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Dice face={this.state.die1}/>
                    <Dice face={this.state.die2}/>
                    <button onClick={this.roll}>
                        {this.state.rolling ? "Rolling..." : "Roll Dice!!!"}
                        </button>
                </div>
            </div>
        )
    }
}

export default RollDice;