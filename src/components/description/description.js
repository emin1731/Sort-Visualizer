import React, {Component} from 'react'
import styled from 'styled-components'
import './description.css'


const Desc = styled.div`
    height: 500px;
    background-color: #393E46;
    border-radius: 10px;
    padding: 20px 30px;
`

export default class Description extends Component {

    render() {
        return(
            <Desc>
                <h2>Description</h2>
                <div className='description'>
                    {this.props.content}
                </div>
            </Desc>
        )
    }
}