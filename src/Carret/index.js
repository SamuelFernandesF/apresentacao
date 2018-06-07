import React from 'react'
import Circle from '../Circle/index.js'
import './carret.css'

export default class Carret extends React.Component {

    clickHandlerEvent(value) { 
        this.props.click(value);
    }

    render() {
        return (
            <div className="row justify-center carret">
                <div onClick={() => {this.clickHandlerEvent('-')}}>
                    <Circle
                        text={this.props.firstCarret}
                        styleProps={this.props.carretStyle}
                    />
                </div>
                <div onClick={() => {this.clickHandlerEvent('+')}}>
                    <Circle
                        text={this.props.secondCarret}
                        styleProps={this.props.carretStyle}
                    />
                </div>
            </div>
        )
    }
}