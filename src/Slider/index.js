import React from 'react'
import SimpleSlider from '../SimpleSlide/index.js'
import './slider.css';
import Carret from '../Carret/index';
import data from '../content'


const carretStyle = {
    height: '45px',
    width: '45px',
    background: '#efefef',
    cursor: 'pointer',
    border: 'none',
    color: 'rgb(120, 120, 120)',
    fontSize: '1.3em',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px',
}

export default class Slider extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            slideNumber: 0,
            sliderState : 'active',
        }
        this.carretClick = this.carretClick.bind(this);
    }

    componentWillUpdate(props) {
        
    }

    renderSlide() {
        console.log(data[this.state.slideNumber].headerStyles);
        return (
            <SimpleSlider
                id={data[this.state.slideNumber].id}
                background={data[this.state.slideNumber].background}
                size={data[this.state.slideNumber].size}
                header={data[this.state.slideNumber].header}
                list={data[this.state.slideNumber].list}
                headerStyle={data[this.state.slideNumber].headerStyles}
                subtext={data[this.state.slideNumber].subtext}
                content={data[this.state.slideNumber].content}
                styleProps={data[this.state.slideNumber].style}
                imageColumn={data[this.state.slideNumber].imageColumn}
                images={data[this.state.slideNumber].images}
            />
        )
    }

    carretClick(val) {
        this.setState({sliderState : 'hidden'})

        let newState = (val === '-') ? this.state.slideNumber - 1 : this.state.slideNumber + 1;
        
        if (newState === -1) newState = 12
        if (newState === 13) newState = 0

        setTimeout(function() {
            this.setState({sliderState : 'active'})
            this.setState({ slideNumber: newState })
        }.bind(this), 1000);

        return;
    }

    render() {
        return (
            <div className={`slider p-0 ${this.state.sliderState}`}>
                {this.renderSlide()}
                <div className="row m-0 p-30">
                    <Carret
                        firstCarret='<'
                        secondCarret='>'
                        carretStyle={carretStyle}
                        click={this.carretClick}
                    />
                </div>
            </div>

        )
    }
}