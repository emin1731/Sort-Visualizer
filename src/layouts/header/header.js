import React, {Component} from 'react';
import styled from 'styled-components'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavbarText
} from "reactstrap";
// import './header.css'
import lightModeImg from '../../assets/icons/light-mode-icon.png'
import darkModeImg from '../../assets/icons/dark-mode-icon.png'


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
        return(
            <div>
                <Container fluid >
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <HeaderLogo>Algorithms</HeaderLogo>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <HeaderInput  
                                        type='text'
                                        placeholder='Search posts'/>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                                {/* <NavItem> */}
                                    <a onClick={this.props.onSwitchTheme} href={() => false}>
                                        <img src={this.props.iconTheme === 'light' ? darkModeImg : lightModeImg} alt='theme-switch'/>
                                    </a>
                                {/* </NavItem> */}
                            {/* <NavbarText>Simple Text</NavbarText> */}
                    </Navbar>
                    <Divider/>
                </Container>
            </div>

        )

    }
}


const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color:  ${props => props.theme.tertiary};
    margin-bottom: 25px;
    transition: 0.5s;
`


const HeaderInput = styled.input`
    width:250px;
    height:36px;
    background-color: ${props => props.theme.secondary};
    border-radius: 10px;
    border: none;
    padding: 0 20px;
    font-size: 14px;
    transition: 0.5s;

`

const HeaderLogo = styled.div`
    color: ${props => props.theme.text};
    font-size: 24px;
    font-weight: bold;
    margin: 0 10px;
    margin-left: 50px;
    transition: 0.5s;
    &:hover {
        color: #bfbfbf;
        transition: 0.2s;
      }

`
const NavBarLink = styled.a`
    color: #EEEEEE;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
    &:hover {
        color: #bfbfbf;
        transition: 0.2s;
      }
`