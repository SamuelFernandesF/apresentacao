import React from 'react'
import Circle from '../Circle/index.js'
import Image from '../Image/index'
import Logo from '../ImagesAssets/logoApp.png'
import './navbar.css'

const logo = { height: '25px' }

const circle = {
    marginLeft : 'auto',
    marginRight : 'auto',
    background : 'white',
    border : '1px solid rgb(98, 219, 251)'
}

const imageComponent = <Image src={Logo} styleProps={logo} animate="false"/>

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="row navbar">
                <div className='col-12'> 
                    <Circle text={imageComponent} styleProps={circle}/>
                </div>
            </div>
        )
    }
}