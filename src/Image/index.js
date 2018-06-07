import React from 'react'
import './image.css'

export default class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        if(this.props.animate==="true") {
            this.state = { imageClass: this.props.animationStyle}
            this.timeout();
        } 
    }

    componentDidUpdate(prevProps){
        if(this.props.imageClass !== prevProps.imageClass) {
            this.hideImage();
        }
    }

    hideImage() { 
        this.setState({imageClass: 'hide-no-transition'})
        setTimeout(function () {
            this.setState({ imageClass: this.props.animationStyle })
        }.bind(this), 200);
        this.timeout()
    }

    timeout() {
        setTimeout(function () {
            this.setState({ imageClass: `${this.props.imageClass} ${this.props.animationStyle} ` })
        }.bind(this), 500);
    }

    render() {
        return (
            <div>
                <img
                    src={this.props.src}
                    className={(this.props.animate==='true') ? this.state.imageClass :  this.props.imageClass}
                    style={this.props.styleProps}
                    alt={this.props.alt}
                />
            </div>
        )
    }
    
}