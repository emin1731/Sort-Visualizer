import React, {Component} from 'react';
import Link from 'react-router-dom'
import styled from 'styled-components'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from "reactstrap";
import './header.css'

  

const HeaderInput = styled.input`
    width:250px;
    height:36px;
    background-color: #393E46;
    border-radius: 10px;
    border: none;
    padding: 0 20px;
    color: white;
    font-size: 14px;
`

const HeaderLogo = styled.div`
    color: #EEEEEE;
    font-size: 24px;
    font-weight: bold;
    margin: 0 10px;
    margin-left: 50px;
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
    

    render() {
        return(
            <div>
                <Container fluid className='nav-container'>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <HeaderLogo>
                                {/* <Link to=> */}
                                    Algorithms
                                {/* </Link>/ */}
                                </HeaderLogo>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <HeaderInput  
                                        type='text'
                                        placeholder='Search posts'/>

                                </NavItem>
                                <NavItem>
                                    {/* <Link> */}
                                        <NavBarLink>Components</NavBarLink>
                                    {/* </Link> */}
                                </NavItem>
                                <NavItem>
                                    <NavBarLink href="/components/" >Components</NavBarLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </Navbar>
                </Container>
            </div>

        )

    }
}
// export default Header
