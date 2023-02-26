import React, {Component} from 'react'
import styled from 'styled-components'
// import './item-card.scss'

const Card = styled.div`
    height: 150px;
    width: 100%;
    min-width: 150px;
    background-color: #393E46;
    border-radius: 10px;
    padding: 0 20px;
    padding-top: 10px;
    margin:10px;
    color: #EEEEEE;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #31353c;
        transition: 0.2s;
      }
`

export default class ItemCard extends Component {

    render() {
        return(
           <Card 
                className='item-card'
                onClick={this.props.onItemSelected}>
            {this.props.field}
           </Card> 
        )
    }
}
