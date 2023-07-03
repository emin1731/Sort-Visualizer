import React, {Component} from 'react';
import styled from 'styled-components'
import {
    Navbar,
    NavbarBrand,
    Container,
} from "reactstrap";
import './header.css'
import lightModeImg from '../../assets/icons/light-mode-icon.png'
import darkModeImg from '../../assets/icons/dark-mode-icon.png'

import darkVolumeIcon from '../../assets/icons/dark-volume-icon.png'
import darkMuteIcon from '../../assets/icons/dark-mute-icon.png'
import lightVolumeIcon from '../../assets/icons/light-volume-icon.png'
import lightMuteIcon from '../../assets/icons/light-mute-icon.png'




export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      switchTheme() {
        console.log('hello theme ')
      }

    render() {
        let volumeIcon = this.props.themeIcon === 'light' ? darkVolumeIcon : lightVolumeIcon
        let muteIcon = this.props.themeIcon === 'light' ? darkMuteIcon : lightMuteIcon

        return(
            <div>
                <Container fluid >
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <HeaderLogo>Algorithms</HeaderLogo>
                        </NavbarBrand>
                        
                        <div className='header-bar-container'>
                            <div onClick={this.props.onSwitchSound} >
                                <Theme src={this.props.soundIcon === 'true' ? volumeIcon : muteIcon} alt='theme-switch'/>
                            </div>
                            <div onClick={this.props.onSwitchTheme} >
                                <Theme src={this.props.themeIcon === 'light' ? darkModeImg : lightModeImg} alt='theme-switch'/>
                            </div>
                        
                        </div>
                    </Navbar>
                    <Divider/>
                </Container>
            </div>

        )

    }
}


const Theme = styled.img`
    width: 28px;
    height: 28px;
`

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color:  ${props => props.theme.tertiary};
    margin-bottom: 25px;
    transition: 0.5s;
`

const HeaderLogo = styled.div`
    color: ${props => props.theme.text};
    font-size: 24px;
    font-weight: bold;
    margin: 0 10px;

    transition: 0.5s;
    &:hover {
        color: #bfbfbf;
        transition: 0.2s;
      }

`
