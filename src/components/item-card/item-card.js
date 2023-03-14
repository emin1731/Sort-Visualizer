import React, {Component} from 'react'
import styled from 'styled-components'
// import './item-card.scss'

const Card = styled.div`
    height: 150px;
    width: 100%;
    min-width: 150px;
    background-color: ${props => props.theme.secondary};
    border-radius: 10px;
    padding: 0 20px;
    padding-top: 15px;
    margin:10px;
    transition: 0.5s;
    
    &:hover {
        background-color: ${props => props.theme.hover};
        transition: 0.2s;
    }
    `
    // background-color: #393E46;

const Title = styled.p`
    color: ${props => props.theme.text};
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 5px;
    transition: 0.5s;
`
const Complex = styled.p`
    margin: 0; 
    font-size: 14px;
    color: ${props => props.theme.text_sec};

    font-weight: bold;
    transition: 0.5s;
`
// color: #b4b4b4;


const ItemCard = ({onItemSelected, field, complexity}) => {
        return(
           <Card 
                className='item-card'
                onClick={onItemSelected}>
            <Title>{field}</Title> 

            <Complex>{complexity}</Complex>
           </Card> 
        )
}
export default ItemCard