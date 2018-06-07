import React from 'react'
import './circle.css'

export default class Circle extends React.Component {
    render() {
        return (
            <div
             className="circle justify-center align-center" 
             style={this.props.styleProps}>
                {this.props.text}
            </div>
        )
    }
}