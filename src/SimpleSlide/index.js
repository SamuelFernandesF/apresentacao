import React from 'react';
import './simpleSlide.css';
import Image from '../Image/index'

export default class SimpleSlide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    renderImages() {
        if(this.props.images[0] !== null) {
            return Object.keys(this.props.images).map((it) => {
                return (
                    <Image
                        styleProps={this.props.images[it].style}
                        animationStyle={this.props.images[it].animationStyle}
                        imageClass={this.props.images[it].imageClass}
                        src={this.props.images[it].src}
                        animate={this.props.images[it].animate}
                        alt={this.props.images[it].alt}
                    />
                )
            })
        }
    }
    
    renderList() {
        return Object.keys(this.props.list).map((it) => {
            return (
                <div>
                    <div className='list-header'>{this.props.list[it].header}</div>
                    <div className='list-link'>{this.props.list[it].link}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="h-100 animation-control">
                <div className="row h-100 m-0">
                    <div className={`p-30 ${this.props.size} animation-control`} style={this.props.styleProps}>
                        <div className="header" style={this.props.headerStyle}>
                            {this.props.header}
                        </div>

                        <div className="subtitle">
                            {this.props.subtext}
                        </div>

                        <div className="content mt-2">
                            {this.props.content}
                        </div>
                        <div className="list mt-2">
                            {this.renderList()}
                        </div>
                    </div>
                    <div className={this.props.imageColumn}>
                        {this.renderImages()}
                    </div>
                </div>
            </div>
        )
    }
}