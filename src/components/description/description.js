import React, {Component} from 'react'
import styled from 'styled-components'
import './description.css'


const Desc = styled.div`
    height: 500px;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text}
    border-radius: 10px;
    padding: 20px 30px;
    margin-bottom: 30px;
    transition: 0.5s;

`

export default class Description extends Component {

    render() {
        return(
            <Desc>
                <h2>Description</h2>
                {/* <p>hello <br></br>line</p> */}
                <p className='description'>
                    {this.props.content}
                </p>
            </Desc>
        )
    }
}