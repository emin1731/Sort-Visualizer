import React, {Component} from 'react';
import styled from 'styled-components'
import Header from '../../layouts/header/header';
import ItemCard from '../../components/item-card/item-card';
import { Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom'

// const data = [
//     {
//         name: "Selection Sort",
//         route: "/name-of-num-one",
//     },
//     {
//         name: "Bubble Sort",
//         route: "/name-of-num-two",
//     },
//     {
//         name: "Merge Sort",
//         route: "/name-of-num-three",
//     }
// ]

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    onItemSelected= (id) => {
        console.log()
    }

    renderCards = (arr) => {
        return arr.map((item, id) => {
            return(
                    <Col key={id}>
                        {/* <Link to={item.route} key={id}> */}
                            <ItemCard field={item.name} onItemSelected={this.onItemSelected}/>   
                        {/* </Link> */}
                    
                    </Col>
            )
        })
    }
    render() {
        const cards = this.renderCards(this.state.data)
        return(
            <Container>
                {/* <Header/> */}

                <Row className='justify-content-around'>
                    {cards}
                </Row>
            </Container>
        )
    }
}