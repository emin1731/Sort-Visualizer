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
    padding-top: 15px;
    margin:10px;
    
    &:hover {
        background-color: #31353c;
        transition: 0.2s;
      }
`

const Title = styled.p`
    color: #EEEEEE;
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 5px;
`
const Complex = styled.p`
    margin: 0; 
    font-size: 14px;
    color: #b4b4b4;
    font-weight: bold;
`

const ItemCard = ({onItemSelected, field}) => {
        return(
           <Card 
                className='item-card'
                onClick={onItemSelected}>
            <Title>{field}</Title> 

            <Complex>logarithmic</Complex>
           </Card> 
        )
}
export default ItemCard